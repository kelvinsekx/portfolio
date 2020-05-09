import React from "react"
import { graphql, Link } from "gatsby"
import { WrapperContainer, FooterDiv, Smalled } from "../components/articles.styled"
import Layout from "../components/layout"
import BackIcon from "../components/icon/back.svg"
//import SunIcon  from './icon/sun.svg';

const blogTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const {next,previous} = pageContext
  console.log(next)
  console.log(previous)
  return (
    <Layout>
      <WrapperContainer>
        <Link
          to="/articles"
          className="link"
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
        <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <nav>
                <div>previous</div>
              <Link className="link" to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
              </nav>
            )}
          </li>
          <li>
            {next && (
              <nav>
                <div>next</div>
              <Link className="link" to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
              </nav>
            )}
          </li>
        </ul>
      </nav>
        
        <FooterDiv
          className="to"
          href={`https://github.com/kelvinsekx/gatsbyblog/blob/master/src/content${post.fields.slug}index.md`}
        >
          Edit on Github
        </FooterDiv>
      </WrapperContainer>
    </Layout>
  )
}

export default blogTemplate

export const query = graphql`
  query BlogPostByBlog($slug: String!) {
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
