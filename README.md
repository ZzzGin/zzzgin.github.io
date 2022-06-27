## Init Project Locally
```bash
git clone --recurse-submodules https://github.com/ZzzGin/zzzgin.github.io.git && 
cd zzzgin.github.io &&
npm install &&
npm run build &&
npm run start
```

## Init Project in Code Spaces
```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb &&
sudo apt --assume-yes install ./google-chrome-stable_current_amd64.deb &&
rm google-chrome-stable_current_amd64.deb && 
git submodule init &&
git submodule update &&
npm install &&
npm run clean &&
npm run build &&
npm run start
```

## Useful Command 
* `npm run start`: start a develop server
* `npm run deploy`: build the site and deploy to zzzgin.github.io
* `npm run newreading "<book-name>" "<chapter-number>" "<chapter-name>"`: create a note file for reading
* `npm run newblog "<blog-name>"`: create a new blog
* `npm run newevent`: create new event
* `npm run newprivateblog "<blog-name>"`: create a new private blog protected by password