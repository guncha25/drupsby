import React from "react"
import { graphql } from "gatsby"
import NodeDefault from "../components/NodeDefault"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Article = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <NodeDefault {...data.allNodeArticle.edges[0].node} />
  </Layout>
)

export const query = graphql`
  query ARTICLE_INDEX_QUERY($nid: Int) {
    allNodeArticle(filter: { drupal_internal__nid: { eq: $nid } }) {
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
          title
          relationships {
            field_liftups {
              __typename
              ... on paragraph__text {
                id
                field_text {
                  processed
                }
              }
              ... on paragraph__image {
                id
                relationships {
                  field_image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 520, maxHeight: 500) {
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
      }
    }
  }
`

export default Article
