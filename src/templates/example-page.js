import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import Popper from '../components/Popper'


export const ExamplePageTemplate = ({
  image,
  title,
  heading,
  subheading,
  image2,
  i2Heading,
  i2Subheading,
}) => (
	
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
      }}
    >
    
    
    

    
    
    
 <ScrollAnimation animateIn="bounceInDown"  delay={1000}>
        <h1
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
        
        
        
        <ScrollAnimation  animateIn="fadeIn" animateOut="zoomOut slower" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position: 'relative', top: '40%', left: '8%',}}>
<Popper />
</ScrollAnimation>


    </div>
       
    <div className="container"></div>
  </div>
  

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
