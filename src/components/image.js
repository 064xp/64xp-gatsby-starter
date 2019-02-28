import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class Image extends React.Component {
  render () {
    const { src } = this.props;
    return(
      <StaticQuery
        query={graphql`
          query {
            imageName: file(relativePath: { eq: "path-to-image.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }

          }
        `}
        render={data => <Img className={this.props.className} fluid={data[src].childImageSharp.fluid} />}
      />
    );
  }
}

export default Image;
