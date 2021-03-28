---
title: "Gatsby Carousel from Scratch "
date: "2020-06-02"
lastupdated: "2021-03-26"
description: "gatsby carousel by kelvinsekx using gatsby-image gatsby-image gatsby gatsby carousel"
---

Today, we have a snick peek of how I built my carousel using gatsby and gatsby-image. You can check the result on the <a href="https://www.kelvinsekx.codes">home page</a>..

> **spoiler ALERT!!!** : there is a gatsby plugin (gatsby-image-background-slider) that helps with carousel. I have never used it before and do not know about how cool it is. But you can sure give it a try.


## Step 1

We will need a place to practice our soon would-learn craft.

Clone the starter with the code below(this might take a few minute depending on the strength of the network in your area). 
```javascript
{
    gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default
}
```

## Step 2

Now that you have successfully cloned the repo, import few images from your computer picture folder into the "images" directory on your newly installed gatsby-starter folder. 

If there is no "images" folder, please create one. 

> **pro tip !!**: ensure you rename each image so it easy to be referenced before you move the images folder. You should have something like this

```javascript
{
    images>
        gatsby-icon.png
        image1.jpg
        image2.jpg
        image3.jpg
        image4.png

}
```

## Step 4
Now we can proceed to creating our awesome Carousel

Create a custom file in the components folder, I named mine 'Carousel.js'. The reason I did this is to ensure the easy reusability of the component.

In your Carousel.js, import the following important modules

```javascript
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
```

However ensure you have the gatsby-image installed else check out gatsby site and download the gatsby-image real quick. 
`npm install gatsby-image`

If you have with me,  create a stateless component, well in react we do not longer regard them as stateless but functional component

```javascript
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function Carousel (){
  // some code go dey here
}

export default Carousel
```

With useStaticQuery, a utility from gatsby we can query from components, we will get all our images into a binding called "data"

```javascript
:
:
function Carousel (){
  const data  = useStaticQuery(
      graphql` 
      query {
      image1:file(relativePath: { eq: "image1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2:file(relativePath: { eq: "image2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3:file(relativePath: { eq: "image3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4:file(relativePath: { eq: "image4.png" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`
    return null
}
:
```

## Step 4

Now that we have our images, we would pass it all into an an Array().

```javascript
:
:
function Carousel (){
  const data  = useStaticQuery(
    :
  )
  const imagesArr = [
     {image: data.image1.childImageSharp.fluid},
     {image: data.image2.childImageSharp.fluid},
     {image: data.image3.childImageSharp.fluid},
  ]

  // take note of index
  let image = imagesArr[index].image
  return null;
}
:
```

## step 5
Because we have not defined our index, you should get a screaming error but ignore.
 
Let us handle that.

```javascript
:
:
function Carousel (){
  // index defined
  const [index, setIndex] = useState(1)
  const data  = useStaticQuery(
    :
  )
  :
}
```

## step 6

When you render the image variable, one image will show to the screen and that's not we really want.

To make our images show on screen one at a time, we would make some effect and the best place to place that is in our React.useEffect() hook. 

We would be making use of the setInterval asynchronous function a better alternative could be the window.requestAnimationFrame() but we would stick with setInterval for now.

```javascript
:
function Carousel (){
  :
  React.useEffect(() => {
    const interval = setInterval(
      _ => {
      index === 2 ? setIndex(0) :
      setIndex(index+1)
    }, 10000)
    return _ => clearInterval(interval)
  })

  const imagesArr = [
     {image: data.image1.childImageSharp.fluid},
     {image: data.image2.childImageSharp.fluid},
     {image: data.image3.childImageSharp.fluid},
  ]
  :
}
```

## step 8
At last we are done, now we can render the Carousel component into any of the pages and see the magic all without any installed modules.

```javascript
:
function Carousel (){
  :
  const imagesArr = [
     :
  ]

  let image = arrayIt[index].image

  return <Img 
          fluid={image } 
          style={style} 
          className="changingImg" />
}

export default Carousel
```

With this in place you can use the component in any of the gatsby pages and everything should look well.

## Bye

****
 <h3 style="color:#349077">
**Joke Time : dedicated to Victor**
</h3>

If a female tiger is called tigress,
what is a female dog called??

***
 <h3 style="color:#349077">
**What if I interview you : little quick questions I try and answer myself**
</h3>

Create an higher order function that takes a list or an array and simple return a log of each item in the list. So that
```javascript
{
    reply([1,2,3,4,"kelvin"], print_to_console) // returns 1,2,3,4,"kelvin"
}
```


#### Closing Note:
Thank you again for reading and following my silly instrutions. Hope I helped out.


