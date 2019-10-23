import React from 'react'
import PropTypes from 'prop-types'
import { ExamplePageTemplate } from '../../templates/example-page'

const ExamplePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ExamplePageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        image2={data.image2}
        i2Heading={data.i2Heading}
        i2Subheading={data.i2Subheading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ExamplePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ExamplePagePreview
