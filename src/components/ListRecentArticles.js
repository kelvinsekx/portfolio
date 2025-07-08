import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { useTheme } from "styled-components"
import cn from "clsx"

export const ListRecentArticles = () => {
  const { theme } = useTheme()
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

  const hrefStyle = {
    light: "",
  }
  return (
    <div className="pt-20">
      <div className="border-t space-y-5 border-gray-300">
        <h2 className="text-lg font-semibold text-gray-600">
          My recent writings
        </h2>
        <div className="grid grid-cols-1 gap-2">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Link
              key={node.fields.slug}
              to={node.fields.slug}
              className="md:w-8/12 group"
            >
              <div
                key={node.id}
                className={cn(
                  " group-hover:bg-gray-50 rounded-xl text-sm border border-gray-300 px-4 py-3 ",
                  {
                    "bg-black/10": theme == "black",
                    "bg-[#f5f5f5]/20": theme == "light",
                  }
                )}
              >
                <h3 className="text-base font-medium group-hover:text-black text-[#555] capitalize">
                  {node.frontmatter.title}
                </h3>
                <p className="text-gray-500 text-xs">
                  Published on {node.frontmatter.date}
                </p>
                <p
                  className={cn("group-hover:underline text-xs mt-1", {
                    "": theme == "light",
                    "text-[purple]": theme == "dark",
                  })}
                >
                  Read more &raquo;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
