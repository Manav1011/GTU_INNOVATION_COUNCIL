"use client";
import { useEffect } from "react";

const CarouselScrollListener = () => {
    useEffect(() => {
      const carouselContainer = document.getElementById('carouselContainer');
      const carousel = carouselContainer.getElementsByClassName('carousel');
      let currentIndex = 0;

        function changeCarousel(){
            carousel[currentIndex].classList.add("hidden");
            currentIndex = (currentIndex + 1) % carousel.length;
            carousel[currentIndex].classList.remove("hidden");
        }

      //display the initial carousel 
      carousel[currentIndex].classList.remove("hidden");
      setInterval(changeCarousel,3000);
    }, [])
    
  return null;
}

export default CarouselScrollListener