/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise(resolve => {
    graphql(`
      {
        allNodePage {
          edges {
            node {
              nid: drupal_internal__nid
              title
              promote
              field_ingress
              path {
                alias
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
              path {
                alias
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allNodePage.edges.forEach(({ node }) => {
        createPage({
          path: node.path.alias || "/node/" + node.nid,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            nid: node.nid,
          },
        })
      })
      result.data.allNodeArticle.edges.forEach(({ node }) => {
        createPage({
          path: node.path.alias || "/node/" + node.nid,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            nid: node.nid,
          },
        })
      })

      resolve()
    })
  })
}
