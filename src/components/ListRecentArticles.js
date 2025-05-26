import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

export const ListRecentArticles = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <div className="mt-12 border-t space-y-5">
      <h2 className="text-lg font-semibold">My recent writings</h2>
      <div className="grid grid-cols-1 gap-2">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.fields.slug} className="md:w-8/12 group">
            <div
              key={node.id}
              className="bg-[#f5f5f5]/20 group-hover:bg-gray-50 rounded-xl text-sm border px-4 py-3"
            >
              <h3 className="text-base font-medium group-hover:text-black text-[#444] capitalize">
                {node.frontmatter.title}
              </h3>
              <p className="text-gray-600 text-xs">
                Published on {node.frontmatter.date}
              </p>
              <p className="text-blue-500 group-hover:underline text-xs mt-1">
                Read more &raquo;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
