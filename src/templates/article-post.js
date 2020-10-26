import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import { MediaQueryBtn, Smalled, NAV, FooterDiv, Spanner1, Spanner2 } from "./article-post.styled"

import Layout from "../components/layout/layout"
import BackIcon from "../components/icon/back.svg"

import "./article-post.css"

const BlogTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, previous } = pageContext
  const [state, setState] = React.useState(false)

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />
      <MediaQueryBtn
        className={state === false ? "re" : "er"}
        onClick={() => {
          setState(!state)
        }}
      >
        <Spanner1 st={state}>{`<`}</Spanner1>
        <Spanner2 st={state}>{`>`}</Spanner2>
      </MediaQueryBtn>
      <div>
        <div className="row">
          {/* // sidebar for table of content */}
          <div
            className={`col-lg-3 py-3 sideContent ${state ? "css-x" : null}`}
          >
            <h5 style={{ padding: "2rem 0 0 2.4rem" }}>CONTENT</h5>
            <div
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              style={{ fontSize: "1.1rem" }}
            />
          </div>

          <div
            className="col-lg-9 col-sm-12"
            style={state ? { opacity: 0 } : { opacity: 1 }}
          >
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

export default BlogTemplate

const Navigator = ({ previous, next }) => (
  <NAV className="borderTop">
    <div style={{ width: "42%", alignItem: "left" }}>
      {previous && (
        <div>
          <div>Previous</div>
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
          <div>Next</div>
          <Link className="link" to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        </div>
      )}
    </div>
  </NAV>
)

const ReturnLink = () => (
  <Link to="/articles" className="link returnLink">
    <BackIcon style={{ height: "auto", width: "1.5rem" }} /> RETURN TO ARTICLES
  </Link>
)

const ArticleHeader = ({ post }) => {
  const minutes = `${post.timeToRead}
  ${post.timeToRead > 1 ? "minutes" : "minute"}`
  const posts = post.frontmatter
  return (
    <div className="mt-2 artHeader">
      <h1>{posts.title}</h1>
      <Smalled>
        <div>
          {"^(* ! *)^"} {minutes} read
        </div>
        <div>Last modified on {posts.lastupdated}</div>
        <div>
          {posts.sourcecode ? (
            <a href={posts.sourcecode}>Source code on Github</a>
          ) : (
            `loading...`
          )}
        </div>
      </Smalled>
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
        lastupdated(formatString: "ddd, MMMM DD,YYYY")
        sourcecode
      }
      fields {
        slug
      }
    }
  }
`
