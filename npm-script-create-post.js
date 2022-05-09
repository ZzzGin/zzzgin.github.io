const { createPost } = require("@dschau/create-gatsby-blog-post");
 
const createPostPromise = createPost(process.argv[2], {
    root: "src/pages/blogs"
});

createPostPromise.then( result => {
    if (result.success) {
        var exec = require('child_process').exec;
        exec('code ' + result.path+"/index.md", (error, stdout, stderr) => {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        });
    } else {
        console.log("File creation failed.")
    }
});