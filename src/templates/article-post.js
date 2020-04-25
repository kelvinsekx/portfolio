import React from "react"
import { graphql, Link } from "gatsby"
import { WrapperContainer, FooterDiv, Smalled } from "../components/articles.styled"
import Layout from "../components/layout"
import BackIcon from "../components/icon/back.svg"
//import SunIcon  from './icon/sun.svg';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <WrapperContainer>
        <Link
          to="/articles"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <BackIcon style={{ height: "auto", width: "2.5rem" }} /> BACK TO
          ARTICLES
        </Link>
        <h1>{post.frontmatter.title}</h1>
        <Smalled>
          Published {post.frontmatter.date} ----- {post.timeToRead} {post.timeToRead === 1 ? "minute": "minutes"} read
        </Smalled>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        <FooterDiv
          href={`https://github.com/kelvinsekx/gatsbyblog/blob/master/src/content${post.fields.slug.replace(
            /.$/,
            "."
          )}md`}
        >
          Edit on Github
        </FooterDiv>
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
      fields {
        slug
      }
    }
  }
`
