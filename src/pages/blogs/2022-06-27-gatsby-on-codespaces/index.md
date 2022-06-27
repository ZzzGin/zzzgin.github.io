---
path: "/blogs/gatsby-on-codespaces"
date: "2022-06-27T20:19:20.131Z"
title: "Gatsby on Codespaces"
description: "ON the homepage of Codespaces, Github markets it as a seamless switch of desktop VS Code. My blog is hosted on Github Pages with Gatsby as its framework. I use VS Code to write blogs locally. So naturally, after getting the preview opportunity to Codespaces, I try to migrate to it. Here is a note for how to set up the workspace."
tags: ["blog","gatsby", "codespace"]
featuredimage: 
featuredimageAlt: ""
---

```toc
```

## Multiple Repositories Permission Setup
My blog is structured with multiple repositories hosted on Github for "[password-protected blogs](https://www.zzzgin.com/private-blog/password-protected-blog-in-gatsby)". They are managed by the native feature from Git called [Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules). The structure looks like this:

```
<public Github Repo> gatsby-project root
  ┗ pages
    ┣ <Private Github Repo> Folder for private blogs as a submodule
    ┣ Folder for blogs
    ┗ ...
```

This structure helps when you want to have some private content within a public repo. But this does not work in codespaces by default because for security reasons, Codespaces only allow read/write permission on the selected package when you start the VM.

The permission is managed in `.devcontainer`. It's a folder in the root directory to config Codespaces VM creation.

My `.devcontainer/devcontainer.json` looks like this: 
```json 
{
	"name": "Node.js",
	"build": {
		"dockerfile": "Dockerfile",
		"args": { "VARIANT": "16-bullseye" }
	},

	"customizations": {
		"vscode": {
			"extensions": [
				"your-own-extension-ids"
			]
		},
		"codespaces": {
			"repositories": {
				// This is how to config permission 
				// to access other repo
				"ZzzGin/private-blogs": { 
					"permissions": "write-all"
				}
			}
		}
	},

	"forwardPorts": [8000],
	"remoteUser": "node"
}
```

> NOTE: you need to commit the change and then create a new Codespace to apply this change. At least for me, it works ONLY after doing this.

## ERROR - Failed to launch the browser process!
By deafult, we are using some docker image provided by Github and it works with Gatsby build. But After applying the new `.devcontainer` file, the images "16-bullseye" does not include Chomium for some process in Gatsby build.

To resolve this, we need to run following commands to install Chrome as prerequisites:
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb &&
sudo apt --assume-yes install ./google-chrome-stable_current_amd64.deb
```

## VIM Plugin Doesn't Work
Pending investigation.