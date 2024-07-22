"use client"

import { useEffect } from "react"

const Navigation = () => {
    useEffect(() => {
        const submenu = document.getElementById('SideBarSubMenu2Mobile')
        const nav_link = document.querySelectorAll('.nav-link')
        const nav_sub_link = document.querySelectorAll('.nav-sab-link')
        const close_btn = document.getElementById('close_btn')
        const close_sub_nav_btn = document.getElementById('close_sub_nav_btn')
        let Menu = ["About", "Startups" , "Ecosystem"]
        let sub_menu = ["Benefits"]

        nav_link.forEach(function(link){
            link.addEventListener('click',(event)=>{
                const val = event.target.dataset.customValue
                Menu.map((menu,index)=>{
                    if(menu === val){
                      document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.remove('hidden')
                      document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.add('sm:flex')
                      document.getElementById(menu).classList.remove("hidden")
                      document.getElementById(menu).classList.add("flex")
                    }else{
                      if(!document.getElementById(menu).classList.contains("hidden")){
                        document.getElementById(menu).classList.add("hidden")
                        document.getElementById(menu).classList.remove("flex")
                      }
                    }
                    
                })
            })
        })
        
        nav_sub_link.forEach(function(sub_link){
            sub_link.addEventListener('click',(event)=>{
                const val = event.target.dataset.customValue
                sub_menu.map((menu,index)=>{
                    if(menu === val){
                      document.getElementById('SideBarSubMenu3Mobile') && document.getElementById('SideBarSubMenu3Mobile').classList.remove('hidden')
                      document.getElementById('SideBarSubMenu3Mobile') && document.getElementById('SideBarSubMenu3Mobile').classList.add('sm:flex')
                      document.getElementById(menu).classList.remove("hidden")
                      document.getElementById(menu).classList.add("flex")
                    }else{
                      if(!document.getElementById(menu).classList.contains("hidden")){
                        document.getElementById(menu).classList.add("hidden")
                        document.getElementById(menu).classList.remove("flex")
                      }
                    }
                    
                })
            })
        })
        close_btn.addEventListener('click',(event)=>{
            document.getElementById("SideBarSubMenu2Mobile").classList.remove("sm:flex");
            document.getElementById("SideBarSubMenu2Mobile").classList.add("hidden");
        })

        close_sub_nav_btn.addEventListener('click',(event)=>{
            document.getElementById("SideBarSubMenu3Mobile").classList.remove("sm:flex");
            document.getElementById("SideBarSubMenu3Mobile").classList.add("hidden");
        })
    }, [])
    
  return (
    <>

    </>
  )
}

export default Navigation