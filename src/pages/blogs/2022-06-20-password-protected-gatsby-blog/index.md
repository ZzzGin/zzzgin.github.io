---
path: "/blogs/password-protected-gatsby-blog"
date: "2022-06-20T02:32:17.078Z"
title: "Password Protected Gatsby Blog"
description: "Backlog. An brief idea of how to protect notes in Gatsby. More details are needed to be added."
tags: ["blog", "idea", "gatsby", "backlog"]
featuredimage: images/WeChatec11220bcea4925a002d645f78b3f876.png
featuredimageAlt: "brief"
---

## Idea
![idea](images/WeChatec11220bcea4925a002d645f78b3f876.png)

## Proof of Concept
Type "secret" in the input box to decypher the blog.

https://zzzgin.github.io/artworks/playground/encrypted-blog

## Tasks Break Down
1. Create a react component take an json obejct and render the markdown 
    1. inputs:
        ``` json
        {
            "path": "/private/a-blog-protected-by-password",
            "date": "2022-06-20T02:32:17.078Z",
            "title": "A Blog Protected By Password",
            "description": "Some description",
            "tags": ["private"],
            "featuredimage": "url-of-image",
            "featuredimageAlt": "alt",
            "content": "encrypted content"
        }
        ```
    2. An `input` element to take the user cipher
2. change in `gatsby-node` to create pages for private blogs
3. merge tags