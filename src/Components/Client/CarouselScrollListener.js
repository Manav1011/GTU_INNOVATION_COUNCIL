"use client";
import { useEffect } from "react";

const CarouselScrollListener = () => {
    useEffect(() => {
      const carouselContainer = document.getElementById('carouselContainer');
      const carousel = carouselContainer.querySelectorAll('.carousel');
      let currentIndex = 0;

      carousel.forEach(function(child){
        child.addEventListener('click',cardClickHandeller);
      })
      

        function changeCarousel(){
            carousel[currentIndex].classList.add("hidden");
            currentIndex = (currentIndex + 1) % carousel.length;
            carousel[currentIndex].classList.remove("hidden");
        }

      //display the initial carousel 
      carousel[currentIndex].classList.remove("hidden");
      let interavalID = setInterval(changeCarousel,3000);


      

      function cardClickHandeller(e){
        e.preventDefault()
        e.stopPropagation()
        const cardParent = e.currentTarget;
        const cardClass = cardParent.getElementsByClassName('card')
        if(cardClass[0].classList.contains('rotate-y-180')){
          cardClass[0].classList.remove('rotate-y-180')
          interavalID = setInterval(changeCarousel,3000);
        }
        else{
          cardClass[0].classList.add('rotate-y-180')
          clearInterval(interavalID);
        }
      }
    }, [])
    
  return ()=>{
    carousel.forEach(function(child){
      child.removeEventListener('click',cardClickHandeller);
    })
  };
}

export default CarouselScrollListener