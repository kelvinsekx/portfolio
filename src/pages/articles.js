import React from "react"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import {
  WrapperContainer,
  StyledH3,
  StyledLink,
  StyledSmall,
  StyledParagraph,
} from "../components/articles.styled"

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
        description={data.site.siteMetadata.articles.shortnote}
      />
      <main>
        <h4>
          {data.allMarkdownRemark.totalCount} Article
          {data.allMarkdownRemark.totalCount === 1 ? " " : "s"}
        </h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <StyledLink key={node.id}>
            
              <StyledH3>
              <Link 
              style={{ 
                textDecoration: "none" }} to={node.fields.slug}>
                {node.frontmatter.title}
                </Link>
              </StyledH3>
            
            <StyledSmall>Kelvinsekx on {node.frontmatter.date}</StyledSmall>
            <StyledParagraph>{node.excerpt}</StyledParagraph>
            <div><Link style={{ textDecoration: "none" }} to={node.fields.slug}>read details &#187;</Link></div>
          </StyledLink>
        ))}
      </main>
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
            date(formatString: "ddd, MMMM DD,YYYY")
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 260,truncate: false)
        }
      }
      totalCount
    }
  }
`

export default ArticlesPage
