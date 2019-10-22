import React from 'react'
import Layout from '../components/Layout'
import Popper from '../components/Popper'
import ScrollAnimation from 'react-animate-on-scroll'

const Terms = () => (
  <Layout>
  
  <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(../img/img_3290.jpg)`,
        backgroundPosition: `center center`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '55px',
        overflow: 'scroll',
      }}
    >
   
     <ScrollAnimation animateIn="bounceInUp"  delay={1000}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
//             fontSize: '4rem',
           position: 'relative',
//            top: '100px',
        left: '5%',
           backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            paddingLeft: '1rem',
            marginRight: '10%',
            
          }}
        >
          Precision Parts
        </h1>
        
        </ScrollAnimation>
<Popper />

<ScrollAnimation animateIn="bounceInDown"  delay={1000} style={{position: 'absolute', right:'0', color: '#fff',}}><h3>Major Obvious</h3>
</ScrollAnimation>
</div>


    <section className="outer section section--gradient">
      <div className="container" style={{padding: '2rem'}}>
      
    
        
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
    <br /><br />
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
    
    
    </div>
    </section>
  </Layout>
)

export default Terms
