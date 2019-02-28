import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children, className, src }) => (
    <StaticQuery query={graphql`
      query {
        sampleBG: file(relativePath: { eq: "sample-image2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
     render={data => {
       const imageData = data[src].childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
            { children }
          </BackgroundImage>
       )
      }
     }
    />
)

BackgroundSection.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default BackgroundSection;
