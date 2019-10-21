import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import PopNewsletter from '../components/PopNewsletter'
import Layout from '../components/Layout'
import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  
  <div className="outer intro">
  
  
  
    <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom left`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '80px',
      }}
    >
    
    <div style={{
          lineHeight: '1',
/*
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
*/
          padding: '0',
          position: 'relative',
          width: '100%',
          height: '100vh',
          
         

        }}
        className="media"
      >
      
        <ScrollAnimation animateIn="bounceInLeft"  delay={1000}>
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
          Precision Parts
        </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInRight" delay={1000}>
        <h3
          className="narrow txtshadow mobile-txt"
          style={{
//            fontSize:'2.7rem',
           color: 'white',
           position: 'relative',
        left: '5%',
            textAlign: 'left', 
            paddingTop: '1rem',
            border: '0px solid red',
          }}
        >
          Quality Manufacturing
        </h3>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="bounceInUp" delay={1000}>
        <h3
          className="black txtshadow mobile-txt"
          style={{
//            fontSize:'2.2rem',
           color: 'white',
           position: 'relative',
		   paddingTop: '1rem',
        left: '5%',
            textAlign: 'left', 
           border: '0px solid red',
          }}
        >
          Done right AND on time
        </h3>
        </ScrollAnimation>
        
        
        
        <ScrollAnimation animateIn="fadeIn" duration={2} delay={1000} animateOnce={false} className="mediacta" style={{position: 'absolute', right: '0',}}>
        <br /><br />
		<PopNewsletter />
        </ScrollAnimation>
        
        
  
        
        
        
        </div>
        
        <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position:'relative', width: '100%', textAlign: 'center', bottom:'100px', fontSize: '80%', color: '#fff', zIndex: '0',}}>
        <div className="scrolldown txtshadow-header">SCROLL <IoIosArrowDropdownCircle /> MORE</div></ScrollAnimation>
        
      </div>
      
      
      
      
      
    
    
    <section className="section section--gradient">
      <div className="container">
     
                <Features gridItems={intro.blurbs} />

      </div>
    </section>
    
    
                      
                    
                 
                 
                
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1800, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 540, quality: 44) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`