---
title: "MavoScript for Beginner"
date: "2020-09-20"
lastupdated: "2021-03-20"
description: " This is an introductory article that explains basic concepts on mavoscript. It is targeted at complete beginners to mavoscript. At the end of this article you would have built a mavo project, mavo-calculator-project, all from scartch."
sourcecode: https://github.com/kelvinsekx/mavocalculator
---



Over the years as a javascript developer, I have understood the ubiquitousness of javascript libraries and frameworks in order to build awesome user interfaces: They make our hard work shine. 

In that regard, libraries and frameworks like react and vue have stood foremost respectively.

Although, react and vue do all the heavy lifting, they come with a small itch: **they require that their users have more than basic understanding of javascript at least IMO (In My Opinion)**.


## MavoScript to the rescue
**Mavoscript** comes built out with the assumption that you might only know HTML and CSS yet want to build awesome UIs. The author of mavoscript herself is a big supporter of accessible programming to those without computer science background.

Mavoscript makes you want to build UIs without the need to ever understand javascript as much as you will need for react or vue to start building something useful. With that in mind, mavoscript power with you, you won't be needing all the module, transcompilation and bundling headache that loom us the javascript guyz. Here it is cleaner.

The only prerequisite is that you know about **html attributes**. And that's all. In mavoscript we heavily rest our shoulders on the special html attributes to make wonders. Join me.

>**Note:** If you have used vue or angular before now they seem similar. Most especially the special attribute part. However, Mavoscript is not javascript. Things are handled here a little different.</div>


## Getting started with mavoscript
Talk is cheap, let's code.

To get up and running with mavoscript, all you need is to paste the js and css links below into the head component of your html document.

>sorry, I will be assuming you are familiar with html and its structure. If not please for whatever sake, leave here and get a 10 minutes reading about it. There are plenty awesome help online on HTML. I will be right here waiting.

`<link rel="stylesheet"  href="https://get.mavo.io/mavo.css"  / >`

`<script src="https://get.mavo.io/mavo.js"></script>`

>**note** Remember you need internet connection to make things work

## Grant mavo permission with mv-app
If you’ve successfully pasted the links into the head, may be just immediately after the title tag, the next step is to notify mavo which element you want it to handle. 

This is similar to react unique id html-attribute passed to ReactDOM but we will have to replace id with **mv-app**. 

The **mv-app** html-attribute notifies mavo it should be responsible for the element. I mean this, **mv-app tells mavoscript that the element is concerned with only her, mavo would take note and start treating that element differently**.

See how to tell mavoscript about an element it shpuld be responsible for in your document.

```javascript
<!-- mv-app is passed like a regular html-attribute -->
<div mv-app="mavopractice">

</div>
```


## Deep Dive into mavo basics
To practice the basic concepts we will create a calculator project. 

Along the way, I will be discussing the most basic concepts in mavo.

You can use the markup below as a template for your calculator.

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
        </select>

        <input type="text" />
    </form>

    <!--container where answer will be displayed -->
    <div class="answerContainer">

    </div>
</div>
```

### Property
The concept you will be learning first is **property**.

To me, property is the most fundamental concept with mavo. It is very similar to variables in javascript or in any programming language you are familiar with. 

Albeit, property is not as complicated as variable can be.

It is just an attribute that is passed to an element inorder to collect its values.

Property naming conventions are similar to the naming convention in javascript.

Check out how I added three properties and named them.

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
Now that we added property attribute to some of our elements we can watch changes to these elements.

1. **input1:** This will be used to collect the first inputed number. 

2. **sign:** This is needed to keep watch of changes to our calculator signs 

3. **input2:** The third element we want to keep track is the second inputed number

><div style="font-size: 2rem; font-weight: 900; line-height: 2.5rem">ALERT!!!: SPOILER AHEAD</div>

To confirm, let’s make a quick script to see our changes in the console.

```javascript
…
<script>
console.log([input1])
</script>
```

>**The Spoiler:** You fell for it? Remember I told you mavoscript isn't javascript. If you did like my instinct did above you would have gotten an error in your console. If you've actually done the console.logging above, try to see the console in your browser. It should print **Uncaught ReferenceError: input1 isnot defined**. Please delete the script because it won't work.

To actually handle things, we can only see changes through the html. Remember this is mavoscript and we deal in html attributes majorly.
 Do this now.

```javascript
…
 <!--container where answer will be displayed -->
    <div class="answerContainer">
    <!-- Here is the real way of handling things-->
        [input1]
    </div>
```

Start typing numbers into the first input and see the changes live in the div with the class name : "answerContainer". This is more than enough evidence property really keep watches for changes to element.

### Expression
Pasting our values to see is not enough. It does not make enough sense of what calculators can do. Calculators take input and transform them. We want the same.  This is where expression comes in. You want input1 + input2 to give an answer.

All valid javascript expressions are valid in the mavo too. In this case we can dump javascript +, - etc and see some magic.

Re-edit the immediate changes above to `[input1 + input2]` and tell me what you saw when you started adding numbers to both inputs.

### mv-expression
If you are a little bit conversant, you should have noticed a strange bracket `" **[** " input1 + input2 " **]** ". I have been using it for quite a while in this article.

Expressions need a place to stay, and mavo created that with the brackets. You can't just put the property's name into the html value and expect it to do something.

"By default, mavo expressions are delineated with brackets", according to the mavo docs. However, you can change the syntax but we will not be covering that here. 

You wouldn’t want to place properties in the middle of elements without brackets. It won't work. You want mavo to be aware that the name is a property right? Then do not ever forget to add the brackets.

Well we can move on now.

### conditionals
With mavo, there are two ways to make conditionals : **if()** and **mv-if**

According to https://mavo.io, "you can use the if(condition, ifyes, ifno) function to print out different text depending on a condition". On the other hand, the mv-if is an attribute that hides or shows an element considering that the condition is true.

The if() amd mv-if works very similar. Only that the former, if() , is a function and can be used for more complex logic, and the latter, mv-if , is an attribute and simplifies logic to a simpler yes or no.


In this tutorial, I have decided to stick to mv-if for two reasons
1. since you must have been familiar with special attributes like **property** and **mv-app**,
2. mv-if is simpler if().

## BACK TO CODING : enough of the talking
In our case, we would hide some element based on the user chosen option. 

>**note: ##Please read the code below carefully** It might first look confusing, but re-read. It is not as difficult like you think. If you re-read, it should be very clear.

```javascript
<div class="answerContainer">

    <!-- if the sign property is '+', show this else hide it-->
    <div mv-if="sign = '+'">
        <p>[input1] + [input2] = </p>
        <p> [input1 + input2]</p>
    </div>

    <!-- if the sign property is '-', show this else hide it-->
    <div mv-if="sign = '-'">
        <p>[input1] - [input2] = </p>
        <p>[input1 - input2]</p>
    </div>

    <!-- if the sign property is '*', show this else hide it-->
    <div mv-if="sign = '*'">
        <p>[input1] * [input2] = </p>
        <p>[input1 * input2]</p>
    </div>

    <!-- if the sign property is '/', show this else hide it-->
    <div mv-if="sign = '/'">
        <p>[input1] / [input2] = </p>
        <p>[input1 / input2]</p>
    </div>
</div>
```

You now have an amazing calculator. Reload your browser to see the changes.

## Putting all together so far
If you understood everything so far, the changes shouldn’t be a deal. The full code can be found on https://github.com/kelvinsekx/mavocalculator.

## Closing Note

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



