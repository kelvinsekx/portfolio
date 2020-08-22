import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const style = {
  transition : '2s ease-out'
}
function Image() {
  const [index, setIndex] = useState(1)

  const data  = useStaticQuery(
      graphql` 
      query {
      image1:file(relativePath: { eq: "kelvin-hands.png" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image2:file(relativePath: { eq: "kelvin-ugly.png" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image3:file(relativePath: { eq: "kelvinsmilling.png" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image4:file(relativePath: { eq: "yeye.png" }) {
        childImageSharp {
          fluid(maxWidth: 190, maxHeight: 190) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
    
  )

 React.useEffect(() => {
    const interval = setInterval(
      _ => {
      // let new_index = Math.floor(Math.random() * length)
      index === 2 ? setIndex(0) :
      setIndex(index+1)
    }, 5000)
    return _ => clearInterval(interval)
  })
  
  const arrayIt = [
     {image: data.image2.childImageSharp.fluid},
     {image: data.image3.childImageSharp.fluid},
     {image: data.image4.childImageSharp.fluid},
  ]
  //   window.requestAnimationFrame(changeIndex);

  let image = arrayIt[index].image

  return <Img fluid={image } style={style} />
}

export default Image
