import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { FooterDiv, Smalled, NAV } from "../components/articles.styled"
import Layout from "../components/layout"
import BackIcon from "../components/icon/back.svg"

import "./article-post.css"

const blogTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <div>
        <div className="row">
          <div className="col-lg-3 py-3 sideContent">
            <h5 style={{paddingLeft:'2.4rem'}}>CONTENT</h5>
            <div
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          <div className="col-lg-9 col-sm-12">
            <div className="row">
              <div className="col-lg-9">
                <ReturnLink />
                <ArticleHeader post={post} />
                <article dangerouslySetInnerHTML={{ __html: post.html }} />
                <Navigator previous={previous} next={next} />
                <div className="borderTop" />

                <FooterDiv
                  className="to"
                  href={`https://github.com/kelvinsekx/gatsbyblog/blob/master/src/content${post.fields.slug}index.md`}
                >
                  Edit this page
                </FooterDiv>
              </div>
              <div className="col-lg-3">
                <ul>
                  <ol></ol>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default blogTemplate

const Navigator = ({ previous, next }) => (
  <NAV
    style={{
      display: `flex`,
      flexWrap: `wrap`,
      justifyContent: `space-between`,
      listStyle: `none`,
    }}
    className="borderTop"
  >
    <div style={{ width: "42%", alignItem: "left" }}>
      {previous && (
        <div>
          <div>Next</div>
          <Link className="link" to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        </div>
      )}
    </div>
    <div
      style={{
        width: "40%",
        alignItem: "right",
        marginTop: "3.5rem",
      }}
    >
      {next && (
        <div>
          <div>Previous</div>
          <Link className="link" to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        </div>
      )}
    </div>
  </NAV>
)

const ReturnLink = () => (
  <Link
    to="/articles"
    className="link"
    style={{
      display: "inline-flex",
      alignItems: "center",
      fontSize: "0.7em",
      padding: "2em 0",
    }}
  >
    <BackIcon style={{ height: "auto", width: "1.5rem" }} /> RETURN TO ARTICLES
  </Link>
)

const ArticleHeader = ({ post }) => {
  const minutes = `${post.timeToRead}
  ${post.timeToRead === 1 ? "minute" : "minutes"}`
  const posts = post.frontmatter
  return (
    <div className="mt-2 artHeader">
      <h1>{posts.title}</h1>
      <div className="mt-5 mb-4">
        <Smalled>
          <div className="artHeader">
            {"^(* ! *)^"} {minutes} read
          </div>
          <div className="artHeader">Last modified on {posts.lastupdated}</div>
          <div>
            {post.frontmatter.sourcecode ? (
              <a href={posts.sourcecode}>Source code on Github</a>
            ) : (
              <span>{`loading...`}</span>
            )}
          </div>
        </Smalled>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByBlog($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      tableOfContents(absolute: false)
      frontmatter {
        description
        title
        date(formatString: "ddd, MMMM DD,YYYY")
        lastupdated(formatString: "ddd, MMMM DD,YYYY")
        sourcecode
      }
      fields {
        slug
      }
    }
  }
`
