import React, { useEffect, useRef } from 'react';

import './scroll-effect.css';

export const ScrollEffect = () =>{

  const bgRef = useRef<HTMLElement>(null);

  useEffect(() => {

    window.addEventListener('scroll',()=>{

      const value = window.scrollY
      if(bgRef.current){
        bgRef.current.style.backgroundSize = 100 + value + "px";
      }
    })
    
    //

  }, [])

  return  (
    <div className="scroll-container">
      <div className="banner">
        <img src="https://picjumbo.com/wp-content/uploads/golden-gate-bridge-through-a-hole-in-a-fence-2210x1473.jpg"/>
        <div ref={bgRef} id="bg" />
      </div>
    </div>
  )
  
  
}