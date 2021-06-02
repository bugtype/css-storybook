import React from "react";

import "./tabs-animation2.css";

export const TabsAnimation2 = () => {
  const openCity = (cityName: string) => (evt: any) => {
    const tabcontent = document.getElementsByClassName("tab2content");
    for (let i = 0; i < tabcontent.length; i++) {
      const tab = tabcontent[i];
      tab.className = tab.className.replace("tab2content-active", "");
    }
    const tablinks = document.getElementsByClassName("tab2links");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    const el = document.getElementById(cityName);
    el!.classList.add("tab2content-active");
    evt.currentTarget.className += " active";
  };
  return (
    <>
      <div className="tab2">
        <button className="tab2links" onClick={openCity("London")}>
          London
        </button>
        <button className="tab2links" onClick={openCity("Paris")}>
          Paris
        </button>
        <button className="tab2links" onClick={openCity("Tokyo")}>
          Tokyo
        </button>
      </div>
      <div className="tab2-contnent-container">
        <div id="London" className="tab2content tab2content-active">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>

        <div id="Paris" className="tab2content">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>

        <div id="Tokyo" className="tab2content">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </div>
      </div>
    </>
  );
};
