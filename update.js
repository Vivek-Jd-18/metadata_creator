const fs = require("fs");
const args = process.argv.slice(2);
// console.log(args);
const inputFolder = args[0]
// console.log(inputFolder);

const dir = `${__dirname}/${inputFolder}`;
const inputFiles = fs.readdirSync(dir).sort();

const names = ["Enzo","Gavi","Ferran","Musiala","Olmo","Richarlison","mac Allister"]

inputFiles.forEach((files, i) => {
        let id = files.split(".").shift();
        let data = JSON.parse(fs.readFileSync(`${dir}/${files}`));

        data.name = `name is ${names[i]}`;
        data.image=`ipfs://QmaxHMMnvQ5u4sDDc8wqP3tToj28yJhX626Vz6AWVp6N4v/${id}.png`
        fs.writeFileSync(`${dir}/${files}`,JSON.stringify(data,null,2));
        console.log(`file ${i + 1}`, files);
})

