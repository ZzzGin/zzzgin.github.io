const { createPost } = require("@dschau/create-gatsby-blog-post");
 
createPost(process.argv[2], {
    root: "src/pages/blogs"
});
