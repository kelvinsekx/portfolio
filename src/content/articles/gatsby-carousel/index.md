---
title: "Gatsby Carousel from Scratch "
date: "2020-06-02"
lastupdated: "2020-08-24"
description: "gatsby carousel by kelvinsekx using gatsby-image gatsby-image gatsby gatsby carousel"
---

Today, I want to give a snick peek of how I built my carousel using gatsby and gatsby-image. You can check the result on the <a href="https://www.kelvinsekx.codes">home page</a>.Only that mine changes automatically, we will be  building a very similar one that would change on a click event.

###**spoiler ALERT!!!**: there is a gatsby plugin that helps with carousel. I have never used it before and do not know about how cool it is. But you can sure give it a try.


##**Step 1**

Clone the starter with the code below(this might take a few minutes depending on the strength of the network in your area). 
```javascript
{
    gatsby new gatsby-starter-default https://github.com/gatsbyjs/gatsby-starter-default
}
```

##**Step 2**
If you have successfully cloned the repo, import few images from your computer picture folder into the images directory on you newly installed gatsby-starter folder.  

###**protip!!!**: ensure you rename the images so it easy to be referenced. You should have something like this

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

##**Step 4**
In your layout.js file paste the grapql query below. However ensure you have the gatsby-image installed else check out gatsby site and download the gatsby-image real quick. If you have everything inorder, lets proceed


```javascript
{
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
    }
  `
}
```

##**Step 4**

You can now return the image to the screen.

```javascript
{
  const arrayIt = [
     {image: data.image1.childImageSharp.fluid},
     {image: data.image2.childImageSharp.fluid},
     {image: data.image3.childImageSharp.fluid},
  ]

  let image = arrayIt[index].image
}
```

##step 5

pass this into the top of your file so that


```javascript
{
function Image() {
  const [index, setIndex] = useState(1)
}
```
##**Last Step**

We would quickly create a next and previous button so that the images change on click of either button.

##**pit fall**

this method can be unhealthy for production purpose but it sure does provide a lot understanding and knowledge that can help out in the next tutorial. Also you can just clone my repo to see how everything work on my side.
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


