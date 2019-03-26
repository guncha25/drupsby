import React from "react"
import { graphql } from "gatsby"
import NodeTeaser from "../components/NodeTeaser"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { allNodePage, allNodeArticle } }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {allNodePage.edges.map(edge => (
      <NodeTeaser key={edge.node.nid} {...edge.node} />
    ))}
    {allNodeArticle.edges.map(edge => (
      <NodeTeaser key={edge.node.nid} {...edge.node} />
    ))}
  </Layout>
)

export const query = graphql`
  query INDEX_QUERY {
    allNodePage {
      edges {
        node {
          nid: drupal_internal__nid
          title
          promote
          ingress: field_ingress
          path {
            alias
          }
          relationships {
            tags: field_tags {
              name
            }
            image: field_main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 520, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    allNodeArticle {
      edges {
        node {
          nid: drupal_internal__nid
          title
          promote
          ingress: field_ingress
          path {
            alias
          }
          relationships {
            tags: field_tags {
              name
            }
            image: field_main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 520, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
