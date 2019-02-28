import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import BackgroundImage from "../components/backgroundImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <div className="img-container">
      <div>
        <h3>Gatsby Image</h3>
        <Image src="sampleImage" className="image"/>
      </div>
      <div>
        <h3>Gatsby Background Image</h3>
        <BackgroundImage src="sampleBG" className="backgroundImage" />
      </div>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
