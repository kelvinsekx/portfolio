---
title: "Make a .gitignore first"
date: "2021-03-30"
category: "func fun time"
lastupdated: "2021-03-30"
description: "the hard way I learnt to always make .gitignore file"
---

Immediately I entered, It would never return...I waited forever but it was not enough to make me commit.

## You'd better never go forward without an ignore

If you've ever had to wait an extra minute or more to push your code to git, it is most likely that you have not added a .gitignore file in your root folder.

Scenarios like this have happened to me in the past. In fact it happened so recently that I was almost into tears: the project modules were too many. Shame on me.

However, it will never occur again that I created a javascript module and skipped a .gitignore file before making a single line of code. Join me don't learn the hard way.

Here is my routine henceforth.

```javascript
npm init --yes
touch .gitignore
echo node_modules > .gitignore
```