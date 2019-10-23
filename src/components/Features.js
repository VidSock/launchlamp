import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import ScrollAnimation from 'react-animate-on-scroll';

const FeatureGrid = ({ gridItems }) => (
	
  <ScrollAnimation animateIn="fadeIn"><div className="column is-multiline">
  
    {gridItems.map(item => (
	    
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered1">
            <div
              style={{
                minWidth: '100%',
                display: 'block',
                border: '0px solid',              
                
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
              <p style={{display: 'none',}}>{item.text}</p>
            </div>
          </div>
          
        </section>
      </div>
    ))}
  </div>
  
  </ScrollAnimation>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
