import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import Features from '../components/Features'


export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div className="outer content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <div
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#666',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
  
          
        
              <Features gridItems={intro.blurbs} />

        </div>

    </section>
  </div>
)

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  
}

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ProductPage


