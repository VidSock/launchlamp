import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'


export const CapabilitiesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content


  return (
    <section className="section">
      <div className="container" style={{
          boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          backgroundColor: '#f40',
          color: 'white',
          padding: '0 1rem',
        }}>
 
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              
              
  

   
      </div>
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

export const CapabilitiesPageQuery = graphql`
  query CapabilitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
