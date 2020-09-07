---
title: "Digging MERN II: minimal mern setup"
date: "2020-09-07"
lastupdated: "2020-09-07"
description: "mern serverless react introduction-to-node introduction-to-mern mern for beginners"
---

In the previous article, you setup things all serverless. However, qiuckly you will know it is not effificient for anything, neither production nor development. The obvious reason is how long it takes for the browser to load. The punch of links as Content Delivery Network(CDN) are also unnecessary large in size.

This obvious reason and many others, require us to create a simple a simply to rather make things more efficient.

To start handling things better, you will need to install few libraries and organize few files. But donot bother if you've never done this before. All you have to do is to folloe the instructions here carefully.

To start:

## Node Installation

Node allows javascript to run outside the browser, or in the server as it is popularly said. There are different ways to either install or download node. To install node visit https://nodejs.org/en/download/. It is pretty simple all you have to do is to select your OS and follow the instructions there. If you are done with the installation come back here.

To confirm node is on your computer use `node --version ` on your terminal. This should print the current node version on your computer. Node pre-installs node package manager to your computer too. You can confirm by putting `npm --version` into your computer. And this should print out the current version on your computer.

If something got wrong with your installations, please visit https://www.npmjs.com/get-npm.


## Project

The installations above is may be ok for now. Let's get you to set the folder and files where your code will reside.

To start with create a directory or folder as it is popularly called and name it mernworld. And initialize the project with `npm init` on the terminal. Donot be scared when ther terminal asks you some questions, answer them the best way you can it is never a big deal.

## npm

NPM helps to manage our code together with other javascript developer's code. To use other developer's code all you need is to simple install it like this `npm install <package>`. For now let's install express we will need it for our server: `npm install express@4`

## Express Server

After the instructions above is done. Copy the code below and paste it to a server.js file.

```javascript
// import the express module and store it in a variable called express
const express = require('express')
const app = express()

const port = 3838

//express.static enables rendering of static files
const serverStatic = express.static('public')
// dump the file to the home '/' directory
app.use('/',serverStatic)

// The listen() method also takes another argument,
// an optional callback that can be called when 
// the server has been successfully started
app.listen(port, ()=>console.log(`server started on localhost:${port}`))

```

Now run it using the Node.js runtime like this, at the root directory of the project:

`$: node server.js`

This is should print the message we passed to the console. saying the server started on localhost:3838.

There is another way to start the server aside the use of `node <file>`. The alternative is `npm start`.

<div class=danger>
 If you put the link on the browser and get see an error response donot bother for now
</div>

With npm start, npm servers the argument file with node just like we could have done with node server.js, At this point, if you have the server running, you can stop the server (use Ctr + c) and let's implement the use of npm so that things can be better serverd.

What if we serve our site from a folder instead of a file ( the server.js file). To do this, you should edit the package.json file like I did below. But before you make these changes, please create a folder in your root directory and name it server then put the server.js file into the server folder

```javascript 
    "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

You can use `npm start` and everything will work fine except that if you put the link on the brwser you will see something similar to the image below.