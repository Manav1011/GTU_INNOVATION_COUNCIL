"use client";
import { useEffect } from "react";

function ScrollListener() {
  useEffect(() => {    
    // const quoteContainer = document.getElementById("quote-container");
    // const quoteCards = quoteContainer.getElementsByClassName("quote-card");
    // let currentIndex = 0;

    // function showNextQuote() {            
    //   // Hide current quote
    //   quoteCards[currentIndex].classList.add("hidden");
    //   // Calculate index of next quote
    //   currentIndex = (currentIndex + 1) % quoteCards.length;
    //   // Show next quote
    //   quoteCards[currentIndex].classList.remove("hidden");
    // }    
    // quoteCards[currentIndex].classList.remove("hidden");    
    // setInterval(showNextQuote, 3000);      
    try {
      const RollingTitles = document.getElementsByClassName("rolling-up-text");    
          let currentIndexRoller = 0;
          if(window.rollingInterval){          
            clearInterval(window.rollingInterval)
          }
          function showNextSkill() {   
            if(RollingTitles){            
              try{
                RollingTitles[currentIndexRoller].classList.add("hidden");
                currentIndexRoller = (currentIndexRoller + 1) % RollingTitles.length;     
                RollingTitles[currentIndexRoller].classList.remove("hidden");
              }catch(err){              
              }
            }
          }        
          RollingTitles[currentIndexRoller].classList.remove("hidden");                
          window.rollingInterval = setInterval(showNextSkill, 2000);    
      
    } catch (error) {
        console.log(error);
    }
  }, []);

  return null; // Return null or any other content as needed
}

export default ScrollListener;
