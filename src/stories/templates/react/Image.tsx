import React,{ ImgHTMLAttributes, memo } from "react";



interface Props extends ImgHTMLAttributes<HTMLImageElement>{
 src: string;
 alt: string; // a11y

}



export const Image = memo(({alt,...others} : Props) =>{
  return <img 
    alt={alt}
    {...others} 
    // loading=""
    // data-src=""
  />;
})