'use client'
import { useEffect,useRef } from "react"
import { usePathname } from "next/navigation"
function GlobalRouteListener() {
    const pathname = usePathname()    
    const isFirstRender = useRef(true);
    
    useEffect(() => {
      const navBarMain = document.getElementById('navbar-main')
      const NavBarMenuContainer = document.getElementById('full-screen-nav-menu-container')      
      const toggleNavMenu = document.getElementById('toggle-menu')      
      if (isFirstRender.current) {
        // toggleNavMenu.classList.remove('active');            
        // NavBarMenuContainer.classList.add('hidden');
        // navBarMain.classList.add('bg-white')
        // navBarMain.classList.remove('bg-teal-500')
        // document.body.classList.remove('overflow-hidden')
        isFirstRender.current = false;
      }else{
        if(toggleNavMenu.classList.contains('active')){
          toggleNavMenu.classList.toggle('active');            
          NavBarMenuContainer.classList.toggle('hidden');
          navBarMain.classList.toggle('bg-white')
          navBarMain.classList.toggle('bg-teal-500')
          document.body.classList.toggle('overflow-hidden')              
        }
      }
    },[pathname])
  return null
}

export default GlobalRouteListener