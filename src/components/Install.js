import React from 'react'
// import { navigate } from 'gatsby-link'
import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
// import ScrollAnimation from 'react-animate-on-scroll'
import CookieConsent from "react-cookie-consent"
import styled from "styled-components";

const CustomBox = styled.div`
#installer {
  animation: cssAnimation 0s 8s forwards;
  visibility: hidden;
}

@keyframes cssAnimation {
  to   { visibility: visible; }
}

`

const Install = () => (
<CustomBox style={{}} className="">

<div id="installer" className="" style={{}}>

<CookieConsent
	debug={true}
	location="none"
	style={{ color:'inherit', width:'auto', background:'inherit',  alignItems:'inherit',  textAlign:'left', justifyContent:'center', margin:'0 auto', top:'50px',  }}
    className="container"
    buttonText="Cancel"
	buttonStyle={{ background: "transparent", textDecoration:'underline', textAlign:'center', fontSize: "13px", bottom:'10%', position:'absolute', right:'40%', left:'40%', color:'inherit', }}
    expires={1}
    cookieName="Hytron.com-install-cookie"
>


<div className="container" style={{padding:'2rem 3rem', border:'0px solid #000',}}>

	<img src="" alt="placeholder" style={{justifyContent:'center', maxWidth:'100%', width:'100%', margin:'0 auto', display:'none',}} />
	
	<h4 style={{textAlign:'center',}}>Install Our Web App</h4>
	<br />
	<span style={{fontSize:'110%',}}>This website has app functionality. Add it to your home screen to get added features like fullscreen and offline browsing.</span>
	<br /><br />
	<div style={{fontSize:'80%', textAlign:'center',}}>On your device, locate the browser menu:</div>
	<br />
    <div style={{fontSize:'110%', textAlign:'left', verticalAlign:'middle', lineHeight:'200%',}}><div style={{margin:'0 1rem 0 0', float:'left', fontSize:'200%',}}><FiShare style={{}} /></div> 1) Press the 'Share' button <br /><br />
    
    <div style={{margin:'0 1rem 0 0', fontSize:'200%', float:'left',}}><FaRegPlusSquare /></div> 2) Press 'Add to Home Screen' </div>
    <br />
    <br />
    </div>
    
</CookieConsent>
</div>

</CustomBox>
)

export default Install