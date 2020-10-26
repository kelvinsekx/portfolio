---
title: "Digging Mern IV: Minimal express"
date: "2020-10-23"
lastupdated: "2020-10-23"
category: "mern"
description: "introductory minimal express for creating our blog backend"
---

Before now, we already used express to dump a static public folder. However, that isnot sufficient for us.
Express is a node framework that is small and yet robust. 

In this part, we would be discussing this minimal and robust framework a little extra.


## What is Express?
Express is a **web** framework built on node js. It is popular for being minimal and yet big enough to contain anything you want from a robust backend framework.
It robustness lies on the modules called middleware that can be extended with express.

> **Bonus**, express creator is TJ Holowaychuk.

### What are middlewares?


## Routing
Routing is the mechanism of serving contents as requested from the client.
In express, routing is performed by a **router**

A router ...
1. takes a client request, 
2. and then matches the request with pre-defined routes, 
3. if a match is found, it then calls an handler function (popular as callback) that responds to the match found.

Besides, routing can take different forms. This is regarded as **Route Specification**. It consists of either of the http method (GET, POST, PUT etc).

Also when a route matches, a **handler function** is called as a response. This is the second argument passed to a router. 

The handler function is passed two arguments (or parameters), the **request object** and **the response object**.

### Example Router
A typical route will look like this.

```javascript
...
app.get('/hello', (req, res)=>{
    res.send('Hello Love !!')
})
```

1. **get**: as the route specification,
2. **'/hello'**: url to be matched,
3. **(req, res)=>...**: callback handler function.
4. **req, res**: as request and response object respectively.

## What is next?
[**Next**](/articles/introductory-graphql), we will dig deep into graphql, why we use it over rest api in this tutorial. And afterwards create our api from there.

## Closing Note.
Express is indeed minimal. If I had known this little about express when I started programming may be I would have become a fast explorer of the framework. 