#!/usr/bin/env node

// Imports
const fs = require("fs");
const fsp = require("fs").promises;
const mustache = require("mustache");
const path = require("path");
const icons = require("@mdi/js/commonjs/mdi.js");
const dist = path.resolve(__dirname, "dist");
const templateFile = path.resolve(__dirname, "template.mst");
const iconIDs = Object.keys(icons);

const templateData = iconIDs.map(id => {
  const splitID = id.split(/(?=[A-Z])/).slice(1);

  const name = splitID.join("");

  // This is a hacky way to remove the 'mdi' prefix, so "mdiAndroid" becomes
  // "android", for example
  const title = splitID.join("-").toLowerCase();

  // Transforms the icon ID to a human readable form for default titles.
  // For example, "mdiAndroidStudio" becomes "Android Studio"
  const readableName = splitID.join(" ");

  return {
    name,
    title,
    readableName,
    svgPathData: icons[id]
  };
});

const generateIcons = async () => {
  const template = fs.readFileSync(templateFile, { encoding: "utf8" });

  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }

  const filePromises = templateData.map(
    ({ name, title, readableName, svgPathData }) => {
      const component = mustache.render(template, {
        name,
        title,
        readableName,
        svgPathData
      });
      const filename = `${name}.vue`;
      return fsp.writeFile(path.resolve(dist, filename), component);
    }
  );

  Promise.all(filePromises);
};

generateIcons();
