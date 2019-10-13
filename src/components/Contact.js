import React from 'react'
import { navigate } from 'gatsby-link'
import { FaEnvelope } from 'react-icons/fa';

// const Contact = class extends React.Component {
//   render() {
//     return (
     
//     )
//   }
// }

// export default Contact




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
      
        <section className="outer section">
          <div className="container innerpanel" style={{padding: '0',}}>
            <div className="content" style={{padding: '0 0 15px 0'}}>

              

              

              <form
                name="file-upload"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                id="popcontact-form"
              >
                <h3 id="contact" name="contact" style={{padding: '1rem 0 0 0', textAlign: 'center', fontSize: '150%',}}>Get a Quote<br /><span style={{fontSize: '80%',}}>Please fill out the form below:</span></h3>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                  <label htmlFor="form-name">upload</label><input type="hidden" name="form-name" value="file-upload" />
                </div>

                <div className="form">
                <div className="field half left">
                <label htmlFor="name" style={{padding: '0', margin: '0',}}>Your name:</label>
                    <input
                      className="input"
                      type={'text'}
                      name={'name'}
                      onChange={this.handleChange}
                      id={'name'}
                      required={true}
                      placeholder="Name"
                    />
                <label htmlFor="email" style={{padding: '0', margin: '0',}}>Your e-mail:</label>
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="Email"
                    />
                    
                    <label htmlFor="attachment" style={{padding: '0', margin: '0', float: 'left',}}>
                    Upload File:<br /> PDF file preferred
                    <input
                        className="file-input hidden"
                        type="file"
                        id="attachment"
                        name="attachment"
                        onChange={this.handleAttachment}
                      />
                      </label>
                      
<label className="upload" htmlFor="attachment" style={{background: '#666', color: '#fff', padding: '5px 25px', textAlign: 'center', borderRadius:'4px', marginLeft: '1rem',}}  >Select File</label>
                </div>

                <div className="field half right">
<label className="label" htmlFor={'message'} style={{padding: '0', margin: '0',}}>
                    Your Message
                  </label>
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
                
                <div className="actionable"><input type="submit" value="Send Message" className="special" /><FaEnvelope style={{position: 'relative', top: '3px', left: '-30px', color: '#fff', fontSize: '120%',}} /></div>
              </form>
              
            </div>
          </div>
        </section>      
      
    )
  }
}