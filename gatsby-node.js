const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)


exports.onCreateNode = ({node, getNode, actions})=>{
    const {createNodeField} = actions
    if(node.internal.type === `MarkdownRemark`){
        const slug = createFilePath({node, getNode, basePath: `content`})
        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
}



exports.createPages = async ({graphql, actions})=>{
    const {createPage} = actions

    const result = await graphql(`
    query{
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/article-post.js`),
          context:{
              //data passed to context is available
              // in page queries as Graphql variables
              slug: node.fields.slug
          }
      })
  });
  console.log(JSON.stringify(result, null, 4))
}