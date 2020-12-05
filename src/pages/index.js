import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scene from "../components/scene"

import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container home-container">
      <Link to="/buy">Buy the shit</Link>
      <Link to="/joey-olusola-edgar">Joey Olusola Edgar</Link>
      <Link to="/romulus-wolf">Romulus Wolf</Link>
      <Link to="/ben-krueger">Ben Krueger</Link>
      <Link to="/william-harris">William Harris</Link>
      <Link to="/kat-sours">Kat Sours</Link>
      <Link to="/hollow-sinatra">Hollow Sinatra</Link>
    </div>
    <Scene />
  </Layout>
)

export default IndexPage
