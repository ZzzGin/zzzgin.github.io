---
path: "/blogs/personal-image-hosting-service-on-aws"
date: "2022-07-16T23:03:31.415Z"
title: "Personal Image Hosting Service On AWS"
description: "DESIGN a personal image hosting service."
tags: ["blog","project"]
featuredimage: 
featuredimageAlt: ""
---

```toc
```

## Description
Currently, I am using Gatsby plus Github Pages for personal blogging, noting and sharing. For most of articles on my site, markdown is used for obvious reasons. One thing worries me a little bit is that my images are currently hosted on Github. And I know for free Github accounts, there is a quota on git project size and similarly, on Github Pages hosting size. Natually, a project idea of creating a image hosting service on S3 emerges. So this blog is to discuss the necessity of this project idea and if this looks like a good thing to do, design the approaches and note the learnings.

## Is this a good idea?
Basically, 4 questions to be answered:
1. what is the quota
2. what is the usage of my site
3. why not other 3rd party image/file hosting services - compare the price
4. what I gonna loss

### Github quota
* Github Repository Storage Quota: [1GB](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage)
* Github Pages Storage Quota: [1GB](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)
* Github Pages _soft_ bandwidth limit: [100GB/month](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

### Usage of my site
First, based on my understanding, we need to focus on Github repo quota than Github Pages storage quota because these 2 values are the same (both 1G) and, there will always be a copy of what gonna be hosted in Pages in the Github repo (in the gh-page branch, if you are using gh-pages for quick hosting). 

At this point of time, by doing `du -h /workspaces/zzzgin.github.io/public/ --max-depth=1` in my project root, I can get the Github Pages usage:
```
9.2M    /workspaces/zzzgin.github.io/public/tags
116K    /workspaces/zzzgin.github.io/public/icons
1.9M    /workspaces/zzzgin.github.io/public/page-data
200K    /workspaces/zzzgin.github.io/public/404
4.5M    /workspaces/zzzgin.github.io/public/blogs
668K    /workspaces/zzzgin.github.io/public/timeline
196K    /workspaces/zzzgin.github.io/public/private-blog
66M     /workspaces/zzzgin.github.io/public/static
2.3M    /workspaces/zzzgin.github.io/public/readings
1016K   /workspaces/zzzgin.github.io/public/artworks
104M    /workspaces/zzzgin.github.io/public/
```

`static` folder is for static storages. Current usage is 66M. There are around 25M of usage is for fonts. The rest of usage is for images. So it's 40M. Currently, there are around 125 images generated by Gatsby image preprocessing plugin. So let's make the estimation that for every image, (40M/100) 400K of data will be used in GH quota. Plus the original image, let's estimate that **adding 1 image will consume around 1M data**. This is an estimation more to the "right" side for safty.

So, let's say we reserve 600M of data usage for images. We can store 600 images on my site. If every blog takes 4 images, and every month I will write 4 blogs, every year, there will be  12 * 4 * 4 = 192 images been generated. As a result, as a rough estimation, 3 years of blogging will run out my Github quota.

As a result, looks like I do want to find/create a solution for iamge hosting sometime.

### Comparing the prices of different potential solutions
|   | AWS S3 | Github data pack | imgbb.com | photobucket.com |
| - | ------ | ---------------- | --------- | --------------- |
| Storage | 50G | 50G | Unlimited | 25G |
| Price($) | 1.15(est.) | 5 | 3.99 | 6 | 