import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        image2={data.image2}
        i2Heading={data.i2Heading}
        i2Subheading={data.i2Subheading}
        i2Subsubheading={data.i2Subsubheading}
        i2Subsubheading2={data.i2Subsubheading2}
        image3={data.image3}
        i3Heading={data.i3Heading}
        i3Subheading={data.i3Subheading}
        i3Subsubheading={data.i3Subsubheading}
        i3Subsubheading2={data.i3Subsubheading2}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
