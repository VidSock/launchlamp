import React from 'react'
import styled from "styled-components";

import { FaTimesCircle } from 'react-icons/fa';
// import Newsletter from '../components/Newsletter'
import ScrollAnimation from 'react-animate-on-scroll'

const CustomBox = styled.div`



.popsemicontainer {
  .btn {
	  position:relative;
	  top:30px;
// 	  z-index:3;
    margin: 0 auto;      
    color: #fff;  
    height:50px;
    width:auto;
    padding:.8rem 2rem;   
    line-height: 20px;    
    background: #DB2600;
    font-weight:bold;
    border: 0;
    border-radius: 3px;  
    cursor: pointer;
    text-align: center; 
    transition: background 0.3s ease-in;
    &:hover { background: #ff0000; cursor:pointer; }
  }
  .content {
    height: 0; 
    width: auto; 
    opacity: 0;    
    visibility: hidden;
    overflow: hidden; 
    cursor: default;
    display:none;
    transition: opacity 0.2s ease-in; 
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
	  position:absolute;
	  top:45px;
	  right:105px;
// 	  z-index:5;
	  
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

  #semitoggle {
    display: block;
    visibility: hidden;
    &.active ~ .modal-backdrop,
    &:checked ~ .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.0);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
      z-index: -1;
      visibility: visible;
      opacity: 1;      
      transition: opacity 0.2s ease-in; 
    }

    &.active ~ .content,
    &:checked ~ .content {  
	opacity: 1;
      background-color: transparent;
	  width:auto !important;
      height: auto;
      padding:0 0 0 0 !important;
	margin:0 auto;
	display:block;
//       z-index: 4;
      pointer-events: auto;
      cursor: auto;
      visibility: visible; 
      @media (max-width: 400px) {  }                   
    }  
  }
}
#semitoggle {
	&.active ~ .btn,
    &:checked ~ .btn {
// 	display:none;
	}
}
`



   
const Popupsemi = () => (

   


<CustomBox style={{}}>

<ScrollAnimation animateIn="bounceInUp"  animateOut="fadeOut" initiallyVisible={false} animateOnce={true} animatePreScroll={false}>
<div className="popsemicontainer" style={{position:'relative', padding: '0 0', marginTop: '0', display:'flex', justifyContent:'center', flexDirection:'column',}}>
<label className="btn txtshadow shadow" htmlFor="semitoggle" >Learn More</label>

  <input id="semitoggle" type="checkbox" style={{position: 'relative',}} />
  
    


   
  <div className=" content" style={{}}>

<label className="close" htmlFor="semitoggle" style={{position: 'absolute', right:'4%', top: '7%', fontSize:'24px', cursor:'pointer',}} title="Close this section"><FaTimesCircle /></label>
    
    <div className="container" style={{margin:'0', padding:'30px',}}>
    <h2>Semiconductor Industry</h2>
    <br />
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
    <br /><br />
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 

    
 </div>

  </div> 
</div>
</ScrollAnimation>


</CustomBox>
  
)

export default Popupsemi