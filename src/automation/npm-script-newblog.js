const createPost = require("./helpers/createPost.js");
const dasherize = require("lodash.kebabcase");

const title = process.argv[2];
const dasherizedTitle = dasherize(title);
const date = (new Date()).toISOString().split("T")[0]

const newFile = createPost(
    "./src/pages/blogs/", 
    date+'-'+dasherizedTitle+"/", 
    title, 
    "/blogs/"+dasherizedTitle, 
    ["blog"]
);

var exec = require('child_process').exec;
exec('code ' + newFile, (error, stdout, stderr) => {
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});