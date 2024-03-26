'use client'
import { useEffect } from "react";
const addFullScreen= (event) => {
    event.stopPropagation()    
    document.getElementById('whyGICParallaxDiv').classList.add('h-screen')
    document.getElementById('whyGICParallaxDiv').classList.remove('h-1/4','overflow-y-hidden')
    document.getElementById('expand-span').classList.remove('flex')
    document.getElementById('expand-span').classList.add('hidden')
}
const ourGoalsScroll = () => {
    if(document.getElementById('expand-span').classList.contains('hidden')){
        document.getElementById('whyGICParallaxDiv').classList.add('h-1/4','overflow-y-hidden')
        document.getElementById('expand-span').classList.toggle('hidden')
        document.getElementById('expand-span').classList.toggle('flex')
    }
}
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
        setTimeout(() => {
            document.getElementById('ourGoals').addEventListener('scroll',ourGoalsScroll)
            document.getElementById('expand-span').addEventListener('click',addFullScreen)             
        }, 2000);     
    }, []);

    return null; // Return null or any other content as needed
}

export default ScrollListener;