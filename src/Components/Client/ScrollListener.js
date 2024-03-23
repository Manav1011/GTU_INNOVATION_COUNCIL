'use client'

import { useEffect } from "react";
const reverseScrollEventListener = (event) => {
    // Check if the user is scrolling vertically
    if(event.deltaY !== 0){
        if(document.getElementById('secondfold').scrollLeft == 0){            
            if(event.deltaY > 0){                
                event.preventDefault();
                const scrollAmount = event.deltaY * 0.8;      
                document.getElementById('secondfold').scrollLeft += scrollAmount
            }
        }
        else if(document.getElementById('secondfold').scrollWidth - document.getElementById('secondfold').clientWidth == Math.ceil(document.getElementById('secondfold').scrollLeft)){            
            if(event.deltaY < 0){                
                event.preventDefault();
                const scrollAmount = event.deltaY * 0.8;      
                document.getElementById('secondfold').scrollLeft += scrollAmount
            }
        }else{                        
            event.preventDefault();
            const scrollAmount = event.deltaY * 0.8;      
            document.getElementById('secondfold').scrollLeft += scrollAmount
        }
    }            
}
function ScrollListener() {    
    useEffect(() => {     
        const callbackFirstFold = async (entries, observer) => {
            entries.forEach(entry => {                
                if (entry.isIntersecting) {
                    const navbar = document.getElementById('navbar-main')
                    navbar.classList.remove('bg-clip-padding','shadow','bg-slate-100','backdrop-filter','bg-opacity-0','backdrop-blur-sm','text-white')          
                    navbar.classList.add('text-slate-800')
                    if(window.innerWidth > 1024){                        
                        document.getElementById('nav-menus-desktop').classList.add('lg:flex',)
                        document.getElementById('nav-menus-desktop').classList.remove('hidden','bg-slate-100')
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
                    navbar.classList.add('bg-clip-padding','shadow','backdrop-filter','bg-slate-100','backdrop-blur-sm')
                }
            });
        };
        // const callbackThirdFold = async (entries, observer) => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting) { 
        //             const navbar = document.getElementById('navbar-main')                    
        //             navbar.classList.remove('bg-clip-padding','backdrop-filter','backdrop-blur-sm')
        //             navbar.classList.add('bg-slate-200')
        //         }
        //     });
        // };
       
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
        // const observerThirdFold = new IntersectionObserver(callbackThirdFold,options);
        // const targetElementThirdFOld = document.getElementById('thirdfold');
        // if (targetElementThirdFOld) {
        //     observerThirdFold.observe(targetElementThirdFOld);
        // }
    }, []);

    return null; // Return null or any other content as needed
}

export default ScrollListener;