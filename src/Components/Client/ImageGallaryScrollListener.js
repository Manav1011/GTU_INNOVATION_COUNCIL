'use client'
import React, { useEffect } from 'react';

const ImageGalleryScrollListener = () => {
  useEffect(() => {
    // Select the carousel container
    const carousel = document.querySelector('.slides');
    if (!carousel) return;

    // Set the interval for scrolling (e.g., every 3 seconds)
    const scrollInterval = 3000;

    // Define the scroll step (how much to scroll horizontally each time)
    const scrollStep = carousel.clientWidth ;

    // Set the easing duration
    const easingDuration = 600; // in milliseconds

    const scrollCarousel = () => {
      // Scroll by the step
      carousel.scrollBy({
        left: scrollStep,
        behavior: 'smooth'
      });

      // Check if the carousel has reached the end
      setTimeout(() => {
        console.log("first" + carousel.scrollWidth)
        console.log("second" + (carousel.scrollLeft + carousel.clientWidth))
        if (carousel.scrollLeft + carousel.clientWidth + 100 >= carousel.scrollWidth) {
          // If it has reached the end, reset the scroll to the start
          setTimeout(() => {
            carousel.scrollTo({
              left: 0,
              behavior: 'smooth' // Instant reset to the start
            });
          }, easingDuration);
        }
        
      }, easingDuration);
    };

    // Set the interval for automatic scrolling
    let scrollIntervalId = setInterval(scrollCarousel, scrollInterval);

    // Pause scrolling on mouse enter and resume on mouse leave
    carousel.addEventListener('mouseenter', () => {
      clearInterval(scrollIntervalId);
    });

    carousel.addEventListener('mouseleave', () => {
      scrollIntervalId = setInterval(scrollCarousel, scrollInterval);
    });

    // Clean up intervals and event listeners when the component unmounts
    return () => {
      clearInterval(scrollIntervalId);
      carousel.removeEventListener('mouseenter', () => clearInterval(scrollIntervalId));
      carousel.removeEventListener('mouseleave', () => setInterval(scrollCarousel, scrollInterval));
    };
  }, []);

  return null;
};

export default ImageGalleryScrollListener;
