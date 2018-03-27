var fs=require('fs');
console.log("create-hook");
fs.createReadStream('./node_modules/changelog-generator/post-commit').pipe(fs.createWriteStream('./.git/hooks/post-commit'));