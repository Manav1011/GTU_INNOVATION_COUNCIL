'use client'
import { useEffect } from "react"

function NavToggler() {
    useEffect(() => {
        const navBarMain = document.getElementById('navbar-main')
        const NavBarMenuContainer = document.getElementById('full-screen-nav-menu-container')
        const NavTogglerSpan = document.getElementById('nav-toggler-span')
        const toggleNavMenu = document.getElementById('toggle-menu')
        toggleNavMenu.addEventListener('click',async () => {
          toggleNavMenu.classList.toggle('active');            
            NavBarMenuContainer.classList.toggle('hidden');
            navBarMain.classList.toggle('bg-white')
            navBarMain.classList.toggle('bg-teal-500')
            document.body.classList.toggle('overflow-hidden')
          });        
    }, []);
  return null
}

export default NavToggler