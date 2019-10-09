import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="content" style={{padding: '2rem 13% 0 13%', height: '100%'}}>
          <h1 style={{margin: '0 0 0 7%',}}>Uh Oh...</h1>
          <div className="container" style={{padding: '2rem', fontSize: '90%',}}>
          
          <p style={{textAlign: 'center', padding: '0'}}>It seems that we have misplaced the page that you are looking for</p>
          
          <p>This event had been recorded so that we may fix it for future visits. If you continue to have trouble, we would love for you to contact us with the form below:</p>
          </div>
          
        </div>
  </Layout>
)

export default NotFoundPage
