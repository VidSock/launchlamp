import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/hytron-logo.svg'
import Headroom from "react-headroom"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { GoArrowUp } from 'react-icons/go';
// import PopContact from '../components/PopContact'
// import ScrollAnimation from 'react-animate-on-scroll'


const Navbar = class extends React.Component {
  


  render() {
    return (
	    
          
<Headroom style={{ zIndex: '5', }}>
    <header className="header">
    
    <Link to="/" className="logolink" title="Logo - Back To Home">
    <img className="logo" src={logo} alt="Hytron Manufacturing Logo" />
    </Link>
    
   

   
    
<input className="menu-btn" type="checkbox" id="menu-btn" />
<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

            <ul id="menu" className="menu">
               <li>
              <Link className="navbar-item" to="/capabilities">
                What We Do
              </Link>
              </li>
              
              {/* <li>
              <Link className="navbar-item" to="/products">
                How We Do It
              </Link>
              </li> */}
              
              <li>
              <Link className="navbar-item" to="/example">
               Our Work
              </Link>
              </li>
              
              <li>
              <Link className="navbar-item" to="/about">
                Who We Are
              </Link>
              </li>
              
              
              

              <li>
             
             <label className="modal-btn" htmlFor="modal-toggle">Request Quote</label> 
              </li>
              
              
            </ul>
            
            
      
      
   </header>
   
    <div className="themer"><ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="themeSlide">
            <input
              type="checkbox" value="None" id="themeSlide" name="check"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            
          <label htmlFor="themeSlide"></label></div>
        )}
      </ThemeToggler></div>
      
      
      <a href="#topofpage" title="Back To Top" className="back-to-top "><GoArrowUp /></a>
</Headroom>
        
      
      
    )
  }
}

export default Navbar
