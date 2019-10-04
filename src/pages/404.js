import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="content" style={{padding: '2rem 2rem 0 2rem', height: '100%'}}>
          <h1>Uh Oh...</h1>
          <p style={{textAlign: 'left', padding: '0 2rem'}}>It seems that we have misplaced the page that you are looking for.</p> <br /><br />
          
          <div className="container" style={{padding: '0 3rem', fontSize: '90%',}}><p>We apologize for any confusion -- note: this event had been recorded so that we may fix it for future visits.</p>
          <p>If you continue to have trouble, we would love for you to contact us with the form below:</p>
          </div>
          
        </div>
  </Layout>
)

export default NotFoundPage
