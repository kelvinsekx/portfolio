---
title: "Digging MERN V: react state"
date: "2020-09-26"
lastupdated: "2020-09-26"
category: "mern"
description: "react state"
---

If you are visiting here for the first time, this is a part of the diggingmern series. So therefore, I will assume you are familiar with the previous series.

If not, see the [first series](/articles/hello-mern "first series link").

<div class="borderTop"></div>

After you must have completed the 
[last tutorial](/articles/introduction-to-mavoscript-with-a-calculator-project/), you should have had a static page that resembles a blog.

However, real blogs are not that static so much that more blogs can not be added. In this tutorial we would start manipulating our data thanks to **react state**.

By the end of this tutorial you would have learned how to set state, render state and update state.

## **State**

We can start by rendering the blogsData through state instead of the way it is currently handled.

Replace blogsData with this.state.blogData in the render() method

```javascript
// BlogPage component
<div>
...
this.state.blogsData.map((each)=>...)
```

However this doesnot do, the last step will be to add a class contructor and assign the initial this.state

Note how props was passed to the contructor:

```javascript
// BlogPage component
class BlogPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            blogsData: blogsData
        }
    }
...
```

If everything goes as expected, you can reload your browser to ensure everything looks good.

## **Simulate SPA**

Instead of setting the state directly like we did

```javascript
...
this.state.blogsData.map(...)
```

We can simulate popular SPA, Single Page Application. You know the way it takes few seconds before the whole data appear on screen thing?

We would be simulating that rudimently here with aide of an old school setTimeout function.

The setTimeout will help us delay the code from executing...instead talking much, lets get to action.

<div class="borderTop"><div>

At first we will make the blogsData variable empty, if you reload the browser the BlogRow component should be empty too.

```javascript
...
 contructor(){
  this.state = {blogsData: []}
 }
```

We would use a method that helps load the data after few seconds have elapsed.

```javascript
load(){
    setTimeout(()=>this.setState({blogsData: blogsData}), 5000)
}
```

Where do we use the load method? This exactly would be answered in the next section.


## **Adding Lifecycle Methods**
React does provides us with few hooks where react lifecycle can be hooked to. 

For now we would only be concerned with componentDidMount Lifecycle Hook.

componentDidMount lifecycle helps us to hook a function or whatever to the component after it is done mounting, hence component-did-mount as the name goes.

You can pass the load method there in order to ensure we only load the data after the BlogPage component is done mounting.

```javascript
// BlogPage
...
componentDidMount(){
    this.loadData()
}
...
```

You can see the magic on the brower now. 

It should take the browser 5 seconds delay before it displays the data. Now that a real SPA.


## **Update the blog**
In this section, we have two objectives. 

1.  create a new Blog that would be appended to the initial blog.
2.  implement a minimal form to handle blog update

Let's start by creating a non-functional form.

```javascript
...
<form name="blogAdd">
    <input type="text" name="title" placeholder="Title" />
    <input type="text" name="summary" placeholder="summary" />
</form>
...
```

Replace the placeholder div in the BlogAdd Component with the piece of code above.

```javascript
class BlogAdd extends React.Component {
    render(){
        return(
            <form>
            ...
        )
    }
}
```

In as much I would try to make everything minimal, handling form in react can be a little hectic.

In that regard, let leave the form handling troubles and instead try to implement an automation for adding new blog.

In your BlogAdd component, above the render method, write a createBlog method.

```javascript
...
createBlog(newBlog){
    newBlog.id = this.state.blogsData.length + 1;
    newBlog.created = new Date();
    const newBlogData = this.state.blogsData.slice();
    newBlogData.push(newBlog);
    this.setState({blogsData: newBlogData})
}
render(){
    return(
        ....
    )
}
```

Since I have decided to shy away from handling events and all the form troubles, We create a custom newBlog at the top of src/app.js file just below the blogsData array.

```javascript
...
]

const sampleBlog = {
    title: 'Third Blog",
    summary: 'I am a white man with a white brain'
}
...
```

Inside the BlogAdd component, make another constructor.

```javascript
constructor(props){
    super(props)
    setTimeout(()=>this.createBlog(sampleBlog), 2000)
}
```

If you check the browser, after 2 seconds the browser should automatically add a new Data and three (3) blogs rendered on the page.

<div class="borderTop"></div>

After the last section, we can start doing the form stress now.

Although, I have been over stating the stress thing, forms in react isn't as stressful as I think. 

There are two properties you should be conscious of.

1. the onSubmit
2. the onChange

But in this tutorial, we ignore the onChange handle and only handle things with the form onSubmit.

```javascript
handleSubmit(event) {
    event.preventDefault();
    const form = document.forms.blogAdd;
    const blog = {
        title: form.title.value, summary: form.summary.value
    }
    createBlg(blog)
    form.title.value=""; form.summary.value=""
}
```

Now that we have the handleSubmit method, you can remove the setTimeout at the contructor and replace it with the binding below.

```javascript
...
constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
}
```

To make the form work like we want, pass the handleSubmit method to the onSubmit parameter.

```javascript
...
<form name="blogAdd" onSubmit={this.handleSubmit}>
...
```

If you fill the form and click the submit button, the react will re-render with an updated BlogPage.

## **Closing Note**

At the end of this tutorial, you have learnt about state, how it can be update and minimal forms in react. 

If you have followed the past five (5) tutorials, you should have a very minimal blog that disappear on page reload. Even with this so far, you are already dangerous to call yourself a react developer.