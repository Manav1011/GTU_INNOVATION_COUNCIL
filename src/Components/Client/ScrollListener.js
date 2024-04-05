'use client'
import { useEffect } from "react";

function ScrollListener() {    
    useEffect(() => {     
        const callbackFirstFold = async (entries, observer) => {
            entries.forEach(entry => {                
                if (entry.isIntersecting) {
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
                }else{
                    document.getElementById('nav-menus-desktop').classList.remove('lg:flex')
                    document.getElementById('nav-menus-desktop').classList.add('hidden')
                    document.getElementById('togglenavbutton').classList.remove('lg:hidden')
                }
            });
        };                    
           
        const callbackSecondFold = async (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const navbar = document.getElementById('navbar-main')
                    // navbar.classList.remove('text-slate-800')
                    navbar.classList.add('bg-clip-padding','shadow','backdrop-filter','backdrop-blur-sm')
                }
            });
        };
        const callbackwhyGICparallaxlayer = async (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                   console.log('here');
                }
            });
        };
       
        const options = {  
            root:null,          
            threshold: 0.5,  
        }

        const observerFirstFold = new IntersectionObserver(callbackFirstFold,options);
        const targetElementFirstFold = document.getElementById('firstfold');
        if (targetElementFirstFold) {
            observerFirstFold.observe(targetElementFirstFold);
        }

        const observerSecondFold = new IntersectionObserver(callbackSecondFold,options);
        const targetElementSecondFOld = document.getElementById('secondfold');
        if (targetElementSecondFOld) {
            observerSecondFold.observe(targetElementSecondFOld);
        }
        const whyGICParallaxDivOptions = {
            root:null,
            threshold:1
        }
        // setTimeout(() => {
        //     const whyGICParallaxDivObserver = new IntersectionObserver(() => {
        //         document.getElementById('ourGoals').addEventListener('scroll',ourGoalsScroll)
        //         document.getElementById('expand-span').addEventListener('click',addFullScreen)             
        //     },whyGICParallaxDivOptions);
        //     observerSecondFold.observe(targetElementSecondFOld);
        // }, 2000);  
        
            const quoteContainer = document.getElementById("quote-container");
            const quoteCards = quoteContainer.getElementsByClassName("quote-card");
            let currentIndex = 0;
          
            function showNextQuote() {                
              // Hide current quote
              quoteCards[currentIndex].classList.add("hidden");
              // Calculate index of next quote
              currentIndex = (currentIndex + 1) % quoteCards.length;
              // Show next quote
              quoteCards[currentIndex].classList.remove("hidden");
            }
          
            // Initially show the first quote
            quoteCards[currentIndex].classList.remove("hidden");
          
            // Set up timer to switch quotes every 3 seconds
            setInterval(showNextQuote, 3000);            
            document.querySelectorAll('marquee').forEach(item => {
                item.addEventListener('mouseover',() => {item.stop()})
                item.addEventListener('mouseout',() => item.start())
            })

    }, []);

    return null; // Return null or any other content as needed
}

export default ScrollListener;