import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
import PopMedical from '../components/PopMedical'
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
        backgroundPosition: `center center`,
        width: '100%',
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '55px',
        position: 'relative',
        overflowX: 'scroll',
      }}
    >
    
    
    

    
    
    
 <ScrollAnimation animateIn="bounceInDown"  delay={1000} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
//            top: '100px',
        left: '5%',
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
//             fontSize: '4rem',
           position: 'relative',
//            top: '100px',
        left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subheading}
        </h2>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="bounceInLeft"  delay={1000} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h2
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
//             fontSize: '4rem',
           position: 'relative',
//            top: '100px',
        left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {subsubheading}
        </h2>
        </ScrollAnimation>
        
        
        
        
        <label className="btn txtshadow shadow" htmlFor="medtoggle" style={{
	position:'relative',
	top:'200px',
	left:'30%',
	width:'auto',
    margin: '0 auto',     
    color: '#fff',  
    padding:'.8rem 2rem',   
    lineHeight: '20px',    
    background: '#DB2600',
    fontWeight:'bold',
    borderRadius: '3px',  
    cursor: 'pointer',
    textAlign: 'center', 
    transition: 'background 0.3s ease-in',
        }} >Learn More</label>
        
       <PopMedical /> 
       
    </div>
    
    

<ScrollAnimation animateIn="bounceInLeft" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</div>
</div>
</ScrollAnimation>

<ScrollAnimation animateIn="bounceInRight" animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="container">
<div className="content" style={{padding:'1rem 1rem',}}>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</div>
</div>
</ScrollAnimation>

    
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
           backgroundColor: '#ff0000',
            border: '0px solid red',
            float: 'none',
            width: '90vw',
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
            fontSize: '1.6rem',
           position: 'relative',
//            top: '60%',
//         right: '5%',
//         left: '15%',
        margin: '2rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
            width: '100vw',
            
          }}
        >
          {i2Subheading}
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
        margin: '2rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
            width: '100vw',
            
          }}
        >
          {i2Subsubheading}
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
        margin: '2rem auto',
//            backgroundColor: '#ff0000',
            textAlign: 'center',
            border: '0px solid red',
            width: '100vw',
            
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
    <ScrollAnimation animateIn="bounceInDown"  delay={1000} animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={true}>
        <h1
          className="normal txtshadow-header mobile-txt"
          style={{
            color: '#fff',
            fontSize: '3rem',
           position: 'relative',
//            top: '100px',
        left: '5%',
//            backgroundColor: '#ff0000',
            textAlign: 'left',
            border: '0px solid red',
            float: 'none',
            
          }}
        >
          {i3Heading}
          {i3Subheading}
        {i3Subsubheading}
        {i3Subsubheading2}
        </h1>
        </ScrollAnimation>
        
        
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
