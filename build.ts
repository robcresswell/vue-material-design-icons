#!/usr/bin/env -S node -r ts-node/register/transpile-only

// Imports
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import pMap from 'p-map';
import * as icons from '@mdi/js/commonjs/mdi.js';
import { existsSync } from 'fs';

const dist = path.resolve(__dirname, 'dist');

function renderTemplate(title: string, svgPathData: string, name: string) {
  return `<template>
  <span :aria-hidden="!title"
        :aria-label="title"
        class="material-design-icon ${title}-icon"
        role="img"
        v-bind="$attrs"
        @click="$emit('click', $event)">
    <svg :fill="fillColor"
         class="material-design-icon__svg"
         :width="size"
         :height="size"
         viewBox="0 0 24 24">
      <path d="${svgPathData}">
        <title v-if="title">{{ title }}</title>
      </path>
    </svg>
  </span>
</template>

<script>
export default {
  name: "${name}Icon",
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

function getTemplateData(id: string) {
  const splitID = id.split(/(?=[A-Z])/).slice(1);

  const name = splitID.join('');

  // This is a hacky way to remove the 'mdi' prefix, so "mdiAndroid" becomes
  // "android", for example
  const title = splitID.join('-').toLowerCase();

  return {
    name,
    title,
    svgPathData: icons[id],
  };
}

async function build() {
  const iconIDs = Object.keys(icons);

  if (!existsSync(dist)) {
    await mkdir(dist);
  }

  const templateData = iconIDs.map(getTemplateData);

  // Batch process promises to avoid overloading memory
  await pMap(
    templateData,
    async ({ name, title, svgPathData }) => {
      const component = renderTemplate(title, svgPathData, name);
      const filename = `${name}.vue`;

      return writeFile(path.resolve(dist, filename), component);
    },
    { concurrency: 20 },
  );
}

build().catch((err: unknown) => {
  console.log(err);
});
