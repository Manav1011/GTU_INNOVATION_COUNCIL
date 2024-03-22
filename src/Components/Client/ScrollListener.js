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
        const callbackFirstFold = (entries, observer) => {
            entries.forEach(entry => {                
                if (entry.isIntersecting) {
                    const navbar = document.getElementById('navbar-main')
                    navbar.classList.remove('bg-clip-padding','backdrop-filter','bg-opacity-0','backdrop-blur-sm','text-white')          
                    navbar.classList.add('text-slate-800')
                }
            });
        };                    
           
        const callbackSecondFold = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) { 
                    entry.target.addEventListener('wheel',reverseScrollEventListener)
                    const navbar = document.getElementById('navbar-main')
                    // navbar.classList.remove('text-slate-800')                    
                    navbar.classList.add('bg-clip-padding','backdrop-filter','backdrop-blur-sm')
                }else{
                    entry.target.removeEventListener('wheel',reverseScrollEventListener)
                }
            });
        };
       
        const options = {  
            root:null,          
            threshold: 1,            
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

    }, []);

    return null; // Return null or any other content as needed
}

export default ScrollListener;