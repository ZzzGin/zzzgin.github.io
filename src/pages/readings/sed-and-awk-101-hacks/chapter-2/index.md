---
path: "/readings/sed-and-awk-101-hacks-chapter-2"
date: "2022-06-18T03:44:22.163Z"
title: "Sed and Awk 101 Hacks: CP2 - Sed Substitue Command"
description: "SED Substitue Command"
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

## Global Flag (`-g`)
Without flag `-g`, only the 1st occurrence of the {original-string} on each line will be replaced.
```bash
$ sed 's/a/A/' employee.txt
101, John Doe, CEO
102, J*A*son Smith, IT Manager
103, R*A*j Reddy, Sysadmin
104, An*A*nd Ram, Developer
105, J*A*ne Miller, Sales Manager
```

With `-g`, all occurrences of lower case a with upper case A:
```bash
$ sed 's/a/A/g' employee.txt
101, John Doe, CEO
102, J*A*son Smith, IT M*A*n*A*ger
103, R*A*j Reddy, Sys*A*dmin
104, An*A*nd Ram, Developer
105, J*A*ne Miller, S*A*les M*A*n*A*ger
```

## Number Flag (1, 2, 3.. flag)
> Only the **n-th** instance of original-string will trigger the substitution.

> n can be anything **from 1 to 512**

Following command will only replace the 2nd of occurrence of 'a' to 'A'.
```bash
sed 's/a/A/2' employee.txt
```

## Print Flag (`-p`)
The sed substitute flag p stands for print. When the substitution is successful, it prints the changed line.

Print only the line that was changed by the substitute command, `-n` flag to silent the "read" print.
```bash
sed -n 's/John/Johnny/p' employee.txt
```

Change the 2nd instance of “locate” to “find” and print the result:
```bash
$ sed -n 's/locate/find/2p' substitute-locate.txt
locate command is used to find files
locate command uses database to find files
```

## Write Flag (`-w`)
Instead of printing to standard output, `-w` will write to a file.
```bash
sed 's/locate/find/2w output.txt' substitue-locate.txt
```

## Ignore Case Flag (`-i`)
With `-i` flag, pattern matching will ignore case.
```bash
sed 's/john/Johnny/i' employee.txt
```

## Execute Flag (`-e`)
`-e` flag stand for execute. Using the sed `-e` flag, you can execute whatever is available in the pattern space as a shell command, and the output will be returned to the pattern space.

> This is available only in the GNU sed.

Conent in the file:
```bash
$ cat files.txt
/etc/passwd
/etc/group
```

`s/^/{text}/` will add `text` to the start of every line:
```bash
$ sed 's/^/ls -l /' file.txt
ls -l /etc/passwd
ls -l /etc/group
```

Add the command and execute the command:
```bash
$ sed 's/^/ls -l /e' files.txt
-rw-r--r-- 1 root root 1547 Oct 27 08:11 /etc/passwd
-rw-r--r-- 1 root root 651 Oct 27 08:11 /etc/group
```

## Combine Sed Substitution Flags
```bash
sed -n 's/Manager/Director/gipw output.txt' employee.txt
```

## Sed Substitution Delimiter
If the match pattern contains `/`, we can use delimiter to differenciate the slash:
```bash
sed 's|/usr/local/bin|/usr/bin|' path.txt
sed 's^/usr/local/bin^/usr/bin^' path.txt
sed 's@/usr/local/bin@/usr/bin@' path.txt
sed 's!/usr/local/bin!/usr/bin!' path.txt 
```

## Multiple Sed Commands will be executed as a CHAIN
```bash
$ sed '{
s/Developer/IT Manager/
s/Manager/Director/
}' employee.txt
101,John Doe,CEO
102,Jason Smith,IT Director
103,Raj Reddy,Sysadmin
104,Anand Ram,IT Director
105,Jane Miller,Sales Director
```

## Get Matched Pattern, `&`
```bash
$ sed 's/^[0-9][0-9][0-9]/[&]/g' employee.txt
[101],John Doe,CEO
[102],Jason Smith,IT Manager
[103],Raj Reddy,Sysadmin
[104],Anand Ram,Developer
[105],Jane Miller,Sales Manager
```

## Substitution Grouping: `\(` and `\)`
In the following example:
* Regular expression `\([^,]*\)` matches the string up to the 1st comma.
* `\1` in the replacement-string replaces the first matched group.
* `g` is the global substitute flag.
```bash
$ sed 's/\([^,]*\).*/\1/g' employee.txt
101
102
103
104
105
```

This sed example displays only the first field from the /etc/passwd file, i.e. it displays only the username:
```bash
sed 's/\([^:]*\).*/\1/' /etc/passwd
```

The following example encloses the 1st letter in every word inside (), if the 1st character is upper case.
```bash 
$ echo "The Geek Stuff" | sed 's/\(\b[A-Z]\)/\(\1\)/g'
(T)he (G)eek (S)tuff
```

> Multiple pairs of `\(` and `\)` will match multiple groups. Use `\1`, `\2` etc to get those groups.

## GNU Sed Only Replacement String Flags `\l`. `\L`, `\u`, `\U`
> These flags are used in {replacement-string}

When you specify `\l` in the replacement-string part, it treats the character that immediately follows \l as lower case. You already know the following simple example will change John to JOHNNY. 
```bash
sed 's/John/JOHNNY/' employee.txt
```

The following example contains \l before H in the replacement-string (i.e. JO\lHNNY). This will change only the character h in JOHNNY to lower case. 
```bash
$ sed -n 's/John/JO\lHNNY/p' employee.txt
101,JOhNNY Doe,CEO 
```

When you specify `\L` in the replacement-string part, it treats the rest of the characters as lower case. 
```bash
$ sed -n 's/John/JO\LHNNY/p' employee.txt
101,JOhnny Doe,CEO 
```

`\u` and `\U` are for upper case.

`\E` should be used conjunction with `\L` and `\U`, to end the replacements.

> These flags are useful because these can be put before grouping.
```bash
$ sed 's/\([^,]*\),\([^,]*\),\(.*\).*/\U\2\E,\1,\L\3/g'
employee.txt
JOHN DOE,101,ceo
JASON SMITH,102,it manager
RAJ REDDY,103,sysadmin
ANAND RAM,104,developer
JANE MILLER,105,sales manager 
```