import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import {WrapperContainer, StyledH3, StyledLink, StyledParagraph, MakeH3} from "../components/articles.styled"

//import other components here
import BIO from "../components/articlesComponent/bio"
//this should come last
import Layout from "../components/layout"

const ArticlesPage = ({ data }) => (
  <Layout>
    <WrapperContainer>
    <SEO title="All posts" />
    <BIO 
    data={data.site.siteMetadata.articles.articles} 
    description={data.site.siteMetadata.articles.shortnote}/>
    <main>
      <h4>
        {data.allMarkdownRemark.totalCount} Article
        {data.allMarkdownRemark.totalCount === 1 ? " " : "s"}
      </h4>

      {data.allMarkdownRemark.edges.map(({ node }) => (
          <StyledLink key={node.id}>
            <Link style={{textDecoration:"none"}} to={node.fields.slug}>
            
            <StyledH3>
              <MakeH3>{node.frontmatter.title}</MakeH3> <span>— {node.frontmatter.date}</span>
            </StyledH3>
            </Link>
            <StyledParagraph>{node.excerpt}</StyledParagraph>
          </StyledLink>
      ))}
    </main>
    <div>
      <a href="https://www.github.com//kelvinsekx">Edit on Github</a>
    </div>
    </WrapperContainer>
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
            date
            title
          }
          fields {
            slug
          }
          excerpt(truncate: false)
        }
      }
      totalCount
    }
  }
`

export default ArticlesPage
