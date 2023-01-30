const fs = require("fs");
const args = process.argv.slice(2);
// console.log(args);
const inputFolder = args[0]
// console.log(inputFolder);

const dir = `${__dirname}/${inputFolder}`;
const inputFiles = fs.readdirSync(dir).sort();

inputFiles.forEach((files,i)=>{
    fs.renameSync(`${dir}/${files}`,`${dir}/${files.split("_").pop()}`)
    console.log(`file ${i+1}` ,files);
})





Ethereum

Bitcoin
mainnet
VeChain
mainnet
Litecoin
mainnet
GoChain
mainnet
Hedera
mainnet
Tron
mainnet
Aeternity
mainnet
NEO
mainnet
Matic
mainnet
ImmutableX (IMX)
mainnet

console.log(inputFiles)