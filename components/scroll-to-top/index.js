'use client'
import Image from "next/image"
import React, { useEffect, useState } from "react"
// import Uparrow from "../../assets/images/go to top/up arrow.svg"
import Uparrow1 from "../../public/images/got-to-top/Group.webp";

const Scroll = () => {

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 100){ 
        setVisible(true) 
      }  
      else if (scrolled <= 100){ 
        setVisible(false) 
      } 
    }; 
    
    const scrollToTop = () =>{ 
      window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
      }); 
    }; 
    const [hover, setHover] = useState(false);
    useEffect(() =>{
        window.addEventListener('scroll', toggleVisible);
    }, []);
    
    return(
        <>
        
        <div className="scroll-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          {hover ?
          (<Image src={Uparrow1} className="img-fluid" alt="Scroll Button" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />)
           :
          (<Image src={Uparrow1} className="img-fluid" alt="Scroll Button" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />)
          }        
        </div>

        </>
    )
}
export default Scroll