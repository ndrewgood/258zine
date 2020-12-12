import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss'

const JosephPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Link to="/">Back Home</Link>
      <h1>Joseph Olusola Edgar</h1>
    </div>
  </Layout>
)

export default JosephPage
