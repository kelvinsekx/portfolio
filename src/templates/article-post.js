import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"

import { MediaQueryBtn, Spanner1, Spanner2 } from "./article-post.styled"

import Layout from "../components/layout/layout"
import { ArrowLeft, ArrowLeftCircle, ArrowRight } from "lucide-react"

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
        <div className="row text-base ">
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

          <div style={state ? { opacity: 0 } : { opacity: 1 }}>
            <div>
              <div className="space-y-5">
                <ReturnLink />
                <ArticleHeader post={post} />
                <div className="[&>xxcontent]:prose">
                  <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: post.html.toString() }}
                  />
                </div>

                <ArticleExtras
                  lastupdated={post.frontmatter.lastupdated}
                  sourcecode={post.frontmatter.sourcecode}
                  date={post.frontmatter.date}
                />
                <Navigator previous={previous} next={next} post={post} />

                <div className="flex justify-end">
                  <a
                    href={`https://github.com/kelvinsekx/gatsbyblog/blob/master/src/content${post.fields.slug}index.md`}
                  >
                    Edit this page
                  </a>
                </div>
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
  <nav className="text-base space-y-5">
    <div>
      {next && (
        <Link
          className="flex justify-end border border-gray-400 py-5 px-3 rounded-md gap-3"
          to={next.fields.slug}
          rel="next"
        >
          <div>
            <div className="text-gray-500 text-sm">UP NEXT</div>
            <div>{next.frontmatter.title}</div>
          </div>

          <ArrowRight />
        </Link>
      )}
    </div>
    <div>
      {previous && (
        <Link
          className="flex border border-gray-400 py-5 px-3 rounded-md gap-3"
          to={previous.fields.slug}
          rel="prev"
        >
          <div>
            <ArrowLeft />
          </div>
          <div>
            <div className="text-gray-500 text-sm">PREVIOUSLY</div>
            <div>{previous.frontmatter.title}</div>
          </div>
        </Link>
      )}
    </div>
  </nav>
)

const ArticleExtras = ({ lastupdated, date, sourcecode }) => (
  <div className="text-gray-400">
    <div>
      <span className="text-gray-500">Last modified on</span>{" "}
      {lastupdated || date}
    </div>
    <div>
      {!!sourcecode ? <a href={sourcecode}>Source code on Github</a> : null}
    </div>
  </div>
)

const ReturnLink = () => (
  <Link to="/articles" className="flex space-x-4">
    <span>
      <ArrowLeftCircle />
    </span>{" "}
    <span>RETURN TO ARTICLES</span>
  </Link>
)

const ArticleHeader = ({ post }) => {
  const minutes = `${post.timeToRead}
  ${post.timeToRead > 1 ? "minutes" : "minute"}`
  const posts = post.frontmatter
  return (
    <div>
      <h1 className="text-3xl tracking-tight font-semibold">{posts.title}</h1>
      <p className="text-sm text-gray-400">{minutes} read</p>
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
