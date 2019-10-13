import React from 'react'
import styled from "styled-components";
import { FaTimesCircle } from 'react-icons/fa';
import Contact from '../components/Contact'
const CustomBox = styled.div`
*, *:before, *:after { box-sizing: border-box; }
body { background: #ccc; }

.modal-container {
  padding-top: 0px;
  position: relative;
  width: auto;

      
  .modal-btn {
    display: block;      
    color: #fff;  
    width: auto;
    height: 60px; 
    padding:0 1rem 0 1rem; 
    margin-right:0;  
    line-height: 60px;    
    background: transparent;
    border: 0; 
    cursor: pointer;
    text-align: center;
    transition: background 0.3s ease-in;
    &:hover { background: #DB2600; cursor:pointer; 
    }
  }
  
  .modal-content, 
  .modal-backdrop {
    height: 0; 
    width: 0; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    transition: opacity 0.2s ease-in; 
  }

  
  .modal-close {
    color: #999;

    padding-top: 0;
	font-size:28px;
    width: 25px;
    height: 25px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover { color: #DB2600;
    }
    
  }
     
  .modal-content-btn {
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
    &:hover { color: #fff; background: #365690;
    }
  }
  
   .modal-backdrop{z-index:4;}
    
    
  #modal-toggle {
    display: none;  
    &.active ~ .modal-backdrop,
    &:checked ~ .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.6);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: 4;
      visibility: visible;
      opacity: 1;      
      transition: opacity 0.2s ease-in; 
    }
    &.active ~ .modal-content,
    &:checked ~ .modal-content {
      opacity: 1;
      background-color: transparent;

      width: auto;
      height: auto;
      padding: 0;
      position: fixed !important;

      border-radius: 4px;
      z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      overflow: scroll;
      
left:0;
// top:0;
width:100vw;
height:100vw;

                 
    }  
  }
}


.upload:hover{background-color: #222 !important; cursor:pointer;}
.modal-container #modal-toggle:checked ~ body{overflow:hidden;}
 
 
@media (max-width: 600px){
.modal-container{text-align:left !important; padding-left:.8rem; justify-content:left !important; width:100%; display:block;}
.modal-btn{text-align:left !important;}
	
	#modal-toggle {
	&.active ~ .modal-content,
    &:checked ~ .modal-content {
	    left:0 !important;
	    top:100px !important;
	    width: 100% !important;
	    text-align: left !important;
	    
	    #popcontact-form{padding-left:1rem;}
	    
/*
	.modal-close{
	   left: 94%;
	   font-size:28px;
	  }
*/
	  
	  
	}
	   

	    
}
`


const PopupContact = () => (

<CustomBox style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>


<div className="modal-container"  style={{position: 'relative',}}>

  <input id="modal-toggle" type="checkbox"  />
  
  <label className="modal-btn" htmlFor="modal-toggle">Get A Quote</label> 
  
  <label className="modal-backdrop" htmlFor="modal-toggle"></label>
  
  <div className="modal-content" style={{position: 'absolute', zIndex: '4',}}>
    <label className="modal-close" htmlFor="modal-toggle" style={{position: 'absolute', top: '30px', right: '14%', zIndex: '5',}}><FaTimesCircle /></label>
    <Contact />
  </div>
  
</div>
</CustomBox>    

)

export default PopupContact


