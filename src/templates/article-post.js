import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { FooterDiv, Smalled, NAV } from "../components/articles.styled"
import Layout from "../components/layout"
import BackIcon from "../components/icon/back.svg"

const blogTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <div className="container">
        <div class="row">
          <div className="col-lg-2 mt-5 mb-2">
            <h5>CONTENT</h5>
            <div
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              style={{ fontSize: "1rem" }}
            />
          </div>

          <div className="col-lg-10 col-sm-12">
            <div className="row">
              <div className="col-lg-9">
                <Link
                  to="/articles"
                  className="link"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: "0.7em",
                  }}
                >
                  <BackIcon style={{ height: "auto", width: "1.5rem" }} /> BACK
                  TO ARTICLES
                </Link>
                <div className="mt-2" style={{ color: "#031b4e" }}>
                  <h1 style={{ fontWeight: "800" }}>
                    {post.frontmatter.title}
                  </h1>
                  <div className="mb-4">
                    <Smalled>
                      <div style={{ color: "#031b4e", fontWeight: "650" }}>
                        {"^(* ! *)^"} {post.timeToRead}{" "}
                        {post.timeToRead === 1 ? "minute" : "minutes"} read
                      </div>
                      <div style={{ color: "#031b4e", fontWeight: "550" }}>
                        Last modified on {post.frontmatter.lastupdated}
                      </div>
                      <div>{post.frontmatter.sourcecode ? (
                          <a href={post.frontmatter.sourcecode}>
                            Source Code here on Github
                          </a>
                      ) : (
                        <span>{`loading...`}</span>
                      )}</div>
                    </Smalled>
                  </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

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
                        <Link
                          className="link"
                          to={previous.fields.slug}
                          rel="prev"
                        >
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
                <div className="borderTop">
                  Published on {post.frontmatter.date}{" "}
                </div>

                <FooterDiv
                  className="to"
                  href={`https://github.com/kelvinsekx/gatsbyblog/blob/master/src/content${post.fields.slug}index.md`}
                >
                  Edit on Github
                </FooterDiv>
              </div>
              <div className="col-lg-3">
                <ul>
                  <ol>Just another ads</ol>
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
