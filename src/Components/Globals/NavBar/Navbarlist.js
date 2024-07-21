"use client"

import { useState } from "react"

function Navbarlist () {

    const toggleSidebar = async () => {
        let NavigationSidebar = document.getElementById("NavigationSidebar");    
        NavigationSidebar.classList.remove("hidden");    
      }; 
      const handle_dynamic_menu = async (val) =>{
        
        // let Menu = ["About", "Startups" , "Ecosystem"]
        // if(!Menu.includes(val)){
        //   document.getElementById("NavigationSidebar").classList.add("hidden");
        // }
        // Menu.map((menu,index)=>{
        //     if(menu === val){
        //       document.getElementById(menu).classList.remove("hidden")
        //       document.getElementById(menu).classList.add("flex")
        //       console.log(document.getElementById(menu))
        //     }else{
        //       if(!document.getElementById(menu).classList.contains("hidden")){
        //         document.getElementById(menu).classList.add("hidden")
        //         document.getElementById(menu).classList.remove("flex")
        //       }
        //     }
            
        // })

      }
  return (
    <ul className="gap-x-5 hidden lg:flex" style={{ fontFamily: "AvenirLight" }}>
            {/* <li>Home Page</li>    */}
            <li className="xl:text-xl text-sm cursor-pointer hover:text-orange-500" data-custom-value="About" onMouseEnter={(e)=>{toggleSidebar();handle_dynamic_menu(e.target.dataset.customValue);}}>About</li>
            <li className="xl:text-xl text-sm cursor-pointer hover:text-orange-500" data-custom-value="Startups" onMouseEnter={(e)=>{toggleSidebar();handle_dynamic_menu(e.target.dataset.customValue);}} >Startups and Innovators</li>
            <li className="xl:text-xl text-sm cursor-pointer hover:text-orange-500" data-custom-value="Ecosystem" onMouseEnter={(e)=>{toggleSidebar();handle_dynamic_menu(e.target.dataset.customValue);}} >Ecosystem</li>
            <li className="xl:text-xl text-sm cursor-pointer hover:text-orange-500" data-custom-value="Programs" onMouseEnter={(e)=>{toggleSidebar();handle_dynamic_menu(e.target.dataset.customValue);}}>Programs</li>
            <li className="xl:text-xl text-sm cursor-pointer hover:text-orange-500" data-custom-value="Contact Us" onMouseEnter={(e)=>{toggleSidebar();handle_dynamic_menu(e.target.dataset.customValue);}}>Contact Us</li>
    </ul>         
  )
}
export default Navbarlist
