import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from '../components/cart'

import '../styles/main.scss'

const BuyPage = () => {

    return (
      <Layout>
          <SEO title="Buy" />
          <div className="container">
          <Link to="/" className="black">Back home</Link>
          
          {typeof document !== 'undefined' ? <Cart /> : null}

          
          </div>
      </Layout>
      )
}



export default BuyPage
