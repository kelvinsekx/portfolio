---
title: "Digging MERN IV : Passing data around with props"
date: "2020-09-14"
lastupdated: "2020-09-14"
description: "mern serverless react introduction-to-node introduction-to-mern mern for beginners"
---

<div class="introduction">
When it comes to data in react, including passing them around, two things should come as the first and basic in your mind. The first is props  : which is <strong>readonly</strong> data . The second is state  : which is the <strong>modifiable</strong> data.
</div>

<div class="borderTop"></div>

## **Passing Props around**
Props allows us to make interesting component. Component that can send data and receive one too.

Props allows parent component to send data to her child component and make it render differently on different instances. 

There are two categories of things that can be passed with props. 

The first is every normal data in javascript popularly array and object (common as list). But not limited to these two you can send data from any source as props.

Props however has a **BIG DEMERIT**, you can’t modify it directly. You would have to pass it to a state to do that.

Now that you know a little about props to be dangerous, let us make a component, BlogRow, and reuse it a few times in the BlogPage component.

```javascript
…
class BlogPage extends React.Component {
     render(){
       return (
        <div>
            <BlogRow />
            <BlogRow />
        </div>
        )
    }
}
```

Before we create the BlogRow component, a little discussion has to be made further.

You need to know the easiest way to pass data around with props is the use of attribute. 

If you've been following from Digging Mern – I, you have used props when you passed "Hello World" to a title attribute. Moreover, the title attribute is a standard ***html attribute***, we will be using a ***custom attribute*** on our case. 

Copy and paste the changes made to the BlogPage component.

```javascript
…
<BlogRow
    summary = "Thanks for following love. I am a black man with a black mind"
    dateTime="23-4-1998"
    title="This is my first blog" />
<BlogRow 
    summary = "Thanks for reading far. I am a brown man with a brown brain"
    dateTime="22-4-1958"
    title="This is my second blog" />
…

```

It is time to see how I got the data from the parent components in BlogPage into the BlogRow.

```javascript
class BlogRow extends React.Component {
    render(){
        const styles = this.prop.styles-css;
        return(
            <section>
                <h3>{this.props.title}</h3>
                <span>{this.props.dateTime}</span>
                <div>{this.props.summary}</div>
            </section>
        )
    }
}
```

<div class="borderTop"></div>

## **Passing Data Using Children**

Instead of passing our props the way we did initially. Let us know take advantage of props.children.

```javascript
class BlogRow extends React.Component {
    render(){
        const styles = this.prop.styles-css;
    return(
        <div>
            <h3>{this.props.title}</h3>
            <span>{this.props.dateTime}</span>
            <p>{this.props.children}</p>
        </div>
    )
}}
```

This is another way to pass data to other components. It allows the parent component to pass html-node to the child component.
In the child component, this can be accessed with a special props, this.props.children.


```javascript 
<BlogRow dateTime="22-34-1998" title="This is my first blog" >
    <p>Thanks `for` following love. I am a black man with a black mind.</p>
<BlogRow>
```

## **Dynamic Composition**

In this section, you will solidify your knowledge about props. 

We’ll replace the hard-coded set of BlogRow with one that simulate that of a real world database. 

If your hearing database quickly, donot be scared man. We would not be dealing with any deal here. We will only have to create an array of objects that stays in memory.

```javascript
const blogsDATA = [
    {
     id: 1, status: 'granteed', owner: 'kelvin', 
     created: new Date(2020-20-1), summary: "Thanks for following love. I am a black man with a black mind", title: 'This is my first blog'
    },
    {
     id: 2, status: 'non-granteed', owner: 'sekx', 
     created: new Date(1988-20-02), summary: "Thanks for following love. I am a brown man with a brown mind", title: 'This is my second blog'
    }
]
```

Instead of repeating the BlogRow component twice, we will have to instantiate the BlogRow from the array like this.

```javascript
…
blogsDATA.map((each)=>{
    <BlogRow 
    summary = {each.summary}
    dateTime= {each.created}
    title= {each.title}
    owner = {each.owner} />
})
…
```

If you are conversant you would notice there is a new attribute that have not been taken into consideration. That is the **owner** attribute. 

I would give you the chance to handle that yourself and decide where you want the data to be displayed. Now the ball is in your court have fun.

If you reload the browser everything should look good.
Also, you can add more issues into the array. For now, two issues are enough to demostrate dynamic composition.


