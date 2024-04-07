'use client'
import { useEffect } from "react";

function ScrollListener() {    
    useEffect(() => {     
        window.addEventListener('scroll', async () =>  {
            if (window.scrollY > window.innerHeight) {                
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