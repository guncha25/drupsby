import React from "react"
import Img from "gatsby-image"
import Tags from "../components/Tags"
import Paragraph from "../components/Paragraph"

const NodeDefault = props => (
  <div style={{ marginTop: "40px" }}>
    <h3>{props.title}</h3>
    {props.relationships.image.localFile && (
      <Img fluid={props.relationships.image.localFile.childImageSharp.fluid} />
    )}
    <p dangerouslySetInnerHTML={{ __html: props.ingress }} />
    {props.relationships.field_liftups &&
      props.relationships.field_liftups.map(liftup => (
        <Paragraph {...liftup} key={liftup.id} />
      ))}
    <ul>
      {props.relationships.tags.map(tag => (
        <Tags name={tag.name} key={tag.name} />
      ))}
    </ul>
  </div>
)

export default NodeDefault
