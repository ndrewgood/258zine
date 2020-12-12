import React, {useState} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scene from "../components/scene"

import '../styles/main.scss'

const SvgArrow = (props) => (
  <svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 18L76 18" stroke={props.color} strokeWidth="2"/>
    <path d="M59 35L76 18L59 0.999997" stroke={props.color} strokeWidth="2"/>
  </svg>

)

const defaultBg = "linear-gradient(56deg, rgba(255,255,255,1) 0%, rgba(204,204,204,1) 100%)"
const defaultTextStyle = "black"

const joeTextStyle = "#000000"

const rwTextStyle = "#ff530f"

const bkTextStyle = "#FFEB4B"

const wahTextStyle = "#FFFFFF"

const ksTextStyle = "#60AA55"

const hsTextStyle = "#ee1a21"

const IndexPage = () => {
  const [bgHover, setBgHover] = useState(defaultBg);
  const [textHover, setTextHover] = useState(defaultTextStyle);

  const textStyle = {
    WebkitTextStroke: "1.5px " + textHover
  };

return (
  <Layout bgColor="red">
    <SEO title="25/8 Zine" />
    <div className="background" style={{background: bgHover, transition: ".2s"}}>
      <div className="container home-container">
        <Link className="aboutLink" style={{color: textHover}} to="/about">About</Link>
          <div className="artist-container">
            <Link 
              style={textStyle}
              className="joe"
              onMouseEnter={() => {setBgHover("#345536"); setTextHover(joeTextStyle); }} 
              onMouseLeave={() => {setBgHover(defaultBg); setTextHover(defaultTextStyle);}} 
              to="/joseph-olusola-edgar">
              Joseph Olusola Edgar
            </Link>
            <Link 
              style={textStyle}
              className="rw" 
              onMouseEnter={() => {setBgHover("#EDEDED"); setTextHover(rwTextStyle); }} 
              onMouseLeave={() => {setBgHover(defaultBg); setTextHover(defaultTextStyle);}} 
              to="/romulus-wolf">
              Romulus Wolf
            </Link>
            <Link 
              style={textStyle}
              className="bk" 
              onMouseEnter={() => {setBgHover("#D7DDD3"); setTextHover(bkTextStyle);}} 
              onMouseLeave={() => {setBgHover(defaultBg); setTextHover(defaultTextStyle);}} 
              to="/ben-krueger">
              Ben Krueger
            </Link>
            <Link 
              style={textStyle}
              className="wah" 
              onMouseEnter={() => {setBgHover("#DA3832"); setTextHover(wahTextStyle);}} 
              onMouseLeave={() => {setBgHover(defaultBg); setTextHover(defaultTextStyle);}} 
              to="/william-alan-harris">
              William Alan Harris
            </Link>
            <Link 
              style={textStyle}
              className="ks" 
              onMouseEnter={() => {setBgHover("#FD8A91"); setTextHover(ksTextStyle);}} 
              onMouseLeave={() => {setBgHover(defaultBg); setTextHover(defaultTextStyle);}} 
              to="/kat-sours">
              Kat Sours
            </Link>
            <Link 
              style={textStyle}
              className="hs" 
              onMouseEnter={() => {setBgHover("#000000"); setTextHover(hsTextStyle);}} 
              onMouseLeave={() => {setBgHover(defaultBg); setTextHover(defaultTextStyle);}} 
              to="/hollow-sinatra">
              Hollow Sinatra
            </Link>
          </div>
          <Link style={{border: "1.5px solid " + textHover}} to="/buy" className="button-container">
            <p style={{color: textHover}}>BUY THE ZINE</p>
            <SvgArrow color={textHover} />
          </Link>
        </div>
        <Link style={{border: "1.5px solid " + textHover}} to="/buy" className="button-container button-mobile">
            <p style={{color: textHover}}>BUY THE ZINE</p>
            <SvgArrow color={textHover} />
          </Link>
      <Scene/>
      </div>
    </Layout>
  )
}

export default IndexPage
