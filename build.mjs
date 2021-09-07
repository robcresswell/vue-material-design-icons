// Imports
import fs from 'fs';
import { promises as fsp } from 'fs';
import mustache from 'mustache';
import path from 'path';
import pMap from 'p-map';
import icons from '@mdi/js/commonjs/mdi.js';

const __dirname = path.resolve();
const dist = path.resolve(__dirname, 'dist');
const templateFile = path.resolve(__dirname, 'template.mst');
const template = fs.readFileSync(templateFile, { encoding: 'utf8' });

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

(async function() {
  const iconIDs = Object.keys(icons);

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const templateData = iconIDs.map(getTemplateData);

  // Batch process promises to avoid overloading memory
  await pMap(templateData, renderAndWrite, { concurrency: 20 });
})();
