---
title: "MavoScript for Beginner"
date: "2020-09-14"
lastupdated: "2020-09-14"
description: "mavo mavoscript mavo-script-for-beginners mavoscript for beginners mavo-calculator-projects introduction-to-mavoscript MavoScript for Beginners"
---


<div class="introduction">
Over the years as a javascript developer, I have understood the ubiquitiousness of javascript libraries and frameworks in order to build awesome user interfaces. They make our hard work shine. In this regard, libraries and frameworks like react and vue has shined respectively.


Although, react and vue do all the heavy lifting they come with a small itch: they require that their users have more than basic understanding of javascript at least [IMO].

MavoScript to the rescue: mavoscript comes built out with the fact that you might know only html and CSS and still want to build awesome UIs. MavoScript is built with frontenders in mind and publishers online who wants more than the usual.

Remember mavoScript comes built out with the assumptions you don’t know javascript. In that regard, mavoscript works with special html attributes. Note: if you have used vue before now they seem similar most especially the special attribute part. However, Mavoscript is not javascript. Things are handled here a little different.
</div>


<div class="borderTop"></div>

## **Getting started with mavoscript**

To get up and running with mavoscript, all you need is to paste the js and css files below into the head of your html document.

 `<link rel="stylesheet"  href="https://get.mavo.io/mavo.css"  / >`

`<script src="https://get.mavo.io/mavo.js"></script>`

## **Grant mavo permission with mv-app**

If you’ve successfully pasted the links, the next step is to notify mavo which element you want it to handle. 

This is similar to react unique id passed to ReactDOM but we will replace id with mv-app. 

This notifies mavo that the element should be treated specially. You can have more than one id (mv-app) in a document. 

See my example below:

```javascript
<div mv-app="mavopractice">

</div>
```

## **Deep Dive into mavo basics**

To practice the basic concepts we will create a calculator project with mavoscript. Along the way, I will be discussing the most basic concepts in mavo.

You can use the markup below as a template for our calculator.

```javascript
<div mv-app="mavopractice">
<h1>Hey mavos,</h1>
<p>Let’s do some calculations…</p>
<form>
<input type="text" />
<select >
<option value="+">+</option>
<option value="-">-</option>

<option value="*">*</option>
<option value="/">/</option>
<input type="text" >

</select>
</form>

<div class="answerContainer">
</div>
</div>
```

## **Property**

For me property is the most fundamental concept with mavo. It is very similar to variables in javascript or in any programming language you are familiar with. 

Howbeit, property is not as complicated as variable can be.

It is simply an attribute that is passed to an element so as to collect its values.

Its name conventions should be similar to naming convention in javascript.

Now you can add property attribute to some of our elements because we need to keep watch of their values;

```javascript
…
<input type="text" property="input1" />
<select property="sign">
.
.
.
</select>
<input type="text" property="input2" />
…
```

The property helps us to keep watch for changes to that specific element. To confirm, let’s make a quick script to see our changes in the console.

```javascript
…
<script>
Console.log(input1)
</script>
```

Start typing numbers into the input and see the changes live in the console. This is more than enough evidence property really keep watches of changes to element.

## **Expression with mavoscript**

Pasting our values in the console is not enough. It does not make enough sense of what calculators can do. Calculators take input and transform them. We want the same.  This is where expression comes in. You want input1 + input2 to give an answer.

All valid javascript expressions are valid in the mavo too. In this case we can dump javascript +, - etc and see some magic.

Re-edit the script above so that `Console.log([input1 + input2])` and tell me what you saw when you started adding numbers to both inputs.

## **mv-expression**

If you are a little bit conversant, you should notice a strange bracket. Exactly, expressions need a place to stay, and mavo created that with the brackets. 

By default, mavo expressions are delineated with brackets. However, you can change the syntax but we will not be covering that there. You wouldn’t want to place properties in the middle of elements like that… You want mavo to be aware that the name is a property right. That what the brackets does.

Well we can move on now.

## **Putting all together so far**

If you understood everything so far, the changes shouldn’t be a deal. The full code can be found on https://github.com/kelvinsekx/mavocalculator.

## **Closing Note**

With this you have a functional calculator all without any programming language isn’t that awesome.

Although this part isn’t necessary, you add this css file to make things look cool.

```javascript
<style>
    .answerContainer{
        width: 12rem;
        margin-top: 10px;
        font-size: 2rem;
        padding: 2rem;
        background: forestgreen;
        color: #f4f4f4;
    }
</style>
```



