'use client'
const PageScroll = ()=>{
    let currentPage = 0;

    // Function to scroll to a specific page
    function scrollToPage(pageIndex) {
        const vh = window.innerHeight;
        window.scrollTo({ top: pageIndex * vh, behavior: 'smooth' });
    }

    // Function to handle the scroll event
    function handleScroll(event) {
        const vh = window.innerHeight;
        const scrollY = window.scrollY;
        const newPage = Math.round(scrollY / vh);

        if (newPage !== currentPage) {
            currentPage = newPage;
            scrollToPage(currentPage);
        }
    }

    // Throttle scroll event to improve performance
    let isScrolling = false;
    window.addEventListener('scroll', function(event) {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                handleScroll(event);
                isScrolling = false;
            });
            isScrolling = true;
        }
    });
}

export default PageScroll