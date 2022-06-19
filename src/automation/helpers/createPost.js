/**
 * This function will create:
 *  - 1. a folder at "{root}/subfolder/{title}"
 *  - 2. place an file named "index.md" in the folder
 *  - 3. a template in the index.md
 */

const { assert } = require("console");
const fs = require('fs');

const createFolder = (root, subfolder) => {
    
    const newFolderPath = root + subfolder;

    try {
        if (!fs.existsSync(newFolderPath)) {
            fs.mkdirSync(newFolderPath, { recursive: true });
        }
    } catch (err) {
        console.error(err);
    }

    assert(fs.existsSync(newFolderPath), `ERROR: New folder [${newFolderPath}] not created.`)
    return newFolderPath;
}



const createPost = (root, subfolder, title, path, tags) => {

    const creationDateTime = new Date();
    
    const newFolderPath = createFolder(root, subfolder);

    const template = 
`---
path: "${path}"
date: "${creationDateTime.toISOString()}"
title: "${title}"
description: ""
tags: [${tags.map(el => `\"${el}\"`)}]
featuredimage: 
featuredimageAlt: ""
---

\`\`\`toc
\`\`\`

## Hello
Wow, a fresh new post!
`;

    try {
        if (!fs.existsSync(newFolderPath+'/'+'index.md')) {
            fs.writeFileSync(newFolderPath+'/'+'index.md', template, { flag: 'a'});
        }
    } catch (err) {
        console.error(err);
    }

    return newFolderPath+'/'+'index.md';
}

// createPost("./readings/", "sed-and-awk-101-hacks/chapter-1/", "Resume Tips for SWE", "/readings/sed-cp1-hi", ["readings", "hi"]);

module.exports = createPost;