"use client";
import { useEffect } from "react";

function ScrollListener() {
  useEffect(() => {
    // console.log("Called");
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
    // document.querySelectorAll(".circulars").forEach((item) => {
    //   item.addEventListener("mouseover", () => {
    //     item.parentNode.stop();
    //   });
    //   item.addEventListener("mouseout", () => item.parentNode.start());
    // });
    // document.querySelectorAll(".reports").forEach((item) => {
    //   item.addEventListener("mouseover", () => {
    //     item.parentNode.stop();
    //   });
    //   item.addEventListener("mouseout", () => item.parentNode.start());
    // });    
  }, []);

  return null; // Return null or any other content as needed
}

export default ScrollListener;
