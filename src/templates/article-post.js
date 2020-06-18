import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { WrapperContainer, FooterDiv, Smalled, NAV } from "../components/articles.styled"
import Layout from "../components/layout"
import BackIcon from "../components/icon/back.svg"
//import SunIcon  from './icon/sun.svg';

const blogTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const {next,previous} = pageContext
  
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <SEO description={post.frontmatter.title} />
      <WrapperContainer>
        <Link
          to="/articles"
          className="link"
          style={{ display: "inline-flex", alignItems: "center", fontSize:"0.7em" }}
        >
          <BackIcon style={{ height: "auto", width: "1.5rem" }} /> BACK TO
          ARTICLES
        </Link>
        <h1>{post.frontmatter.title}</h1>
        <Smalled>
          Published {post.frontmatter.date} ----- {post.timeToRead} {post.timeToRead === 1 ? "minute": "minutes"} read
        </Smalled>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        
        <NAV
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <div  style={{width: '42%', alignItem: "left"}}>
            {previous && (
              <div>
              <div>previous</div>
              <Link className="link" to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
              </div>
            )}
          </div>
          <div style={{width: '40%', alignItem: "right", marginTop: '3.5rem'}}>
            {next && (
              <div>
                <div>next</div>
              <Link className="link" to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
              </div>
            )}
          </div>
      </NAV>
        
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
