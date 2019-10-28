import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
import PopSemi from '../components/PopSemi'
import styled from "styled-components"

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }

.fullscreen-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
//   border:20px solid red !important;
}

.fullscreen-bg__video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (min-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .fullscreen-bg__video {
    width: 300%;
    left: -100%;
  }
}

@media (max-width: 767px) {
  .fullscreen-bg {
    background: url('../img/videoframe.jpg') center center / cover no-repeat;
  }

  .fullscreen-bg__video {
    display: none;
  }
}

`





export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  subsubheading,
  
  image2,
  i2Heading,
  i2Subheading,
  i2Subsubheading,
  i2Subsubheading2,
  
  image3,
  i3Heading,
 i3Subheading,
  i3Subsubheading,
  i3Subsubheading2,
  
}) => (
	
	<CustomBox>
  <div className="outer intro">
    <div
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center left`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '55px',
        position: 'relative',
        overflowX: 'scroll',
      }}
    >
    
    <ScrollAnimation animateOut="fadeOut" initiallyVisible={true} animateOnce={true} animatePreScroll={true} style={{position:'absolute', width: '100%', textAlign: 'center', bottom:'14%', fontSize: '80%', color: '#fff', zIndex: '0',}}>
        <div className="scrolldown txtshadow-header">SCROLL <IoIosArrowDropdownCircle /> MORE</div></ScrollAnimation>
        
<ScrollAnimation animateIn="bounceInRight"  delay={1000} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true} style={{position:'absolute', right:'20%', top:'40%',}}>
<label style={{display:'flex', justifyContent:'center',}} htmlFor="modal-toggle">
<div className="special txtshadow" style={{padding:'.5rem 2rem', backgroundColor:'#DB2600', color:'#fff', borderRadius:'6px', cursor:'pointer',}}>Contact Us</div>
</label>
</ScrollAnimation>
    
    
    
 <ScrollAnimation animateIn="bounceInDown"  delay={1000} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3.5rem',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {heading}
        </h1>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft"  delay={1000} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
//            top: '100px',
//         left: '5%',
           backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subheading}
        </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInUp"  delay={1000} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '2rem',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subsubheading}
        </h2>
        </ScrollAnimation>
        
        
        
        
        
       
    </div>
    
    

<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<img src="" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} />
<h2>Contract Manufacturing</h2>
<p>Hytron is a contract manufacturing service provider. Through our outsourcing services, we have partnered with Fortune 500 companies for their component part manufacturing. This has resulted in a reduced time-to-market and cost savings for our Customers.</p>

<p>Our manufacturing capabilities range from prototype fabrication to close tolerance machining in production volumes to support your requirements.</p>
</div>
</div>
</ScrollAnimation>

<ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<img src="" width="220" height="220" style={{float: 'left', margin:'0 1rem 1rem 0',}} />
<h2>Lean Manufacturing</h2>
<p>Products you need –  at the desired volume – when you want them.</p>

<p>Our supply chain expertise in Build-to-Order  product assembly and our proprietary quoting, planning, quality inspection and supply chain management capability create cost effective fulfillment solutions. Let us show you how we can tailor a “Kanban” replenishment program to meet your needs and avoid supply chain disruptions</p>
</div>
</div>
</ScrollAnimation>

<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
<img src="" width="220" height="220" style={{float: 'right', margin:'0 0 1rem 1rem',}} />
<h2>The Hytron Difference</h2>
<p>With our best-in-class capabilities, high quality standards and supply chain tracking system we can deliver your products in the most cost effective way.</p>
<p>Let Hytron assist you with bringing your product to market.</p>
</div>
</div>
</ScrollAnimation>





<h2 style={{textAlign: 'center', margin: '1rem 0 2rem 0',}}>Some of the industries we serve:</h2>
    
        <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2
        })`,
        backgroundPosition: `bottom center`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height:'100vh',
        paddingTop: '55px',
        overflowX: 'scroll',
      }}
    >
    

     <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
           top: '20%',
//         right: '5%',
//         left: '5%',
        margin: '0 auto',
        padding: '0 1rem',
            backgroundImage: 'linear-gradient(#372d26 15.89%, #160e0e 80.13%)',
            border: '0px solid red',
            borderRadius: '8px',
            float: 'none',
//             width: '90vw',
            textAlign: 'right',
            
          }}
        >
          {i2Heading} 
        </h2>
        </ScrollAnimation>
        
        
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.4rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '1rem  auto 0 auto',
//            backgroundColor: '#ff0000',
            textAlign: 'right',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subheading}. We create custom plans for your processes. 
        </h2>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.4rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '1rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'right',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subsubheading} that are tailored to your business. 
        </h2>
        </ScrollAnimation>
        
        
        
         <ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '2rem auto 0 auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
//             width: '100vw',
            
          }}
        >
          {i2Subsubheading2}
        </h2>
        </ScrollAnimation>

        
        <PopSemi />

    </div>

    
    
    
    
    
    
    

    
    <div
      className="full-width-image margin-top-0"
      style={{display: 'block',
	      position: 'relative',
        backgroundImage: `url(${
          !!image3.childImageSharp ? image3.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `bottom center`,
        width: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'none',
        height:'100vh',
        paddingTop: '55px',
        overflowX: 'scroll',
      }}
    >
    <ScrollAnimation animateIn="bounceInDown" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
//            top: '100px',
//         left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {i3Heading}
        </h2>
        </ScrollAnimation>
        
        
        <ScrollAnimation animateIn="FadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
		   margin: '1rem 0 0 0',
            textAlign: 'left',
            border: '0px solid red',
          }}><FaAccessibleIcon />{i3Subheading} Wheel Chairs</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="FadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
		   margin: '1rem 0 0 0',
            textAlign: 'left',
            border: '0px solid red',
          }}><FaOdnoklassniki />{i3Subsubheading} Good Helmets</h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="FadeIn" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '1.6rem',
           position: 'relative',
		   margin: '1rem 0 0 0',
            textAlign: 'left',
            border: '0px solid red',
          }}><FaBlind />{i3Subsubheading2} Canes - keeping the blind upright</h2>
        </ScrollAnimation>
        
        

        
       <PopSemi />
       
       
    </div>
    
    
    
    
    
    
    <Contact />




    
       
    
  </div>
  </CustomBox>
  

)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  subsubheading: PropTypes.string,
  
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i2Heading: PropTypes.string,
  i2Subheading: PropTypes.string,
  i2Subsubheading: PropTypes.string,
  i2Subsubheading2: PropTypes.string,

  image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  i3Heading: PropTypes.string,
  i3Subheading: PropTypes.string,
  i3Subsubheading: PropTypes.string,
  i3Subsubheading2: PropTypes.string,
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
        subsubheading={frontmatter.subsubheading}

        image2={frontmatter.image2}
        i2Heading={frontmatter.i2Heading}
        i2Subheading={frontmatter.i2Subheading}
        i2Subsubheading={frontmatter.i2Subsubheading}
        i2Subsubheading2={frontmatter.i2Subsubheading2}

        image3={frontmatter.image3}
       i3Heading={frontmatter.i3Heading}
        i3Subheading={frontmatter.i3Subheading}
        i3Subsubheading={frontmatter.i3Subsubheading}
        i3Subsubheading2={frontmatter.i3Subsubheading2}
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
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        subsubheading
        image2 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i2Heading
		i2Subheading
		i2Subsubheading
		i2Subsubheading2
		
		 image3 {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 64) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
		i3Heading
		i3Subheading
		i3Subsubheading
		i3Subsubheading2
		
      }
    }
  }
`
