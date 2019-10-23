import React from 'react'
import styled from "styled-components";
import { FaTimesCircle } from 'react-icons/fa';
import Newsletter from '../components/Newsletter'
// import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }


.news-container {
  padding-top: 0px;
  width: 100%;
  height:100vh;
      
  .news-btn {
    display: block;
    margin: 0 auto;      
    color: #fff;  
    width: auto;
    height: auto; 
    margin:0 50px;
    padding:.8rem 2rem;   
    line-height: 20px;    
    background: #DB2600;
    font-weight:bold;
    border: 0;
    border-radius: 3px;  
    cursor: pointer;
    text-align: center;
//     box-shadow: 0 5px 5px -5px #333;  
    transition: background 0.3s ease-in;
    &:hover { background: #ff0000; cursor:pointer; }
  }
  .news-content, 
  .news-backdrop {
    height: 0; 
    width: 0; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    transition: opacity 0.2s ease-in; 
  }
  .news-close {
	  position:absolute;
	  top:15px;
	  right:65px;
	  z-index:5;
	  
    color: #999;
    padding-top: 0;
	font-size:28px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover { color: #666;
    }       
  }     
  .news-content-btn {
    position: absolute;
    text-align: center;
    cursor: pointer;
    bottom: 20px;
    right: 30px;
    background: #446CB3;
    color: #fff;
    width: 50px;
    border-radius: 2px;
    font-size: 14px;
    height: 32px;
    padding-top: 9px;
    font-weight: normal;
    &:hover { color: #fff; background: #365690; }
  }
  #news-toggle {
    display: none;  
    &.active ~ .news-backdrop,
    &:checked ~ .news-backdrop {
      background-color:#000;
      width: 100vw;
      height: 100%;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 0;
      visibility: visible;
      opacity: .8;      
      transition: opacity 0.2s ease-in; 
    }
    
    
    
    &.active ~ .news-content,
    &:checked ~ .news-content {
	  
 opacity: 1;
      background-color: transparent;
    max-width: 700px;
    width: 100vw;
      height: auto;
      padding: 0;
      position: fixed !important;
    display:flex;
    align-content:center;
    justify-content:center;
	margin:0 auto;
      top: 100px;
      left:7%;
      right:7%;
   
      border-radius: 4px;
      z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      overflow: scroll;

 
      @media (max-width: 400px) { left: 0; }                   
    }  
  }
}
#news-toggle {
	&.active ~ .news-btn,
    &:checked ~ .news-btn {
	display:none;
	}
}
  
  
@media (max-width: 600px){
	
.news-close{top:15px !important; right: 20px !important; color: #999 !important;}
	
	&.active ~ .news-content,
    &:checked ~ .news-content {
	    left:0 !important;
	    width: 100% !important;
	    text-align: left !important;
	    max-width:100% !important;
	    z-index:4 !important;
	    
	    width:100% !important; padding:0 0 0 30px !important;
	    }
	    
	    
	    

	    
}
`


const Popup = () => (
  

<CustomBox className="newsletterbox" style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
<div className="news-container" style={{position: 'relative',}}>
  <input id="news-toggle" type="checkbox" style={{position: 'relative',}} />
  <label className="news-btn txtshadow shadow" htmlFor="news-toggle">Join Our Newsletter</label> 
  <label className="news-backdrop" htmlFor="news-toggle"></label> 
  
  <div className="news-content " style={{position: 'relative', zIndex: '4',}}>
  
    <label className="news-close" htmlFor="news-toggle" style={{position: 'absolute', }}><FaTimesCircle /></label>
    <Newsletter />
      
  </div>
        
</div>

</CustomBox>
  
)

export default Popup


