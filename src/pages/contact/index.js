import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <section className="outer section">
          <div className="container">
            <div className="content">

              <h1>Contact Us</h1>

              

              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="file-upload" />
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

                <div className="form">
                <div className="field half first">
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                      placeholder="Name"
                    />
                
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="Email"
                    />
                    <input
                        className="file-input"
                        type="file"
                        name="attachment"
                        onChange={this.handleAttachment}
                      />
                </div>

                <div className="field half right">

                    <textarea
                      className="textarea"
                      name={'message'}
                      onChange={this.handleChange}
                      id={'message'}
                      required={true}
                      placeholder="Message"
                    />

                      
                  </div>
                  </div>
                
                <div className="actionable"><input type="submit" value="Send Message" className="special" /></div>
              </form>
              
            </div>
          </div>
        </section>      
      </Layout>
    )
  }
}
