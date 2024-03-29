import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import ScrollAnimation from 'react-animate-on-scroll';


export const CapabilitiesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content


  return (
    <section className="outer intro section">
    
    <ScrollAnimation animateIn="moveRight" animateOnce={true} delay={1400}>
      <div className="container">
              <h2 className="h2">
                {title}
              </h2>
              <PageContent className="content" content={content} />
       </div>
       </ScrollAnimation>
       
       <ScrollAnimation animateIn="moveLeft" animateOnce={true}>
       <div className="container">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                BooyA!
              </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
       </div>
       </ScrollAnimation>
       
    </section>
  )
}

CapabilitiesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const CapabilitiesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CapabilitiesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

CapabilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CapabilitiesPage

export const capabilitiesPageQuery = graphql`
  query CapabilitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
