#!/usr/bin/env node

// Imports
const fs = require('fs');
const fsp = require('fs').promises;
const mustache = require('mustache');
const path = require('path');
const pMap = require('p-map');
const icons = require('@mdi/js/commonjs/mdi.js');
const dist = path.resolve(__dirname, 'dist');
const templateFile = path.resolve(__dirname, 'template.mst');
const template = fs.readFileSync(templateFile, { encoding: 'utf8' });
const process = require('process');

function renderAndWrite({ name, title, svgPathData }) {
  const component = mustache.render(template, {
    name,
    title,
    svgPathData,
  });
  const filename = `${name}.vue`;

  return fsp.writeFile(path.resolve(dist, filename), component);
}

function getTemplateData(id) {
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

(async function() {
  const iconIDs = Object.keys(icons);

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const templateData = iconIDs.map(getTemplateData);

  // Batch process promises to avoid overloading memory
  await pMap(templateData, renderAndWrite, { concurrency: 20 });
})();
