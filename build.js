const fs = require('fs')
const mustache = require('mustache')
const path = require('path')

const dist = path.resolve(__dirname, 'dist')
const componentTemplate = path.resolve(__dirname, 'componentTemplate.js')
const indexTemplate = path.resolve(__dirname, 'indexTemplate.js')
const svgPath = path.resolve(__dirname, 'MaterialDesign/icons/svg')

const svgs = fs.readdirSync(svgPath)

const getPath = (svg) => {
  const matches = /\sd="(.*)"/.exec(fs.readFileSync(path.join(svgPath, svg), {
    encoding: 'utf8'
  }))

  if (matches) {
    return matches[0]
  }
}

const uppercaseFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

const toPascal = (name) => {
  let pascal = name.split('-').map(uppercaseFirstLetter).join('')
  return pascal
}

let templateData = svgs.map(svg => {
  return {
    name: svg.slice(0, -4),
    path: getPath(svg)
  } 
})

let componentFile = fs.readFileSync(componentTemplate, { encoding: 'utf8'})

for (data of templateData) {
  let component = mustache.render(componentFile, data)
  let filename = data.name + ".vue"
  fs.writeFileSync(path.resolve(dist, filename), component)
}

let indexFile = fs.readFileSync(indexTemplate, { encoding: 'utf8'})
let componentNames = templateData.map(function(item) {
  return { name: item.name, pascal: toPascal(item.name) }
})
let output = mustache.render(indexFile, { names: componentNames })

fs.writeFileSync(path.resolve(dist, "index.js"), output)
