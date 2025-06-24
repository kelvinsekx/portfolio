import React from "react"
import { graphql, Link } from "gatsby"
import { useTheme } from "styled-components"
import { ArrowLeft, ArrowLeftCircle, ArrowRight } from "lucide-react"
import cn from "clsx"

import Seo from "../components/seo"
import Layout from "../components/layouts/blog-layout"

import { MediaQueryBtn, Spanner1, Spanner2 } from "./article-post.styled"

const BlogTemplate = ({ data, pageContext }) => {
  const [state, setState] = React.useState(false)
  const { theme } = useTheme()

  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <Seo
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
          <div className={`col-lg-3 py-3 mb-5 ${state ? "css-x" : null}`}>
            <h5 className="mt-5 pb-2 text-lg">Table of Contents</h5>
            <div
              dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
              className="text-base text-gray-500"
            />
          </div>

          <div style={state ? { opacity: 0 } : { opacity: 1 }}>
            <div>
              <div className="space-y-5">
                <ReturnLink />
                <ArticleHeader post={post} />
                <div className="[&>xxcontent]:prose">
                  <div
                    className={cn("prose", {
                      "prose-invert": theme == "dark",
                    })}
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
          className="flex justify-end border border-gray-400 py-5 px-3 rounded-md gap-3 text-gray-700"
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
          className="flex border border-gray-400 py-5 px-3 rounded-md gap-3 text-gray-700"
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
      <span className="text-gray-500">Published on</span>{" "}
      { date },
      <span className="text-gray-500">Last modified on</span>{" "}
      {lastupdated }.
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
      <h1 className="text-3xl md:text-4xl tracking-tight font-semibold">
        {posts.title}
      </h1>
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
