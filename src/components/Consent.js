import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
import CookieConsent from "react-cookie-consent";



const Consent = () => (


<CookieConsent
	debug={true}
	location="bottom"
	style={{ background: "#222", zIndex:'0', }}
	enableDeclineButton={false}
	declineButtonText="No Cookies"
    declineButtonStyle={{ color: "#fff", background: "#666", fontSize: "13px", }}
    
    buttonText="Accept"
	buttonStyle={{ color: "#fff", background: "#FF0000", fontSize: "13px", fontWeight:'bold', borderRadius:'5px', padding:'.5rem 1rem', }}

    expires={30}
    cookieName="Hytron.com-site-pref-cookie"
>

    <div style={{padding:'0 0 0 1rem', fontSize:'90%',}}> We use cookies to optimize our website.{" "}<br />
    <span style={{ fontSize: "80%" }}>
   <a href="/privacy/" style={{color:'#fff',}}>Do Not Sell My Personal Information</a> | <a href="/privacy/" style={{color:'#fff',}}>Privacy Policy</a>
    </span><br /><br /></div>
    
</CookieConsent>


)

export default Consent


