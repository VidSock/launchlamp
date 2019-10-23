import React from 'react'
import PropTypes from 'prop-types'
import { ExamplePageTemplate } from '../../templates/example-page'

const ExamplePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ExamplePageTemplate
        image={data.image}
        image2={data.image2}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
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
