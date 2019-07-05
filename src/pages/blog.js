import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  const { edges } = data.allContentfulBlogPost

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog Page</h1>
      <ol>
        {edges.map(edge => (
          <li key={edge.node.title}>
            <h2>
              <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
            </h2>
            <p>{edge.node.publishedDate}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
