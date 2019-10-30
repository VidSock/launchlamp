import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FaEnvelope } from 'react-icons/fa';
import CookieConsent from "react-cookie-consent";



const Consent = () => (


<CookieConsent
	debug={true}
	location="bottom"
	style={{ background: "#222", zIndex:'0', }}
	enableDeclineButton={true}
	declineButtonText="No Cookies"
    declineButtonStyle={{ color: "#fff", background: "#666", fontSize: "13px" }}
    
    buttonText="Cookies are fine"
	buttonStyle={{ color: "#fff", background: "#FF0000", fontSize: "13px" }}

    expires={30}
    cookieName="Hytron.com-site-pref-cookie"
>

    <div style={{padding:'0 0 0 1rem', fontSize:'90%',}}>This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "80%" }}>
    <a href="/privacy/" style={{color:'#fff',}}>[ privacy policy ]</a>
    </span></div>
    
</CookieConsent>


)

export default Consent


