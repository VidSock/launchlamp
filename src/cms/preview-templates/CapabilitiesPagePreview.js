import React from 'react'
import PropTypes from 'prop-types'
import { CapabilitiesPageTemplate } from '../../templates/capabilities-page'

const CapabilitiesPagePreview = ({ entry, widgetFor }) => (
  <CapabilitiesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

CapabilitiesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CapabilitiesPagePreview
