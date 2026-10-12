#!/usr/bin/env node

import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import icons from '@mdi/js';

const root = import.meta.dirname;
const dist = path.join(root, 'dist');
const staticFiles = ['styles.css', 'icon.d.ts', 'package.json', 'README.md'];

function renderTemplate(title: string, svgPathData: string, name: string) {
  return `<template>
  <span v-bind="$attrs"
        :aria-hidden="title ? null : 'true'"
        :aria-label="title"
        class="material-design-icon ${title}-icon"
        role="img"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <title v-if="title">{{ title }}</title>
      <path d="${svgPathData}"/>
    </svg>
  </span>
</template>

<script>
export default {
  name: "${name}Icon",
  emits: ['click'],
  props: {
    title: {
      type: String,
    },
    fillColor: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: Number,
      default: 24
    }
  }
}
</script>`;
}

function getNames(id: string) {
  // Drop the 'mdi' prefix, so "mdiCheckboxMarked" becomes "CheckboxMarked"
  // and "checkbox-marked"
  const words = id.split(/(?=[A-Z])/).slice(1);

  return {
    name: words.join(''),
    title: words.join('-').toLowerCase(),
  };
}

await rm(dist, { recursive: true, force: true });
await mkdir(dist);

for (const [id, svgPathData] of Object.entries(icons)) {
  const { name, title } = getNames(id);

  await writeFile(
    path.join(dist, `${name}.vue`),
    renderTemplate(title, svgPathData, name),
  );
}

for (const file of staticFiles) {
  await copyFile(path.join(root, file), path.join(dist, file));
}
