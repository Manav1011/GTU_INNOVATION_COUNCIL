'use client'
import React, { useEffect } from 'react';

const ImageGalleryScrollListener = () => {
  useEffect(() => {
    const scrollingContent = document.querySelector('.ImageGalleryAnimate');      
    const carousel = document.querySelector('.slides');  
    let totalWidth = 0;              
    const images = scrollingContent.querySelectorAll('img');
    images.forEach(img => {
        totalWidth += img.offsetWidth + parseInt(window.getComputedStyle(img).marginRight);
      });
    const containerWidth = scrollingContent.offsetWidth;    
    scrollingContent.style.width = totalWidth + 'px';    
    const animationStyle = document.createElement('style');
    
    animationStyle.innerHTML = `
        @keyframes slideRightGallery {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-${totalWidth - containerWidth + 30}px);
          }
        }
    `;
    document.head.appendChild(animationStyle);
    
  }, []);

  return null;
};

export default ImageGalleryScrollListener;
