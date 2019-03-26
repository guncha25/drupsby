import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const NodeTeaser = props => (
  <Link
    to={props.path.alias || "/node/" + props.nid}
    style={{ textDecoration: "none", color: "black" }}
  >
    <div style={{ marginTop: "40px" }}>
      <h3>{props.title}</h3>
      {props.relationships.image.localFile && (
        <Img
          fluid={props.relationships.image.localFile.childImageSharp.fluid}
        />
      )}
      <p dangerouslySetInnerHTML={{ __html: props.ingress }} />
    </div>
  </Link>
)

export default NodeTeaser
