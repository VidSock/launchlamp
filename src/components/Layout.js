import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
// import Gallery1 from '../components/Gallery1'
import Navbar from '../components/Navbar'

import PopContact from '../components/PopContact'
import 'typeface-francois-one'
import "../css/index.scss"
import Consent from '../components/Consent'

// import splash from '../img/hytron-splash.png'



// import ScrollAnimation from 'react-animate-on-scroll'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}





    
    
const TemplateWrapper = ({ children }) => {
  



  const { title, description } = useSiteMetadata()
  return (
    <><div id="topofpage" name="topofpage"></div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
<link href="{splash}" sizes="2048x2732" rel="apple-touch-startup-image" />
<link href="{splash}" sizes="1668x2224" rel="apple-touch-startup-image" />
<link href="{splash}" sizes="1536x2048" rel="apple-touch-startup-image" />
<link href="{splash}" sizes="1125x2436" rel="apple-touch-startup-image" />
<link href="{splash}" sizes="1242x2208" rel="apple-touch-startup-image" />
<link href="{splash}" sizes="750x1334" rel="apple-touch-startup-image" />
<link href="{splash}" sizes="640x1136" rel="apple-touch-startup-image" />
      </Helmet>
      
      
      <Navbar />
      <PopContact />
  
      <main>{children}</main>

      <Consent />
    




      
      <Footer />
      </>
    
  )
}

export default TemplateWrapper





