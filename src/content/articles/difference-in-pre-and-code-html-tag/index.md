---
title: "A Little Something: PRE and CODE"
date: "2021-01-13"
lastupdated: "2021-01-13"
category: "Kelvinsekx with a Little Something"
description: "the Pre element tells the browser the content between the tags is \"preformatted\" and that the browser shouldnot add any styling..."
---

The PRE element tells the browser that the enclosed text is "preformatted". The browser ensures it renders the content between the tags whatever way the author inputs it or presents it. 

But the CODE element is similar to other semantic tags that add structural information to text between them. The structural information is that the code presented between the tags is a fragment of a computer code.

## PRE
The PRE element tells the browser it should preformat the text between the tags. That is, the text should appear similar to how it was presented in the editor as much as possible. Most browser handling PRE will :
1. leave whitespace intact
2. disable wordwrap
3. not didsable bidirectional processing

> **Authors** are discouraged from altering the behavior or appearance of PRE through CSS.

## CODE
Code simply adds structural information to text fragment.
However, popular browsers stripe out :
1. whitespace in the text
2. and all newline (\n)

## How browser render CODE and PRE
Well, it is very important to know that styling added to CODE is rested solely on the browser. And the misconception of CODE or PRE being block or inline element is one part I cannot say much about because I use firefox and have only texted how they are rendered on forefox.

You can always use css to change the behaviour of elements from inline to block.