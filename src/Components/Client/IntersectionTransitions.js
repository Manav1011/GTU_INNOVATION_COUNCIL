'use client'

import { useEffect } from "react"

async function animateCounter(element, start, end, duration) {
    const range = end - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.textContent = Math.floor(progress * range + start);
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

function IntersectionTransitions() {
    useEffect(() => {
            const ObserverConfig = {
              root: null,
              threshold: 0.1,
            };

            // Second Fold
            const ObserverSecondFoldMain = new IntersectionObserver(async (entries, observer) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        document.getElementById('SecondFoldSubContainer').classList.remove('opacity-0');
                        document.getElementById('SecondFoldSubContainer').classList.add('BottomTOUpSlightlyText');
                        document.querySelectorAll('.stats-block').forEach(el => {
                            el.classList.add('BottomTOUp')
                        })
                        const counters = document.querySelectorAll('.stats');
                        const duration = 2000; 
                        counters.forEach(counter => {
                            const targetValue = parseInt(counter.getAttribute('data-target'));
                            animateCounter(counter, 0, targetValue, duration);
                        });                    
                        observer.disconnect();
                    }
                })
            },ObserverConfig
            );
            const SecondFoldEl = document.getElementById("SecondFoldContainer");
            if(SecondFoldEl){
                ObserverSecondFoldMain.observe(SecondFoldEl);
            }

            // Third Fold
            const ThirdFoldTitle = document.getElementById('third-fold-title')
            if(ThirdFoldTitle){
                const ObserverThirdFoldTitle = new IntersectionObserver(async (entries, observer) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting){  
                            ThirdFoldTitle.classList.remove('opacity-0')
                            ThirdFoldTitle.classList.add('BottomTOUpSlightlyText')
                            observer.disconnect();
                        }
                    })
                },ObserverConfig
                );
                ObserverThirdFoldTitle.observe(ThirdFoldTitle);
            }
            const PartnerCards = document.querySelectorAll('.partner-card')
            if(PartnerCards){
                PartnerCards.forEach(el => {
                    const ObserverPartnerCard = new IntersectionObserver(async (entries, observer) => {
                        entries.forEach((entry) => {
                            if(entry.isIntersecting){  
                                el.classList.remove('opacity-0')
                                el.classList.add('BottomTOUp')
                                observer.disconnect();
                            }
                        })
                    },ObserverConfig
                    );
                    ObserverPartnerCard.observe(el);
                })
            }

            // Third Fold
            const WhyGICFold = document.getElementById('WhyGICFold')
            if(WhyGICFold){
                const ObserverWhyGICFold = new IntersectionObserver(async (entries, observer) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting){  
                            WhyGICFold.classList.remove('opacity-0')
                            WhyGICFold.classList.add('FadeIN')
                            observer.disconnect();
                        }
                    })
                },ObserverConfig
                );
                ObserverWhyGICFold.observe(WhyGICFold);
            }

            const ThirdFoldCards = document.querySelectorAll('.third-fold')
            if(ThirdFoldCards){
                ThirdFoldCards.forEach(el => {
                    const ObserverThirdFoldCards = new IntersectionObserver(async (entries, observer) => {
                        entries.forEach((entry) => {
                            if(entry.isIntersecting){  
                                el.classList.remove('opacity-0')
                                el.classList.add('PopUP')
                                observer.disconnect();
                            }
                        })
                    },ObserverConfig
                    );
                    ObserverThirdFoldCards.observe(el);
                })
            }

            // Fourth Fold
            const FourthFoldTitle = document.getElementById('FourthFoldTitle')
            if(FourthFoldTitle){
                const ObserverFourthFold = new IntersectionObserver(async (entries, observer) => {
                    entries.forEach((entry) => {
                        if(entry.isIntersecting){  
                            FourthFoldTitle.classList.remove('opacity-0')
                            FourthFoldTitle.classList.add('BottomTOUpSlightlyText')
                            observer.disconnect();
                        }
                    })
                },ObserverConfig
                );
                ObserverFourthFold.observe(FourthFoldTitle);
            }

            const Reports = document.querySelectorAll('.report')
            if(Reports){
                Reports.forEach(el => {
                    const ObserverReports = new IntersectionObserver(async (entries, observer) => {
                        entries.forEach((entry) => {
                            if(entry.isIntersecting){  
                                el.classList.remove('opacity-0')
                                el.classList.add('SlideINLeft')
                                observer.disconnect();
                            }
                        })
                    },ObserverConfig
                    );
                    ObserverReports.observe(el);
                })
            }
            const Circulars = document.querySelectorAll('.circular')
            if(Circulars){
                Circulars.forEach(el => {
                    const ObserverCircular = new IntersectionObserver(async (entries, observer) => {
                        entries.forEach((entry) => {
                            if(entry.isIntersecting){  
                                el.classList.remove('opacity-0')
                                el.classList.add('SlideINRight')
                                observer.disconnect();
                            }
                        })
                    },ObserverConfig
                    );
                    ObserverCircular.observe(el);
                })
            }
            
    },[])
  return null
}

export default IntersectionTransitions