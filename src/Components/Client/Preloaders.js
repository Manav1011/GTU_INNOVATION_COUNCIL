'use client'

import { useEffect } from "react"

async function preloadImage(url) {
    const img = new Image();
    img.src = url;
}
function Preloaders() {
    useEffect(() => {

        function preloadImagesForScreenSize() {
            const smallScreenImage = '/images/backgrounds/GTU_CAMPUS_POTRAIT_4.webp';
            const largeScreenImage = '/images/backgrounds/GTU_CAMPUS_6.webp';

            if (window.innerWidth <= 640) {
                // Preload image for small screens
                preloadImage(smallScreenImage);
                console.log(`Preloading small screen image: ${smallScreenImage}`);
            } else {
                // Preload image for large screens
                preloadImage(largeScreenImage);
                console.log(`Preloading large screen image: ${largeScreenImage}`);
            }
        }

        // Call the function on page load
        preloadImagesForScreenSize();
    },[])
  return null
}

export default Preloaders