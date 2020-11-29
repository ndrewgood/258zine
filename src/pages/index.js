import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Scene from "../components/scene"

import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Scene />
  </Layout>
)

export default IndexPage
