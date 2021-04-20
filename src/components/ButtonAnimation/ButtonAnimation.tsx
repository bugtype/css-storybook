import React, { useEffect } from "react";
import './button-animation.css'


export const ButtonAnimation = () => {

  useEffect(() => {

    const buttons = document.querySelectorAll('a');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e: any) =>{
        const x = e.clientX - (e.target?.offsetLeft || 0);
        const y = e.clientY - e.target?.offsetTop;

        
        const ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        btn.appendChild(ripples);

        setTimeout(() => {
          ripples.remove();
        }, 1000 );
        
      })
    })
    
    
  }, [])

  return (
    <>
     <div className="container">
       <a href="#">Hello World</a>
       <a href="#">WWWWWIWNIWINIWIWNIWNINWINW</a>
     </div>
    </>
  );
};
