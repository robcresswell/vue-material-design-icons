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

function renderAndWrite({ name, title, readableName, svgPathData }) {
  const component = mustache.render(template, {
    name,
    title,
    readableName,
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

  // Transforms the icon ID to a human readable form for default titles.
  // For example, "mdiAndroidStudio" becomes "Android Studio"
  const readableName = splitID.join(' ');

  return {
    name,
    title,
    readableName,
    svgPathData: icons[id],
  };
}

function writeIndexFile(templateData) {
  let exported = "";
  templateData.forEach(el => {
    exported += `export ${el.name} from './${el.name}';\n`;
  });
  return fsp.writeFile(path.resolve(dist, "index.js"), exported);
}

function copyPackageFile(name) {
  return new Promise(resolve => {
    let dest = path.join(dist, name);
    fs.copyFileSync(`./${name}`, dest);
    resolve(dest);
  });
}

(async function() {
  const iconIDs = Object.keys(icons);

  if (fs.existsSync(dist)) {
    //Note: Recursive option available from Node v12.10.0
    await fsp.rmdir(dist, { recursive: true });
  }
  await fsp.mkdir(dist);

  const templateData = iconIDs.map(getTemplateData);

  // Batch process promises to avoid overloading memory
  await Promise.all([
    pMap(templateData, renderAndWrite, { concurrency: 20 }),
    writeIndexFile(templateData),
    copyPackageFile("./styles.css"),
    copyPackageFile("./package.json"),
    copyPackageFile("./README.md")
  ]);

})();
