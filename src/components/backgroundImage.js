import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children, className, src }) => (
    <StaticQuery query={graphql`
      query {
        image: file(relativePath: { eq: "name-of-file.jpg" }) {
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

export default BackgroundSection;
