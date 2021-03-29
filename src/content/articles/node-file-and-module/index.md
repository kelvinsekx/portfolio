---
title: "A Little Something: Node's File-Based Module System"
date: "2021-03-13"
lastupdated: "2021-03-28"
category: "Kelvinsekx with a Little Something"
description: "interesting exposures into file module system in node"
---

NodeJS file-based module is built on the commonJS idealogy. It is best discussed under the two umbrella pills of Node's require function and node's exports object. To avoid overdose, we take these pills one at a time as a discuss. The first will be its require function.

## Node's Global require function

Every file in node is wrapped with a magic require function. This function, require, is therefore regarded as a global function since all files have accees to it.

The magic function takes an "id" as an argument `require(id: string)`. This could be in form of a unique string, relative path ("./hey/I_be/relative") or absolute path ("/hey/I_be/absolute"). What's important is that it is wrapped around quotes.

```javascript
const hey = require("uniqueName")
const loveRel = require("../sapa/catch/am")
const loveAbs = require("/src/code")
```

### What the big deal about the require () function ?

The require function is used to bring on or rather import the module with the unique name passed as argument to it. That is, when require("argument") is called like this

```javascript
const bind = require(id: string)
```

The require function fetches the module in our project with that name (locally or globally) and then returns the object or whatever was exported in that module.

### Is that all the require function does?

Well nope, not really. The require function is an excellent tool in your hands. Although what it does majorly is to import a module, it does some very amazing stuff under the hood. The two below are worth discussing.

- our space is safe with require ()
When you import a module, the whole content of the file where your module resides is not imported. require () only brings on the functions, variables or objects you exported and that's all (lobatan in yoruba pronunciation). This makes our present file non-polluted with all the jargon in the required module.

- caching
The require function is **blocking**. This means that it resolves, load and evaluates before the code that succeeds the require line can be read or executed.

```javascript
line 1: const mod = require("module")

// line 2 and 3 will not execute until line 1 is completely resolved
line 2: let sekx = mod
line 3: console.log(mod)
```

This could have been the major pain but node has come to the rescue : after the required line is loaded once. it'll be cached into memory so that if the file is read again, it does not have to resolve or cache again except in the case of modification to the file.

## NodeJS  Global module.exports object
All files in nodeJS is defined with the module.exports object. This object is predefined for all files in node.

```javascript
// bn.js
console.log(modules)
//prints
/** 
 * Module {
  :
  // predefined as an empty object
  exports: {},
  :
}*/
```
You can either pass your intended exported variables or function into the object like this `module.exports = {myVar, myFunc}` or replace the whole object like this `module.exports = myVar`

Also there exist an alias for module.exports this is "exports". It has a special use case compare to module.exports. The major difference though is that you cannot replace the object of exports. 

That is

```javascript
// is not allowed
exports = myVar

// rather do this
export.myVar = "I really love bukunmi"
```


## Terminologies
1. What a module is : https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46
