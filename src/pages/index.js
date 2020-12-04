import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scene from "../components/scene"

import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Link to="/buy">Buy the shit</Link>
    </div>
    <Scene />
  </Layout>
)

export default IndexPage
