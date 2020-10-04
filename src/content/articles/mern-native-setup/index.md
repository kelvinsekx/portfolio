---
title: "Digging MERN II: minimal mern setup"
date: "2020-09-07"
lastupdated: "2020-09-07"
category: "mern"
description: "mern serverless react introduction-to-node introduction-to-mern mern for beginners"
sourcecode: https://github.com/kelvinsekx/diggingmernwithsekx/tree/master/diggingmern-II
---


_In the <a href="/articles/hello-mern/">previous article</a>, we setup things all serverless. However, qiuckly you will notice it is not efficient for anything, neither production nor development. The obvious reason is how long it takes for the browser to load, the punch of links, as Content Delivery Network(CDN) , are also unnecessary and quite large in size._

_This obvious reason and many others, require us to create a simple server that make things more efficient._

_To start handling things better, you will need to install few libraries and organize few files. But donot bother if you've never done this before. All you have to do is to follow the instructions here carefully._

## Node Installation

Node allows javascript to run outside the browser, or in the server as it is popularly said. There are different ways to either install or download node. 

To install node visit https://nodejs.org/en/download/. It is pretty simple all you have to do is to select your OS and follow the instructions there. If you are done with the installation come back here.

To confirm node is on your computer, use `$ node --version ` on your terminal. This should print the current node version on your computer. 

Node pre-installs node package manager to your computer too. You can confirm by putting `$ npm --version` into your terminal. And this should print out the current version too.

If something got wrong with your installations, please visit https://www.npmjs.com/get-npm. You should see updated info on node and npm download there.


## Project

The installations above may be ok for now. Let's get you to set the folder and files where your code will reside.

To start with create a directory or folder as it is popularly called then name it **mernworld** or anything you choose to call it, it is on your PC afterall. 

Initialize the project with `$ npm init` on the terminal and don't be scared when the terminal asks you some questions, answer them the best way you can it is never a big deal. And move on.

> On a good note, you can skip the terminal asking questions by using **npm init --yes** instead of **npm init**


## npm

NPM helps to manage your code together with other javascript developer's code. To use other developer's code, all you need is to install it like this `npm install <other developer's package>`. 

For now let's install express. We will need it for our server: `$ npm install express@4`

Follow the steps to complete the setup:
1. create a folder at the root of the mernworld and name it **public**
2.  copy our final code at the <a href="/articles/hello-mern/">previous article</a> and put it into a public directory you just created in your mernworld folder.

Your folder structure will look like below.

```javascript
mernworld
    > node_modules
    > public
        > index.hmtl
    > package.json
    > package-lock.json   
```

## Express Server
After the instructions above. Copy and paste the code below to a server.js file at the root of your mernworld folder.

```javascript
// import the express module and store it in a variable called express
const express = require('express')
const app = express()

// just a constant to avoid repetitions
const port = 3838

//express.static enables rendering of static files
const serverStatic = express.static('./public')
// dump the file to the home '/' directory
app.use('/',serverStatic)

// The listen() method also takes the port number, and 
//  another argument,
// an optional callback that can be called when 
// the server has been successfully started
app.listen(port, ()=>console.log(`server started on localhost:${port}`))

```

Now run it using the Node.js runtime like this, at the root directory of the project:

`$: node server.js`

This should print the message we passed to the console:  **the server started on localhost:3838**.

### npm start as alternative to node < filename >
There is another way to start the server aside the use of `node < filename >`. 

The alternative is `npm start`.


>**Note:** Try to put the link, localhost:3838, into a browser to see if same index.html file renders to the DOM.


With npm start, npm serves the argument file with node just like we could have done with node server.js.

>At this point, if you have the server running, you can stop the server (use Ctr + c) and let's implement the use of npm so that things can be better servered.

Let's serve the server from a folder instead of a file ( the server.js file). 

To do this, you should edit the **package.json** file like I did below. 

But before you make these changes, please create a folder in your root directory and name it **server** then put the server.js file into the server folder

```javascript 
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node server/server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

You can use `npm start` now and everything will work fine.

Your folder, should be looking like this.

```javascript
mernworld
    > node_modules
    > public
        > index.hmtl
    > server
        > server.js
    > package.json
    > package-lock.json
    
```

## Separate Files

Instead of dumping both the html and javascript in the index.html file in the public directory, it is advisable we separate things up ( have a static html file and javascript file separate).

At first create a .js file and name it app.js. Put the scripts that is previously in the type="text/babel"  into app.js in the public folder. Your new root directory should look like this.

```javascript
mernworld
    > node_modules
    > public
        > index.hmtl
        > app.js
    > server
        > server.js
    > package.json
    > package-lock.json
    
```

>Please, if things get confusing, visit the previous tutorial**


And the script in public/index.html should be replaced as a link to public/app.js

```javascript
// public/index.html
...
     <script type="text/babel" src="./app.js"></script>
...
```


```javascript
// public/app.js

 const Elem = (
     <div>
        <h1 title="hello">Hello World</h1>
    </div>
    )

ReactDOM.render(Elem, document.getElementById('___root'))
```

At this point, everything should work as before. Great!!!

## JSX transformation

Instead of the unnecessary and inefficient cdn links, let's start to handle things up ourselves.

To start transformations, you will have to install few babel tools. We need the core Babel library and a command-line interface (CLI) to do the transform. 

Install these to get them here...

`$ npm install --save-dev @babel/core@7 @babel/cli@7 `

After you've installed them, we will need a plugin to enable us transform JSX syntax to pure javascript. The preset/plugin to do this transformation is @babel/preset-react. 

You will have to install this preset before it can be used.

`$ npm install --save-dev @babel/preset-react@7`

Remove the former app.js file and put it into a new folder called src. So that your root directory now look like this.

```javascript
mernworld
    > node_modules
    > public
        > index.hmtl
    > server
        > server.js
    > src
        > app.js
    > package.json
    > package-lock.json
    
```

After you've install the preset, put this into the CLI to do the transformation: 
`$ npx babel src --presets @babel/react --out-dir public`.

This should dump a completely new file, app.js, into the public directory. 

Check it out to see it is different from the app.js file in the src folder. 

This implies we donot need the babel cdn in our html head any longer. You can remove them now.

## Automate scripts

Instead of having to run `npm start` all the time there is a change or use `npx babel ...` to compile all the time, we can actually automate things up.

Let’s add a script called compile to do all the transforms. 

We don’t need the npx prefix because npm automatically figures out the location of commands that are part of any locally installed packages. The addition we’ll need to do in package.json is thus:

```javascript
...
 "compile": "babel src --out-dir public",
...
```

Stop your server (Ctr+C). You will have to start it the unusual way. 

That is, you will need to 

1. compile first.
**run this on a separate terminal**
`npm run compile`

2. start your server afterwards.
**run this on a separate terminal too**
`npm start`


>If you compile, you will see a screaming error.
To solve this create a .babelrc file at the src directory.
and figure things out yourself.

**The solution to your assgnment is at the closing note**.

Even after automating things up to this point, if you are familiar with client-side coding, you will notice an obvious pitfall here. We will have to reload our browser to see changes on our browser screen. 

To overcome this, babel comes to rescue again together with nodemon as pals. You can quickly bring in nodemon by installing it `npm install nodemon --save-dev`.

Now you can make the following changes to your package.json. This will handle babel watching the file for changes and nodemon reloading the browser for you.

```javascript
    "start": "nodemon -w server server/server.js",
    "compile": "babel src --out-dir public",
    "watch":  "babel src --out-dir public --watch --verbose",
```
****
<span style="color:#349077">
**Joke Time : dedicated to Aunty Ore**
</span>

Push up is the easiest exercise to do as far as you have hands and legs. All you need is to PUSH UP.



***
<span style="color:#349077">
**What if I interview you : little quick questions I try and answer myself**
</span>
 

What does the Elem variable in this tutorial contain.

## Closing Note:
 Digging MERN is important today than nerver before. When the MERN stack started it was very minimal and was easy to learn the basics. Today the MERN is larger than they thought it to be and it is easy not to learn the basics.

 The solution is that you use the .babelrc (dot-babelrc file) to tell babel to include a preset or plugin when compile like this.

 ```javascript
 // src/.babelrc
 {
     "presets": [@babel/preset-react]
 }
 ```

 Remember we downloaded the @babel/preset-react plugin.