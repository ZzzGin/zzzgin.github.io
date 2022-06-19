const createPost = require("./helpers/createPost.js");
const dasherize = require("lodash.kebabcase");

const bookName = process.argv[2];
const chapterNum = process.argv[3];
const chapterName = process.argv[4];
const dasherizedBookName = dasherize(bookName);
const lowerCasedBookName = bookName.toLowerCase();


const newFile = createPost(
    "./src/pages/readings/", 
    dasherizedBookName+"/chapter-"+chapterNum+"/", 
    bookName+": CP" + chapterNum + " - " + chapterName, 
    "/readings/"+dasherizedBookName+"-chapter-"+chapterNum, 
    ["readings",lowerCasedBookName]
);

var exec = require('child_process').exec;
exec('code ' + newFile, (error, stdout, stderr) => {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});