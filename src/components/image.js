import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = (props) => {
  return (
    <StaticQuery
        query={graphql`
          query {
            sampleImage: file(relativePath: { eq: "sample-image.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

          }
        `}
        render={data => <Img className={props.className} fluid={data[props.src].childImageSharp.fluid} />}
      />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Image
