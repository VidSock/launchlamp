import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}><Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} /></ScrollAnimation>
    )
  }

  if (!!childImageSharp) {
    return <ScrollAnimation animateIn="fadeIn" animateOnce={true}><Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} /></ScrollAnimation>
  }

  if (!!image && typeof image === 'string')
    return <ScrollAnimation animateIn="fadeIn" animateOnce={true}><img style={imageStyle} src={image} alt={alt} /></ScrollAnimation>

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
