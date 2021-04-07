import React, { useEffect } from "react";



function animateValue(obj: HTMLElement, start: number, end:number, duration:number) {
  let startTimestamp : number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const numberStr = Math.floor(progress * (end - start) + start);
    const currency =  new Intl.NumberFormat('ko-kr').format(numberStr)
    obj.innerHTML = currency;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// NOTE: css @property로도 가능하지만, 파이어폭스에서 지원안한다. https://caniuse.com/?search=%40property , 그리고 점유율 66퍼...
export const NumberCountingAnimation = () => {
 

  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = () => {
    const obj = document.getElementById("value");
    if(obj){
      animateValue(obj, 0, 10000, 1000);
    }
    else
    {
      console.error('div id 등을 확인해주세요.')
    }
    
  }
  return (
    <>
     <div id="value">0</div>
    </>
  );
};
