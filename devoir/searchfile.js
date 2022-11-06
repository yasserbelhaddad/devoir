const {readFileSync, promises: fsPromises} = require('fs');

let file = process.argv[2];
let argument = process.argv[3];
function checkIfContainsSync(filename, str) {
    const contents = readFileSync(filename, 'utf-8');

  // 👇️ convert both to lowercase for case insensitive check
    const result = contents.toLowerCase().includes(str.toLowerCase());

    return result;
}

result = checkIfContainsSync(file, argument)
if(result){
    console.log("Your string is in file: "+file);
}else{
    console.log("NONE");
}
