import React from 'react'
import { navigate } from 'gatsby-link'
import ScrollAnimation from 'react-animate-on-scroll'
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
      
      <ScrollAnimation animateIn="fadeIn" duration={2}  animatePreScroll={false} initiallyVisible={true}>
        <section className="outer section">
          <div className="container" style={{padding: '5px 0 10px 0', textAlign: 'center',}}>
          
            <div className="content" style={{padding: '0 40px 0 20px', textAlign: 'left',}}>

              

              

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

<h3 style={{textAlign: 'center', fontSize: '1.5rem', padding: '.3rem 0 .5rem 0',}}>Get the Hytron newsletter:</h3>

<label htmlFor="email" style={{padding: '.6rem', margin: '1rem 0 1rem 1rem', textAlign: 'left', fontSize: '90%', }}>Your e-mail:</label>

                <div className="form" style={{lineHeight: '1rem', height: 'auto', alignItems: '', display: 'flex', flexShrink: '1', paddingTop: '.2rem',}}>
                
                
                
                    <input
                      className="input font"
                      type={'email'}
                      name={'email'}
                      onChange={this.handleChange}
                      id={'email'}
                      required={true}
                      placeholder="Email"
                      style={{margin: '0 1rem 0 0', width: '75%',}}
                    />

                <input type="submit" value="Sign Up" className="special" style={{width: '50%', height: '100%', margin: '5px', padding: '1rem 0', verticalAlign: 'center',}} /> <FaEnvelope style={{position: 'relative', top: '10px', left: '-30px', color: '#fff', fontSize: '150%',}} />
                
                </div>
                <div className="font" style={{fontSize: '80%', padding: '5px 3%', textAlign: 'center',}}> <input type="checkbox" name={'consent'} required={true} /> Yes, I would like to receive communications by email. <br /><span style={{textAlign: 'center',}}><a href="/privacy">View our privacy policy </a></span></div>
              </form>
              
            </div>
          </div>
        </section>      
      </ScrollAnimation>
    )
  }
}