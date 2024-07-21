'use client'
import { useEffect } from "react"

function NavToggler() {
    useEffect(() => {
        const navBarMain = document.getElementById('navbar-main')
        const NavBarMenuContainer = document.getElementById('full-screen-nav-menu-container')
        const NavTogglerSpan = document.getElementById('nav-toggler-span')
        document.querySelector('.toggle-menu').addEventListener('click', async (e) => {
            e.target.classList.toggle('active');            
            NavBarMenuContainer.classList.toggle('hidden');
            navBarMain.classList.toggle('bg-white')
            navBarMain.classList.toggle('bg-slate-300')
            document.body.classList.toggle('overflow-hidden')
          });        
    }, []);
  return null
}

export default NavToggler