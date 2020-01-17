const path = require("path");
const dist = path.resolve(__dirname, "../dist");
const fs = require("fs");
const icons = require('@mdi/js/commonjs/mdi.js');

//Babel wasn't very happy trying to load .vue components so we'll just read the index.js file and test that the exports are there. A bit dirty but effective.
describe("index.js", () => {
    const folderContents = fs.readdirSync(dist).filter(a => a.endsWith(".vue"));

    test("dist isn't empty", () => {
        expect(folderContents.length).not.toEqual(0);
    });

    test("exported SFCs in dist are equal to icons in package", () => {
        const iconIDs = Object.keys(icons);
        expect(iconIDs.length).toEqual(folderContents.length);
    });

    test("SFCs have export entry", async () => {
        let indexContent = fs.readFileSync(path.join(dist, "index.js"));
        folderContents.forEach(entry => {
            var index = entry.indexOf(".vue");
            let name = entry.substr(0, index);

            expect(indexContent.indexOf(`export ${name} from './${name}';`)).not.toEqual(-1);
        });
    })
});