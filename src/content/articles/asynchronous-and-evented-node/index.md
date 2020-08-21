---
title: "Re(Back):2  Asynchronous and evented Node"
date: "2020-08-20"
description: "asynchronous api evented node js"
---

Learning Objectives:

By the end of this article, you should be able to:

-	Explain asynchronousness in node
-	Describe single thread
-	Differentiate single thread from multiple thread
-	Appreciate asynchronous API and event in node js


Similar to the familiar browser environment, node js provides us with the power to make asynchronous and event driven node. However, it is important to know that node js and the popular JavaScript that runs on the browser have a little difference. For me I perceive the difference as HUGE. It helps me keep the little knowledge that node js is different from the one I know that runs on the browser.

Permit me to introduce this funny moment. Few weeks ago I attempted a JavaScript devops job exam, the code was written in pure node js and I could barely even understand the codes. I learnt the hard way that react and browser type javascript differs from node; I need to spend an extra time mastering my node js too.

##**Why is it a big deal Node js is asynchronous or event driven??**


JavaScript is single threaded. The answer is 4 words there. 

A familiar scenario to explain this thread thing is to compare thread to a waiter in a bar, where your programming environment is the bar. Hope you’re following? 

So in the case of JavaScript it has only a waiter (thread). So if you want a glass of cup it can do that easily. Moreover, if you are like me, foodie, I would surely ask for a wine, plate of Jollof rice, plate of chicken, 5alive drink to may be cap it. This is a serious task for our waiter. The option will be to serve it one after the orders however while the waiter is handling things per time I might get frustrated and leave the restaurant. The other option for the waiter would be to carry all at once which is almost impossible .And if she attempts everything crashes. This funny scenario is most unlikely to happen in a restaurant with multiple waiters (multiple threads), they just share the task among themselves.

If you had read the scenario above, you would know single threaded JavaScript is a serious mess. However to maneuver ourselves as smart developers you and I have events, asynchronous APIs, and nonblocking I/O to suit things.

Nonblocking I/O is low-level term with node developers; it is not much of a big term like you treat in your computer science class. It means your program can make a request for a network resource while doing something else, and then, when the network operation is done, a callback is set to handle the request when your program was busy.

The summary of what I have been trying to describe is that node comes with the benefit of handling so much like any multithread language would with even better speed. Node can do other things while slow network happens with its inbuilt asynchronous APIs and nonblocking I/O. Even though you have a single thread JavaScript node app running, it can handle more than one connection from potential visitors and handle multiple tasks while your visitors are playing around on your app after clicking signup by sending a mail, conversing with the database and doing other setups on their behalf.


 <h3 style="color:#349077">
**Joke Time : dedicated to my Nigerian youths**
</h3>

If this country were to be sold, we would at least get a share.

#### Closing Note:
Thank you again for reading. It takes courage to learn programming concepts without typing a code.
But a popular adage says "bitter things are for strong people". Lol, so you are strong if you read this far.

The most important part is that this article help you. I fit does, congrats.


