import React from "react"
import { graphql } from "gatsby"
import {WrapperContainer, FooterDiv} from "../components/articles.styled"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <WrapperContainer>
      <h1>{post.frontmatter.title}</h1><small>{post.timeToRead} minute read</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <FooterDiv href="https://www.github.com">Edit on Github</FooterDiv>
      </WrapperContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date
      }
    }
  }
`
