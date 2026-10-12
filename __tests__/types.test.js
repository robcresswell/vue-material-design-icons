import { execFile } from 'node:child_process';
import { rm, mkdir, symlink } from 'node:fs/promises';
import path from 'node:path';
import { promisify } from 'node:util';
import { beforeAll, describe, expect, it } from 'vitest';

const root = path.join(import.meta.dirname, '..');
const fixture = path.join(import.meta.dirname, 'types');
const tsc = path.join(root, 'node_modules', '.bin', 'tsc');

// Resolve the package by name, as a consumer would, so the `typesVersions`
// mapping in dist/package.json is exercised rather than a relative import.
beforeAll(async () => {
  const modules = path.join(fixture, 'node_modules');
  const link = path.join(modules, 'vue-material-design-icons');

  await mkdir(modules, { recursive: true });
  await rm(link, { force: true });
  await symlink(path.join(root, 'dist'), link, 'dir');
});

describe('Type declarations', () => {
  it.each([
    ['bundler', 'esnext'],
    ['nodenext', 'nodenext'],
  ])('type check with "%s" module resolution', async (resolution, module) => {
    const { stdout } = await promisify(execFile)(tsc, [
      '-p',
      fixture,
      '--module',
      module,
      '--moduleResolution',
      resolution,
    ]).catch((error) => error);

    expect(stdout).toBe('');
  });
});
