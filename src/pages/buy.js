import React from "react"
import { Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from '../components/cart'

import '../styles/main.scss'

import zineImage from '../images/zine-image.png'

const BuyPage = () => {

    return (
      <Layout>
          <SEO title="(25/8) BUY BUY BUY" />
          <div className="back-button">
            <Link to="/">Back</Link>
          </div>
          <div className="buy-container">   
            <div className="buy-display">
                <img className="buy-image" src={zineImage} alt=""/>
                <p className="buy-title">25/8 Issue 01</p>
                <p className="buy-price">$22</p>
                <p className="buy-ship">Shipping Early Jan 2021</p>
            </div>       
          {typeof document !== 'undefined' ? <Cart /> : null}

          
          </div>
      </Layout>
      )
}



export default BuyPage
