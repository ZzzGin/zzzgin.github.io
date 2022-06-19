---
path: "/readings/sed-and-awk-101-hacks-chapter-2"
date: "2022-06-18T03:44:22.163Z"
title: "Sed and Awk 101 Hacks: CP2 - Sed Substitue Command"
description: "Sed Substitue Command"
tags: ["readings", "sed and awk 101 hacks", "bash", "sed"]
featuredimage: 
featuredimageAlt: 
---

```toc
```

## Syntax
```bash
sed '[address-range|pattern-range] s/original-string/replacement-string/[substitute-flags]' inputfile
```

Replace all occurrences of Manager with Director:
```bash
sed 's/Manager/Director/' employee.txt
```

Replace Manager with Director only on lines that contain the keyword 'Sales':
```bash
sed '/Sales/s/Manager/Director/' employee.txt
```

