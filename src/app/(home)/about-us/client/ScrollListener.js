"use client";

import { useEffect } from "react";



async function transformScroll(event) {
  event.preventDefault();
  if (event.deltaY) {    
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
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

    window.addEventListener('scroll', async () =>  {
      if (window.scrollY > document.getElementById('nav-menus-desktop').offsetHeight) {
          document.getElementById('nav-menus-desktop').classList.remove('lg:flex')
          document.getElementById('nav-menus-desktop').classList.add('hidden')
          document.getElementById('togglenavbutton').classList.remove('lg:hidden')                
          document.getElementById('navbar-main').classList.add('bg-clip-padding','shadow','backdrop-filter','backdrop-blur-sm')
        }else{
          const navbar = document.getElementById('navbar-main')
          navbar.classList.remove('bg-clip-padding','shadow','backdrop-filter','bg-opacity-0','backdrop-blur-sm','text-white')          
          navbar.classList.add('text-slate-800')
          document.getElementById("navbar-main").classList.remove("bg-black");
          if(window.innerWidth > 1024){
              document.getElementById('mobile-menu').classList.add('hidden')                    
              document.getElementById('nav-menus-desktop').classList.add('lg:flex',)
              document.getElementById('nav-menus-desktop').classList.remove('hidden')
              document.getElementById('togglenavbutton').classList.add('lg:hidden')
          }
        }
  })
  }, []);
  return null;
}

export default ScrollListener;
