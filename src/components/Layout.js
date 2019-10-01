import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import { Link } from 'gatsby'
import Contact from '../components/Contact'
import 'typeface-francois-one';
import "../css/index.scss";
import ScrollAnimation from 'react-animate-on-scroll';
// import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const TemplateWrapper = ({ children }) => {
  



  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      
      <Navbar />
      
	  <div id="left"></div>
     <div id="right"></div>
      <main>{children}</main>
      
      
     <Contact />
      <ScrollAnimation animateIn="fadeIn">
      <Footer />
      </ScrollAnimation>
    </div>
  )
}

export default TemplateWrapper





