import React from 'react'
// import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Contact from '../components/Contact'
/*
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
*/




const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          
<Contact />


<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>
  <li><h3 className="socialtext">We're<br />Social:</h3></li>
<li><a className="social"  href="https://facebook.com"><FaFacebookSquare /><span>Facebook</span></a></li>
<li><a className="social" href="https://linkedin.com"><FaLinkedin /><span>LinkedIn</span></a></li>
<li><a className="social" href="https://twitter.com"><FaTwitterSquare /><span>Twitter</span></a></li>
</ul>



<div style={{textAlign: 'center', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())} Hytron Manufacturing Inc.</div>
        </div>
      </footer>
    )
  }
}

export default Footer

