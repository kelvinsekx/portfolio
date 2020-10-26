import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import {
  //WrapperContainer,
  StyledH3,
  StyledLink,
  StyledSmall,
} from "../components/articles.styled"

//import other components here
import BIO from "../components/articlesComponent/bio"
//this should come last
import Layout from "../components/layout/layout"

const ArticlesPage = ({ data }) => (
  <Layout>
    <SEO title="All posts" />
    <div className="container">
      <div className="row">
        <BIO
          data={data.site.siteMetadata.articles.articles}
          description={data.site.siteMetadata.articles.shortnote}
        />
        <main>
          <p>
            {data.allMarkdownRemark.totalCount} Recent Article
            {data.allMarkdownRemark.totalCount === 1 ? " " : "s"}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "2rem" }}>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <StyledLink key={node.id} className="col-lg-4 col-md-6 col-sm-6 col-xm-6">
                  <div>
                    <StyledH3 ftSize={'1.7rem'}>
                      <Link className="to" to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </StyledH3>
                  </div>

                  <div>
                    <StyledSmall ftSize={'1rem'}>
                      Kelvinsekx on {node.frontmatter.date}
                    </StyledSmall>
                  </div>

                  <StyledSmall ftSize={'0.99rem'}>
                    <Link className="link" to={node.fields.slug}>
                      read details &#187;&#187;&#187;
                    </Link>
                  </StyledSmall>
                </StyledLink>
            ))}
          </div>
        </main>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        articles {
          articles
          description
          twitter
          shortnote
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "ddd, MMMM DD,YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

export default ArticlesPage
