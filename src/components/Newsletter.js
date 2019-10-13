import React from 'react'
import { navigate } from 'gatsby-link'
import ScrollAnimation from 'react-animate-on-scroll'

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

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
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
      
      <ScrollAnimation animateIn="bounceInUp" duration={3}  animatePreScroll={false} initiallyVisible={true}>
        <section className="outer section">
        
          <div className="container" style={{padding: '5px 0 10px 0', textAlign: 'center',}}>
          
            <div className="content" style={{padding: '0 40px 0 20px'}}>

              

              

              <form
                name="newsletter"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                id="popnewsletter-form"
              >
                
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                
                <div hidden>
                  <label>
                    Don’t fill this out:{' '}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>

                <div className="form" style={{lineHeight: '1rem', height: 'auto', alignItems: 'center', display: 'flex', paddingTop: '0',}}>
                
                <label htmlFor="email" style={{padding: '0', margin: '0 1rem 0 0', width: '33%', }}>Your e-mail:</label>
                    <input
                      className="input"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="Email"
                      style={{margin: '0 1rem 0 0',}}
                    />

                <input type="submit" value="Sign Up" className="special" style={{width: '50%', height: '100%', margin: '5px', padding: '1rem 0', verticalAlign: 'center',}} />
                
                </div>
              </form>
              
            </div>
          </div>
        </section>      
      </ScrollAnimation>
    )
  }
}