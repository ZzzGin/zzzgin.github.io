---
path: "/blogs/bash-shortcut-for-uscis-curling"
date: "2022-06-11T16:11:45.205Z"
title: "Bash Shortcut For Static Website Curling"
tags: ["blog", "bash"]
description: "TO track the current status of my case in USCIS, here is the command I used for curl USCIS static website every 5 mins and print in CLI."
---

## Final command
> Change {your-case-id} to the case ID looks like "IOE123412341234"
```bash
while true; do echo '----------------------------------------'; date; curl -s https://egov.uscis.gov/casestatus/mycasestatus.do\?appReceiptNum\={your-case-id} | pup 'h1 text{}'; sleep 300; done
```
Example output:
```
---------------------------------------
Sat Jun 11 09:10:10 PDT 2022
Case Is Being Actively Reviewed By USCIS
---------------------------------------
Sat Jun 11 09:15:12 PDT 2022
Case Is Being Actively Reviewed By USCIS
---------------------------------------
Sat Jun 11 09:20:13 PDT 2022
Case Is Being Actively Reviewed By USCIS
---------------------------------------
Sat Jun 11 09:25:14 PDT 2022
Case Is Being Actively Reviewed By USCIS
```

## Explaination
### Every 5 mins...
```bash
while true; do {your-commands} sleep 300; done
```

### Print the current time
```bash
date
```

### Curl DOM of a web page
```bash
curl -s {url}
```
* `-s` flag is to "silent" the progress bar printing.

### DOM navigation
```bash
pup {selector}
```
* pup: https://github.com/ericchiang/pup
    * to install: `brew install pup`
* `h1` is the css selector
    * it can be a tag name like `h1`
    * or it can be dom id like `#id`
    * or class name `.class`
* `text{}` can fetch the text inside of the dom object
    * without this the output looks like `<h1>Your case is actively reviewed by USCIS</h1>`
    * with this the output looks like `Your case is actively reviewed by USCIS`