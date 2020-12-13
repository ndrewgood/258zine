import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss'

import pics from '../images/hs.png'


const color = "black";

const Logo = (props) => (
  <svg className="logo" width="148" height="73" viewBox="0 0 148 73" fill={props.textColor} xmlns="http://www.w3.org/2000/svg">
    <path d="M73.1402 72.9555C31.6482 71.9777 -0.476759 55.2033 0.00432591 34.7531C0.485411 14.3028 33.3655 -0.933201 74.8583 0.0445257C116.351 1.02225 148.475 17.7967 147.994 38.2391C147.513 58.6816 114.632 73.9332 73.1402 72.9555ZM74.7459 4.80118C37.2205 3.91717 5.16662 17.6866 4.76207 34.8671C4.35752 52.0476 35.7311 67.3148 73.2526 68.1988C110.774 69.0828 142.832 55.308 143.236 38.1275C143.641 20.947 112.271 5.6852 74.7459 4.80118Z" fill={props.textColor}/>
    <path d="M53.8995 25.9246C53.7878 30.6516 50.6435 34.379 43.1219 37.1208C37.1864 39.3379 36.0525 40.2844 35.4167 41.7525L50.6006 42.1102L48.6747 49.2948L22.4649 48.6778C24.1495 40.1032 28.088 36.1587 35.8978 32.8678C41.328 30.5399 44.5667 29.0881 44.6269 26.4056C44.662 24.9219 43.8021 23.9762 42.1277 23.9371C40.0909 23.8887 38.529 25.3342 37.8151 28.1916L28.4605 27.9714C30.2951 20.8751 35.5792 17.0157 42.8978 17.1883C50.1625 17.3593 54.0166 20.925 53.8995 25.9246Z" fill={props.textColor}/>
    <path d="M65.8571 25.6974L64.0733 30.4298H64.1639C65.9012 29.3164 67.9337 28.7523 69.9963 28.8109C75.4632 28.939 78.7581 32.5828 78.6316 37.9549C78.5035 43.373 73.2842 50.6099 63.1846 50.3717C56.1026 50.2054 51.8603 47.1933 51.9822 42.0938C51.9934 41.4556 52.072 40.8203 52.2165 40.1985L61.4258 40.4187C61.3282 40.6975 61.3227 40.9255 61.3157 41.2067C61.279 42.7795 62.5114 43.7361 64.4107 43.7838C67.7846 43.8618 69.3364 40.9341 69.3957 38.4344C69.4457 36.3063 68.2711 35.1615 66.3257 35.1154C64.4716 35.0717 63.0065 36.2462 62.2771 37.8487L53.5379 37.0857L60.4199 18.3433L82.1843 18.8564L80.2131 26.0332L65.8571 25.6974Z" fill={props.textColor}/>
    <path d="M75.8474 49.9352L96.3521 17.4289L103.435 17.5952L82.9301 50.1023L75.8474 49.9352Z" fill={props.textColor}/>
    <path d="M125.257 27.6059C125.179 31.0327 122.545 34.5898 117.562 35.3543V35.4457C120.367 36.4851 122.024 39.0708 121.947 42.3078C121.846 46.617 117.599 51.6563 107.925 51.4283C100.325 51.2494 96.0538 47.8641 96.1889 42.2133C96.2771 38.4648 99.2347 34.5523 104.818 33.8479V33.7566C102.241 32.6312 100.861 30.3712 100.927 27.5442C101.023 23.4717 105.584 18.6674 114.156 18.8689C121.193 19.0329 125.379 22.4237 125.257 27.6059ZM105.317 41.8252C105.274 43.6338 106.501 44.8185 108.675 44.8708C111.403 44.9356 113.212 43.0317 113.259 41.0442C113.303 39.1903 112.074 38.097 109.854 38.0447C106.666 37.9642 105.357 40.2524 105.317 41.8252ZM109.056 28.8078C109.014 30.5633 110.144 31.6543 112.28 31.7043C114.917 31.7667 116.533 30.0026 116.576 28.2401C116.619 26.4775 115.487 25.3857 113.405 25.3365C110.531 25.267 109.094 27.1795 109.056 28.8078Z" fill={props.textColor}/>
  </svg>

)

const HollowPage = () => (
  <Layout>
    <SEO title="(25/8) Hollow Sinatra" />
    <div className="artistpage-nav">
      <Link className="artistpage-back" to="/" style={{color: color}}>Back</Link>
      {/* <Link to="/"><Logo textColor={color}/></Link> */}
      <Link to="/hollow-sinatra" style={{color: color, fontWeight: "600"}}>Hollow Sinatra</Link>
      <Link to="/kat-sours" style={{color: color}}>Kat Sours</Link>
      <Link to="/william-alan-harris" style={{color: color}}>William Alan Harris</Link>
      <Link to="/ben-krueger" style={{color: color}}>Ben Krueger</Link>
      <Link to="/romulus-wolf" style={{color: color}}>Romulus Wolf</Link>
      <Link to="/joseph-olusola-edgar" style={{color: color}}>Joseph Olusola Edgar</Link>
    </div>
    <div className="artistpage-container">
      <div className="artistpage-imagecontainer">
        <img src={pics} alt="" srcset="" className="aristpage-image"/>
      </div>
      <h1 className="hs-font">HOLLOW<br/>SINATRA</h1>
      <p className="artistpage-title">Musician</p>
      <p className="artistpage-body">Hollow Sinatra is an independent, self-taught creator. From instruments to lyrics, Sinatra does it all. At 16 he debuted his first EP tinged with contemporary hip-hop and trap influences. Since then, Sinatra’s sound has matured through “keeping that childlike mentality,” blending genres new and old, and pulling from a pool of well-developed influences.</p>
      <p className="artistpage-cs">Full write-up in 25/8 Zine Issue 01...</p>
      <Link className="artistpage-buy" to="/buy">BUY HERE</Link>
    </div>
  </Layout>
)

export default HollowPage
