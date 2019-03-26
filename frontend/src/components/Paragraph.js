import React from "react"
import Img from "gatsby-image"

const getParagraphContent = (type, data) => {
  switch (type) {
    case "paragraph__text":
      return (
        <p dangerouslySetInnerHTML={{ __html: data.field_text.processed }} />
      )
    case "paragraph__image":
      return (
        <Img
          fluid={data.relationships.field_image.localFile.childImageSharp.fluid}
        />
      )
    default:
      return ""
  }
}

const Paragraph = props => getParagraphContent(props.__typename, props)

export default Paragraph
