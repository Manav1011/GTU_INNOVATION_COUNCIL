"use client";

import { useEffect } from "react";



async function transformScroll(event) {  
  if(document.getElementById('about-us-container')){
    event.preventDefault();
    if (event.deltaY) {
      event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    }
  }
}


const callBackAboutUs = async (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .getElementById("footer")
        .classList.add("sm:fixed", "sm:w-full", "sm:bottom-0",'sm:bg-transparent','bg-slate-400');        
    } else {
      document
        .getElementById("footer")
        .classList.remove("sm:fixed", "sm:w-full", "sm:bottom-0",'sm:bg-transparent','bg-slate-400');
      observer.disconnect();
    }
  });
};

function ScrollListener() {
  useEffect(() => {
    const optionsAboutUS = {
      root: null,
      threshold: 0.1,
    };
    const ObserveeAboutUs = new IntersectionObserver(
      callBackAboutUs,
      optionsAboutUS
    );
    const AboutUS = document.getElementById("about-us-container");
    if (AboutUS) {
      ObserveeAboutUs.observe(AboutUS);
    }
    AboutUS.addEventListener("wheel", transformScroll, { passive: false });
  }, []);
  return null;
}

export default ScrollListener;
