---
title: "Digging MERN I: hello world"
date: "2020-09-03"
category: "mern"
lastupdated: "2021-04-02"
description: "mern serverless react introduction-to-node introduction-to-mern mern for beginners mern stack tutorial"
sourcecode: https://github.com/kelvinsekx/diggingmernwithsekx/tree/master/diggingmern-I
---

This is an introductory mern stack tutorial that will happen in phases. By the end of this long tutorial, you would have created a mern stack project, a complex and powerful blogging platform with the mern stacks.

Although it is a long tutorial thing, I will do my best to keep every part small and consized. 
  It will be painless trust me.

This tutorial is the first part of many parts. If you follow until the end, the aftermath of this tutorial will  look good on your resume and help you and I understand the mern even more.

As it is customary, this part 1 will start with the simple and amazing Hello World application. We would be using [react](http://www.reactjs.org "link to the react official site") to render the Hello Page and use [express](http://www.express.com "link to express official site") to serve the web server.

Get your yourself, laptop, pen, paper and smart phone cause it will be a long drive.

## MERN ?
It is better never to assume, let me ask you : what is mern ?

It might be supprising you got it all thinking what does mern even mean. But if you were quick to the answer you would have found the question embarassing, pardon my manners.

A quick search can help and before you do or you don't want to at all. The MERN is an acronym for MongoDB, Express, React and Node. It is stack of technologies that can be used to make some really awesome webapps.

To know more about the mern here I will be dipping straight to their use with a tutorial.

## HelloWorld
To start off, we would build a **simple HelloWorld** application with no installation, no downloads and no servers either.  Hhen, only a few imported links in our document head.

All that you will need is a modern browser and a weak internet trust me.

## First Step
They say the journey of a thousand years begin with a step.

Start by creating an HTML file with a simple bootstrap html code and name it **index.html**

```javascript
<!-- index.html -->

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

You can use any favourite editor of your choice and save the file anywhere. In fact, you can use the vim editor on the terminal.


## Serverlessly Hello World
Truly painless so far even with the gigantic first step.

In the first step, "Hello World" was statically written and that's below our intended outcome. 

Instead of been static, we can leverage on React and ReactDom to make it even more awesome and dynamic.

To achieve this, we would use the development version of the React and ReactDOM libraries from http://www.unpkg.com/browse/react@16.13.1 and put them into the head element of our index file.

```javascript
<!-- index.html -->
    ...
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script crossorgin src="https://unpkg.com/react@16/umd/react.development.js"></scipt>
        <script crossorgin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></scipt>

        <title>mern and sekx</title>
    </head>
    ...
```


Next, within the body, let's create a `div` that will hold the react component. 

```javascript
<!-- index.html -->

<!-- I named mine "___root", but you can name your's any unique name -->

    ...
    <body>
        <div id="___root"></div>
    </body>
    ...
```

>**Note:** It is advisable for now that the div be empty and pass an id to make the element unique to react.

## React.createELement

To write react, it is important to understand some of its syntax. 

React creates element with a function similar to the dom method, **document.createElement**. 

That of react is **React.createElement**. 

>**Note**: You should notice the only difference is the change of **document** to **react** between the two functions.

React.createElement takes three arguments.

1. **type**.
this can be any **standard html element tag**, **custom element tag**, or **react.fragment**. 
> **BEWARE#**: Do not forget to always write standard html tags in lowercase letters all through. e.g 'div', 'p', 'small' etc. And custom tags in Camel case letter e.g 'BanWrapper', 'ContainerPlace' etc.
This is how react best distinguishes standard html elements from custom elements.
<p></p>

2. **props**.
props is a javascript object that can be an html attribute or a customized variable passed to a component.
<p></p>

3. **children**.
these are other nested or inherited components.The  children are elements creatable with React.createElement.

```javascript
React.createElement(type, [..props], [...children])
```
 

<a href="/articles/react-props-and-propsType/">Learn more about props</a>

### BACK TO CODE
We can now replace our previous hard-coded hello world with react's. 

```javascript
<!--  index.html --> 
    ...
    <body>
        <div id="___root"></div>

        <script>
          React.createElement(
              'div'
              null,
              React.createElement(
                  'h1',
                  {title: "Hello"},
                  null
              )
          )
        </script>
    </body>
    ...
```

This still does not do the work. If you reload your browser everything should be blank. To make react render the elements we just created, there is a need to make use of the ReactDOM. This helps us to convert the elements from the virtual DOM to the browser DOM.


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

        <!-- changes-->
          ReactDOM.render(Elem, document.getElementById('___root'))
        </script>
    </body>
    ...
```

After you done that, everything should work right. Reload the browser. You now have a react rendered but awesome looking "Hello World".

Your complete code should look like this:

```javascript
<!-- index.html --> 

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script crossorgin src="https://unpkg.com/react@16/umd/react.development.js"></scipt>
        <script crossorgin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></scipt>
        <title>mern and sekx</title>
    </head>
    <body>
    <!-- replace hello wold with the div -->
        <div id="___root"></div>

        <script>
        // pass the created element into a variable
          const Elem = React.createElement(
              'div',
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
    </html>
```

## Bigger possibilities with JSX

With our previous code, things look fine but soon it will become difficult to keep adding components with the react.createElement(). I only opted for it because it would help us understand React better in my opinion.

If we decide to add more components this way, things can get really clumpsy. This is where JSX shines. Aside the components addition trouble, a favourable percentage of frontend developers really love to write codes that is html syntax friendly. I mean I would always prefer to write to the DOM with html than not.

JSX helps to abstract the complicated syntax with writing React.createElement and makes our code look similar to HTML (What frontend developers love) .

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

If you reload the browser, you should see a screaming error and the page would not load.


To compile things, we need a compiler. In our case, let's fast forward and just use Babel transcomplier for javascript.

Babel is used to compile JSX. In that case, we will be doing the compilation with Babel then. 

Since  we are doing this serverlessly, let's import another link into the head.
This will help us to import Babel into our code.

```javascript
<head>
...
    <script src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
...
</head>
```

You can reload the browser now.

> **Note:** If your page took few more minutes while loading? DONOT PANIC DEAR. This is because JSX needs to be compiled to javascript first before the DOM loads.

>But OOPS things broke. 

You know why? Let me help you: This is because babel needs to be told what script it should compile. 

To inform Babel what scripts it should compile specifically, an attribute, **type="text/babel"**, needs to be added to our script.

```javascript
...
    <script type="text/babel">
    ...
    </script>
...
```

Everything should look good now. Reload the file and things should look good again. Our final code is below.

```javascript
<!-- index.html --> 

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

## What is Next??

This part may seem too long for our first step. But don't break, it is just long enough to keep us ready for the fun ahead.

[Next](/articles/mern-native-setup), You and I will make a quick setup for our big mern app.

****
<span style="color:#349077">
**Joke Time : dedicated to my friend Boluwatife**
</span>

If life were to be human, it would have been a black woman

How do I know??: ): Urrgh, its simple
- A blackwoman is not fair
- A blackwoman is tough
- A blackwoman is beautiful



***
<span style="color:#349077">
**What if I interview you : little quick questions I try and answer myself**
</span>
 

Mention three (3) means by which we can pass styles to a react element. What way seem to be the most efficient ? You might need to read into google's lighthouse.

## Closing Note:
On a bye note, hope you had fun learning and learnt something new.

Digging MERN is important today than never before. When the MERN stack started it was very minimal and was easy to learn the basics. Today the MERN is larger than they thought it to be and it is easy not to learn the basics.
