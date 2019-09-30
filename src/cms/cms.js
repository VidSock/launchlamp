import CMS from 'netlify-cms-app'
/*
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
*/

import CapabilitiesPagePreview from './preview-templates/CapabilitiesPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ExamplePagePreview from './preview-templates/ExamplePagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

/*
CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);
*/

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('example', ExamplePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('capabilities', CapabilitiesPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
