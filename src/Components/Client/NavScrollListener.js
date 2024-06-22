'use client'

import { useEffect } from "react"

function NavScrollListener() {
    useEffect(() => {
        window.addEventListener('scroll', async () =>  {
            if (window.scrollY > document.getElementById('navbar-main').offsetHeight) {
                // document.getElementById('nav-menus-desktop').classList.remove('lg:flex')
                // document.getElementById('nav-menus-desktop').classList.add('hidden')
                // document.getElementById('togglenavbutton').classList.remove('lg:hidden')                
                document.getElementById('navbar-main').classList.add('bg-clip-padding','shadow','backdrop-filter','backdrop-blur-sm')
              }else{
                const navbar = document.getElementById('navbar-main')
                navbar.classList.remove('bg-clip-padding','shadow','backdrop-filter','bg-opacity-0','backdrop-blur-sm','text-white')          
                navbar.classList.add('text-slate-800')
                document.getElementById("navbar-main").classList.remove("bg-black");
                // if(window.innerWidth > 1024){
                //     document.getElementById('mobile-menu').classList.add('hidden')                    
                //     document.getElementById('nav-menus-desktop').classList.add('lg:flex',)
                //     document.getElementById('nav-menus-desktop').classList.remove('hidden')
                //     document.getElementById('togglenavbutton').classList.add('lg:hidden')
                // }
              }
        })
    },[])
  return null
}

export default NavScrollListener