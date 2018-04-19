#!/usr/bin/env node

const fs = require("fs");
const mustache = require("mustache");
const path = require("path");

const dist = path.resolve(__dirname, "dist");
const template = path.resolve(__dirname, "template.mst");
const svgPath = path.resolve(__dirname, "node_modules/@mdi/svg/svg");

const svgs = fs.readdirSync(svgPath);

const getPath = svg => {
  const matches = /\sd="(.*)"/.exec(
    fs.readFileSync(path.join(svgPath, svg), {
      encoding: "utf8"
    })
  );

  if (matches) {
    return matches[0];
  }
};

const makeHumanReadable = name => {
  const spacedName = name.split("-").join(" ");
  humanReadableName = spacedName.charAt(0).toUpperCase() + spacedName.slice(1);
  return humanReadableName;
};

const templateData = svgs.map(svg => {
  const name = svg.slice(0, -4);
  return {
    name: name,
    readableName: makeHumanReadable(name),
    path: getPath(svg)
  };
});

const componentFile = fs.readFileSync(template, { encoding: "utf8" });

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist);
}

for (data of templateData) {
  const component = mustache.render(componentFile, data);
  const filename = data.name + ".vue";
  fs.writeFileSync(path.resolve(dist, filename), component);
}
