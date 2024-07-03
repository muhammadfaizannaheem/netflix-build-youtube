import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow]=useState(false); // usestate: easy way of defining the variable in react

  const transitionNavBar=()=>{
    if(window.scrollY>100){
      handleShow(true);
    }else{
      handleShow(false);
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll",transitionNavBar);
    return() => window.removeEventListener('scroll', transitionNavBar);
  },[]);

  return (
    //IMPORTANT:::: only add nav black class if the show variable is true
    // as we scroll down and up the black nav bar is moving along; it looks crisp
    <div className={`nav ${show && 'nav_black'}`}>
        <div className='nav_contents'>
    <img 
    className='nav_logo'
    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt=""></img> 
      <img 
      className='nav_avatar'
      src='https://archive.org/download/profiles_202104/chicken.png'/>
        

        </div>
    </div>
  )
}

export default Nav
