import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import Popper from '../components/Popper'
import styled from "styled-components"

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
//   border:20px solid red !important;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 300%;
    left: -100%;
  }
}

@media (max-width: 767px) {
  .fullscreen-bg {
    background: url('../img/videoframe.jpg') center center / cover no-repeat;
  }

  .fullscreen-bg__video {
    display: none;
  }
}

`

export const ExamplePageTemplate = ({
  image,
  title,
  heading,
  subheading,
  image2,
  i2Heading,
  i2Subheading,
}) => (
	
	<CustomBox>
  <div className="outer intro">
    <div
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center center`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '55px',
        position: 'relative',
        overflowX: 'scroll',
      }}
    >
    
    
    

    
    
    
 <ScrollAnimation animateIn="bounceInDown"  delay={1000}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
//            top: '100px',
        left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {heading}
        </h1>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft"  delay={1000}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
//             fontSize: '4rem',
           position: 'relative',
//            top: '100px',
        left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subheading}
        </h2>
        </ScrollAnimation>
        
        <Popper />
    </div>
    
    


    
        <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2
        })`,
        backgroundPosition: `bottom center`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height: '100vh',
        paddingTop: '55px',
        overflowX:  'hidden',
      }}
    >
    

     <ScrollAnimation animateIn="bounceInDown">
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
           top: '20%',
//         right: '5%',
//         left: '5%',
        margin: '0 auto',
        padding: '0 1rem',
           backgroundColor: '#ff0000',
            border: '0px solid red',
            float: 'none',
            width: '90vw',
            textAlign: 'right',
            
          }}
        >
          {i2Heading}
        </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="fadeIn">
        <div style={{position: 'absolute', top: '-25px', right: '-25px', width: '50px', height: '50px', display:'block', backgroundColor: '#ff0000', transform:'rotate(40deg)',}}></div>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft">
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '2rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
            width: '100vw',
            
          }}
        >
          {i2Subheading}
        </h2>
        </ScrollAnimation>
        
        
        
        


    </div>
    
    




    <div className="fullscreen-bg" style={{display:'none',}}>
    <video loop muted autoPlay poster="../img/10K_Feet.jpg" className="fullscreen-bg__video">
        <source src="../img/10K_Feet.webm" type="video/webm" />
        <source src="../img/10K_Feet.mp4" type="video/mp4" />
        <source src="../img/10K_Feet.ogv" type="video/ogg" />
    </video>
</div>
       
    <div className="container" style={{display:'none',}}></div>
  </div>
  </CustomBox>
  

)

ExamplePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i2Heading: PropTypes.string,
  i2Subheading: PropTypes.string,
}



const ExamplePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
	  
	  
	  
    <Layout>
      <ExamplePageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        image2={frontmatter.image2}
        i2Heading={frontmatter.i2Heading}
        i2Subheading={frontmatter.i2Subheading}
      />
    </Layout>
  )
}

ExamplePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ExamplePage

export const pageQuery = graphql`
  query ExamplePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "example-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        image2 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i2Heading
		i2Subheading
      }
    }
  }
`
