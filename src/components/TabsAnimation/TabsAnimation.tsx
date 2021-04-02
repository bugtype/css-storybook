import React from "react";

import "./tabs-animation.css";

export const TabsAnimation = () => {
  const openCity = (cityName: string) => (evt: any) => {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      const tab = tabcontent[i];
      tab.className = tab.className.replace("tabcontent-active", "");
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    const el = document.getElementById(cityName);
    el!.classList.add("tabcontent-active");
    evt.currentTarget.className += " active";
  };
  return (
    <>
      <div className="tab">
        <button className="tablinks" onClick={openCity("London")}>
          London
        </button>
        <button className="tablinks" onClick={openCity("Paris")}>
          Paris
        </button>
        <button className="tablinks" onClick={openCity("Tokyo")}>
          Tokyo
        </button>
      </div>

      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </>
  );
};
