---
title: "Digging MERN I: hello world"
date: "2020-09-03"
lastupdated: "2020-09-12"
description: "mern serverless react introduction-to-node introduction-to-mern mern for beginners"
sourcecode: https://github.com/kelvinsekx/diggingmernwithsekx/tree/master/diggingmern-I
---

<div class="introduction">
This is an introductory tutorial that will happen in phases. By the end of this long tutorial, we would have created a complex and powerful blogging platform with the mern stacks.

This tutorial is the first part of many parts before we complete this amazing project. It will for sure look good on your resume and help you and I understand mern even more.

As is customary, this part 1 will start with the simple and amazing Hello World application. We would be using <a href=http://www.reactjs.org>react</a> to render the Hello Page and use <a href=http://www.express.com>express</a> to serve the web server.
</div>

## HelloWorld

To get things happen quickly, let's build a simple HelloWorld with everything BASIC (no installation, downloads and server). All that will be needed is a modern browser and a weak internet for now.

Start by creating an HTML file with a simple bootstrap html code and call it:

**index.html**

Also you can use any favourite editor of your choice and save the file anywhere. Even, you can use vim editor on the terminal for now. See mine here:

```javascript
// index.html

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2>Hello World</h2>
    </body>
    </html>
```

<div class="borderTop">
</div>

## Serverlessly rendered Hello World with React and ReactDOM

In the previous section Hello World was statically written but that's below our aim. Let's rather do the same with React and ReactDom.

To achieve this, Let's use the development version of the React and ReactDOM libraries from http://www.unpkg.com/browse/react@16.13.1 and put them into the head element in our index file. Like this:

```javascript
// index.html
    ...
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script crossorgin src="https://unpkg.com/react@16/umd/react.development.js"></scipt>
        <script crossorgin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></scipt>
        <title>Document</title>
    </head>
    ...
```


Next, within the body, let's create a `div` that will hold the react component. 

<div class="watchout">
It is advisable for now that the div be empty and pass an id to make the element unique to react.
</div>

```javascript
// index.html
// I named mine ___root, but you can name your's any unique name
    ...
    <body>
        <div id="___root"></div>
    </body>
    ...
```

To write react, it is important to understand some of its syntax. 

React creates element with a function just like the dom method, **document.creatElement**. Only a change to the document name to React( **React.createElement** ). 

React.createElement is however more powerful in my opinion compare to the document method. It takes three arguments.

```javascript
// the type can be any valid html tag
React.createElement(type, [..props], [...children])
```

props is a javascript object that can be an html attribute or a customized variable passed to a component. The last argument, children, is another element creatable with createElement. 

<a href="/articles/react-props-and-propsType/">Learn more about props</a>

We can now replace our previous hard-coded hello world with react like this: 

```javascript
// index.html
    ...
    <body>
        <div id="___root"></div>

        <script>
          React.createElement(
              'div' // type,
              null,
              React.createElement(
                  'h1',
                  {title:"Hello"},
                  null
              )
          )
        </script>
    </body>
    ...
```

However, this still doesnot do the work. If you reload your browser everything should be blank. To make react render the elements we just created, there is a need to make use of the ReactDOM. This helps us to convert the elements from the virtual DOM to the browser DOM.


```javascript
// index.html
    ...
    <body>
        <div id="___root"></div>

        <script>
        // pass the created element into a variable
          const Elem = React.createElement(
              'div' // type,
              null,
              React.createElement(
                  'h1',
                  {title:"Hello"},
                  null
              )
          )

          ReactDOM.render(Elem, document.getElementById('___root'))
        </script>
    </body>
    ...
```

After you done that, everything should work right. Try and reload the browser. Your complete code should look like this:

```javascript
// index.html

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <!-- replace hello wold with the div -->
        <div id="___root"></div>

        <script>
        // pass the created element into a variable
          const Elem = React.createElement(
              'div' // type,
              null,
              React.createElement(
                  'h1',
                  {title:"Hello"},
                  null
              )
          )

          ReactDOM.render(elem, document.getElementById('___root'))
        </script>
    </body>
    </html>
```

## JSX

With our previous code, things look fine but not too good. I only opted for that because it will make us understand React better in my opinion.

However, If we decide to add more components this way things can get really clumpsy. This is where JSX shines.

 JSX helps to abstract the complicated syntax with writing React.createElement and makes our code look similar to HTML. 

Besides, JSX is not a replacement for html. In fact it is not html in any way.  

<a href=jsx.org>Learn more about JSX</a>

Let's re-write our previous code to take advantage of the wonders that come with JSX.

```javascript   
<script>
    // pass the created element into a variable
    const Elem = (
        <div>
            <h1 title="hello">Hello World</h1>
        </div>
    )

    ReactDOM.render(Elem, document.getElementById('___root'))
</script>
```

If you reload the browser, you should see a screaming error and the page would not load( It will take minutes and still not load). This is because JSX needs to be compiled to javascript.

To compile things, we need a compiler. In our case, Babel is cool to compile JSX and let's do the compilation with Babel then. 

However, since  we are doing this serverlessly, let's import another link into the head.

```javascript
<head>
...
    <script src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
...
</head>
```

You can reload the browser now (If it takes few more seconds donot bother). But oops things still donot work. 

You know why?? This is because babel needs to be told what script it should compile. To do this, an attribute needs to be added to our script.

```javascript
...
    <script type="text/babel">
    ...
    </script>
...
```

Now everything should look good now. Our final code is below.

```javascript
// index.html

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>mern and sekx</title>
        <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
    </head>
    <body>
        <div id="___root"></div>

        <script type="text/babel">

        const Elem = (
            <div>
             <h1 title="hello">Hello World</h1>
            </div>
         )

          ReactDOM.render(Elem, document.getElementById('___root'))
        </script>
    </body>
    </html>
```


****
<span style="color:#349077">
**Joke Time : dedicated to my friend Boluwatife**
</span>

 If life were to be human, it would have been a black woman

How do I know??: ): Urrgh, it simple
- A blackwoman is not fair
- A blackwoman is tough
- A blackwoman is beautiful



***
<span style="color:#349077">
**What if I interview you : little quick questions I try and answer myself**
</span>
 

Mention three (3) means by which we can pass styles to a react element. What way seem to be the most efficient??

## Closing Note:
 Digging MERN is important today than nerver before. When the MERN stack started it was very minimal and was easy to learn the basics. Today the MERN is larger than they thought it to be and it is easy not to learn the basics 


