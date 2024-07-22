"use client";

import { useEffect } from "react";
// import Scrollbar from 'smooth-scrollbar';

function ScrollListener() {
  useEffect(() => {    
    // Scrollbar.init(document.querySelector('.scroll-smooth'));
    // const optionsAboutUS = {
    //   root: null,
    //   threshold: 0.1,
    // };
    // const ObserveeAboutUs = new IntersectionObserver(
    //   callBackAboutUs,
    //   optionsAboutUS
    // );
    // const AboutUS = document.getElementById("about-us-container");
    // if (AboutUS) {
    //   ObserveeAboutUs.observe(AboutUS);
    // }
    // AboutUS.addEventListener("wheel", transformScroll, { passive: false });
  }, []);
  return null;
}

export default ScrollListener;
