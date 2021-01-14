---
title: "Digging Mern IV: Minimal express"
date: "2020-10-23"
lastupdated: "2020-11-06"
category: "mern"
description: "introductory minimal express for creating our example blog backend"
---

Before now, we already used express to dump a static public folder. However, that knowledge of express is not sufficient for us.
In this article, we will deep a litte deeper into what express has for us. 

## What is Express?
Express is a **web** framework built on node js. It is popular for being minimal and yet robust enough to contain anything you want from a robust backend framework.

It robustness lies on the modules called middleware that can be extended with express.

> **Bonus**, express creator is TJ Holowaychuk.

### What are middlewares?
According to wikipedia, middleware provides services to software apps beyond those available from the operating system. This definition is applicable to express middleware.

They allow us to extend more functionality into our express app. To use middleware in express, you extend it into your app.

`app.use(<middleware>())`

Practically, middlewares usually contains three arguments.

`(req, res, next)`. 

However, it isnot necessary it contains 3 arguments though. It can be two or four even.

Moreover, in the case where it is four arguments, the first arg becomes an err arg.

`(err, req, res, next)`

## Routing
Routing is the mechanism of serving contents as requested from the client.
In express, routing is performed by a **router**

A router ...
1. takes a client request, 
2. and then matches the request with pre-defined path, 
3. if a match is found, it then calls an **handler function** (popular as callback) that responds to the match found.

Besides, routing can take different forms. This is regarded as **Route Specification**. It consists of either of the http methods GET or POST. 

The handler function is passed two arguments at least (if to be useful), the **request object** and **the response object**.

### Example Router
A typical route will look like this.

```javascript
...
app.get('/hello', (req, res)=>{
    res.send('Hello Love !!')
})
```

1. **get**: as the route specification (HTTP request verb),
2. **'/hello'**: path to be matched,
3. **(req, res)=>...**: callback handler function.
4. **req, res**: as request and response object respectively.

## What is next?
[**Next**](/articles/introductory-graphql), we will dig deep into graphql, why we use it over rest api in this tutorial. And afterwards create our api from there.

## Closing Note.
Express is indeed minimal. If I had known this little about express when I started programming may be I would have become a fast explorer of the framework. 