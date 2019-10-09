import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosAperture } from 'react-icons/io'

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
        backgroundPosition: `bottom right`,
        width: '100%',
        backgroundSize: 'cover',
        height: '90vh',
        
      }}
    >
    
    <div style={{
          display: 'block',
          lineHeight: '1',
          flexDirection: 'column',
          padding: '2rem 0',
        }}
        className="media"
      >
      
        <ScrollAnimation animateIn="bounceInDown" delay={100}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '5rem',
           position: 'relative',
//            top: '100px',
           right: '3%',
//            backgroundColor: '#ff0000',
            textAlign: 'right',  
          }}
        >
          Follow me
        </h1>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInRight">
        <h3
          className="narrow txtshadow mobile-txt"
          style={{
           fontSize:'3rem',
           color: 'white',
           position: 'relative',
        right: '5%',
            textAlign: 'right', 
          }}
        >
          into the
        </h3>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="bounceInUp">
        <h3
          className="black txtshadow-3d mobile-txt"
          style={{
           fontSize:'7rem',
           color: 'white',
           position: 'relative',
//            top: '230px',
           right: '3%',
            textAlign: 'right', 
          }}
        >
          Night
        </h3>
        </ScrollAnimation>
        
        
        
        <ScrollAnimation animateIn="fadeIn" delay={1000} animateOnce={false}>
        <a href="#contact">
        <button style={{
           position: 'absolute',
           margin: '0 auto',
		   top: '60vh',
           right: '3%',
           color: 'white',
           background: '#1257a2',
           padding: '.5rem 1rem .5rem 3rem',
           borderRadius: '8px',
           fontSize: '170%',
//            textTransform: 'uppercase',
           cursor: 'pointer',
           animation: 'fadeIn 3s',
          }}>
          <IoIosAperture style={{position:'absolute', left:'5%', top:'8px', fontSize: '110%',}} />Contact Todd</button></a>
        </ScrollAnimation>
        
        
        
        
        
        </div>
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