import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "profilePic.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 190, maxHeight: 190) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

function Image() {
  const [index, setIndex] = useState(0)

  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            dir: {
              eq: "C:/nodePractice/gatsby/deployer/gatsbyblog/src/images/slides"
            }
          }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 190, maxHeight: 190) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const length = allFile.edges.length - 1

  //setInterval(changeIndex, 1000)
  React.useEffect(() => {
    const interval = setInterval(
      _ => {
      // let new_index = Math.floor(Math.random() * length)
      index === length ? setIndex(0) :
      setIndex(index+1)
    }, 4000)
    return _ => clearInterval(interval)
  })

  const { node } = allFile.edges[index]

  // window.requestAnimationFrame(changeIndex);

  return (
    <Img fluid={node.childImageSharp.fluid} key={node.id} alt={node.name} />
  )
}

export default Image
