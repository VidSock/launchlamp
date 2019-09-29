import React from 'react'
// import { Link } from 'gatsby'
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

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
          

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

<ul className="socialmenu" style={{textAlign:'center', justifyContent:'center', margin:'3rem 0'}}>
  <li><h3 className="socialtext">We're<br />Social:</h3></li>
<li><a className="social" href="https://facebook.com"><FaFacebookSquare /></a></li>
<li><a className="social" href="https://linkedin.com"><FaLinkedin /></a></li>
<li><a className="social" href="https://twitter.com"><FaTwitterSquare /></a></li>
</ul>



<div style={{textAlign: 'center', justifyContent: 'center', fontSize: '70%'}}>Copyright &copy; {(new Date().getFullYear())} Hytron Manufacturing Inc.</div>
        </div>
      </footer>
    )
  }
}

export default Footer

