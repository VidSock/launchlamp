import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
 import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'




export const ExamplePageTemplate = ({
  image,
  title,
  heading,
  subheading,
  image2,
//   mainpitch,
//   description,
//   intro,
}) => (
  <div className="outer intro">
    <div
      className="partial-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '350px',
          lineHeight: '1',
//           justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-mobile"
          style={{
/*
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
*/
//             backgroundColor: 'rgb(255, 68, 0)',
			textShadow: '0px 1px 4px black',
            color: 'white',
            lineHeight: '1',
            padding: '2rem 0 0 3rem',
            fontSize: '300%',
          }}
        >
          {heading}
        </h1>
        <h3
          className="has-mobile"
          style={{
/*
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
*/
//             backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '.25rem 2rem',
            position: 'absolute',
            top: '30%',
            left: '2%',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    
    
    <div
      className="partial-width-image"
      style={{
        backgroundImage: `url(${
          !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top center`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '70vh',
      }}
    >Booya
    </div>
       
    <div className="container"><Gallery1 /></div>
  </div>
  

)

ExamplePageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  image2: PropTypes.object,
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

      }
    }
  }
`
