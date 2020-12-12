import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss'

import logo258 from '../images/258logo.svg';


const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="back-button">
      <Link to="/">Back</Link>
    </div>
    <div className="center-container">
      <img src={logo258} alt="258 Logo" className="logo258"/>
      <p className="aboutPara">A zine created to give voice to artists, designed from the idea that creativity is a continuously evolving pursuit that transcends the 24/7. Issue 1 features six artists, each from a unique creative discipline. Created in Savannah, GA.</p>
      <div className="teamItem">
        <p className="title">Creative Direction, Graphic Design, Editor</p>
        <a href="https://www.instagram.com/isaac.grothe" target="_blank" className="name">Isaac Grothe (@isaac.grothe)</a>
      </div>
      <div className="teamItem">
        <p className="title">Photography</p>
        <a href="https://www.instagram.com/nickthomsen" target="_blank" className="name">Nick Thomsen (@nickthomsen)</a>
      </div>
      <div className="teamItem">
        <p className="title">Photo Assistance</p>
        <a href="https://www.instagram.com/andrewdiixon" target="_blank" className="name">Andrew Dixon (@andrewdiixon)</a>
        <a href="https://www.instagram.com/benleahyy" target="_blank" className="name">Ben Leahy (@benleahyy)</a>
      </div>
      <div className="teamItem">
        <p className="title">Styling</p>
        <a href="https://www.instagram.com/danielatguevara" target="_blank" className="name">Daniela Guevara (@danielatguevara)</a>
      </div>
      <div className="teamItem">
        <p className="title">Set Design</p>
        <a href="https://www.instagram.com/daphnecolson" target="_blank" className="name">Daphne Colson (@daphnecolson)</a>
      </div>
      <div className="teamItem">
        <p className="title">Set Design Assistant</p>
        <a href="https://www.instagram.com/the.laila99" target="_blank" className="name">Laila Ibrahim (@the.laila99)</a>
      </div>
      <div className="teamItem">
        <p className="title">Writing</p>
        <a href="https://www.instagram.com/danielatguevara" target="_blank" className="name">Daniela Guevara (@danielatguevara)</a>
        <a href="https://www.instagram.com/leilaascott" target="_blank" className="name">Leila Scott (@leilaascott)</a>
      </div>
      <div className="teamItem">
        <p className="title">Website</p>
        <a href="https://www.instagram.com/ndrewgood" target="_blank" className="name">Andrew Goodridge (@ndrewgood)</a>
      </div>
    </div>
  </Layout>
)

export default AboutPage
