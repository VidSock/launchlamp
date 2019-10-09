import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
 import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'




export const ExamplePageTemplate = ({
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
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
//             backgroundColor: 'rgb(255, 68, 0)',
			textShadow: '0px 1px 4px black',
            color: 'white',
            lineHeight: '1',
            padding: '2rem 0 0 3rem',
            fontSize: '300%',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-mobile"
          style={{
            boxShadow:
              'rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px',
            backgroundColor: 'rgb(255, 68, 0)',
            color: 'white',
            lineHeight: '1',
            padding: '.25rem 2rem',
            position: 'absolute',
            bottom: '30%',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h2 className="title">{mainpitch.title}</h2>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="">
                  <div className="columnz">
                    <h3>
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                
               
                 
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div className="container"><Gallery1 /></div>
  </div>
  

)

ExamplePageTemplate.propTypes = {
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



const ExamplePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
	  
	  
	  
    <Layout>
      <ExamplePageTemplate
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
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid_withWebp
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
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
