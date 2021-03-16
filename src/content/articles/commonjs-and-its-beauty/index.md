---
title: "A Little Something: Common JS and its beauty"
date: "2021-03-13"
lastupdated: "2021-03-13"
category: "Kelvinsekx with a Little Something"
description: "A little try to make you see into the beauty of the common Js and its principle..."
---

As a beginner javascript developer I had headache with common JS. Most especially with the plenty "require" trouble in node. Because I quickly transitioned into react I enjoyed the import and export statements more. Until lately, I discovered how beautiful common Js can be and I wish itsn't relegated so that I can keep enjoying my new understanding.

Here, I will make you understand Common JS and appreciate it rather than run away from it: the way plenty of us do now.

## A little into history

Common JS was created in the year 2009 by Kevin Dongaoor. His aim they say is to simplify the module ecosystem in the javascript world: Well he did. However, plenty of the recent javascript developers wouldnot agree to that. what would you have expected since we now have the contemporary import and export statement all around.

The germain point in the common JS principle include:

- Each file has it personal module
- Each file can access its current module with the module variable
- to export the current module, attach it to the exports object of the module variable: module.exports
- to import another module into a cuurent module, use the globally require function to import the other module: require('anotherModule')

Common JS principle have been employed by many javascript frameworks and one very popular one is node and it better explained with this frameworks. Here I have decided to choose Node JS. Henceforth, I will be using the node runtime to explain this principles.

> **Danger above** : node is not a javascript framework. 