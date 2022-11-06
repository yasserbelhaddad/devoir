const { readdirSync, readFileSync, lstatSync } = require('fs');
const path = require('path');

let co = 0;

function getDir(source){
    
    const results = readdirSync(source);
    results.forEach(function (result) {
    if (lstatSync(path.join(source, result))
        .isFile()) {
        if (readFileSync(path.join(source, result))
        .includes(argument) && path.extname(result)
        /*.toLowerCase() === extension*/) {
        console.log("Your string is in file: "+ result)
        co=co+1;
        }
    }
    else if (lstatSync(path.join(source, result))
        .isDirectory()) {
        getDir(path.join(source, result));
    }
    });
        
}



const dir = process.cwd();
//const extension = '.txt'; //You can change the extension type here
let argument = process.argv[2];
getDir(dir);
if (co == 0){
    console.log("NONE")
}