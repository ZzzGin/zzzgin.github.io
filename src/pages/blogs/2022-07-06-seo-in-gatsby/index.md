---
path: "/blogs/seo-in-gatsby"
date: "2022-07-06T00:53:40.729Z"
title: "SEO in Gatsby"
description: "SEO stands for Search Engine Optimization. Natually, Gatsby as a Server Side Rendering (SSR) framework, it works better than React itself with search engine. This blog is a note about how I make my personal blog \"online\" to Google."
tags: ["blog","gatsby","seo"]
featuredimage: 
featuredimageAlt: ""
---

```toc
```

## Why SEO? 
1. It's a blog. I used it to market myself. So I want it to be exposed to public.
2. Gatsby is a static website framework. Its content usually hosted serverlessly. So in order to do content search, I need a search engine to index my website.

## What I did to improve SEO?
### React Helmet
[React helmet](https://www.npmjs.com/package/react-helmet) helps to add title and description for your website so search engine can display content you defined in the search results.

### Request crawling from Google
Google document about request indexing: [link](https://support.google.com/webmasters/answer/9012289#request_indexing)

I need to verify I am the owner of the domain to send a request, to do that, I need to:
1. Log to AWS Route 53
2. Add a new TXT record with value provided by Google URL inspection tool.