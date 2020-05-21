const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: `articles${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.edges
  const blogBase = path.resolve(`./src/templates/article-post.js`)
  posts.forEach((post, index) => {
    //previous
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    //next
    const next = index === 0 ? null : posts[index - 1].node
    createPage({
      path: post.node.fields.slug,
      component: blogBase,
      context: {
        //data passed to context is available
        // in page queries as Graphql variables
        slug: post.node.fields.slug,
        next,
        previous,
      },
    })
  })
  console.log(JSON.stringify(result, null, 4))
}
