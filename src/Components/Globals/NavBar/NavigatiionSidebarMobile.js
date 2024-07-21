"use client"
import Link from "next/link"
// import { useState } from "react";
import SideBarSubMenu2Mobile from "./SideBarSubMenu2Mobile";
const NavigatiionSidebarMobile = () => {
    // const [selectedMenuPhone, setSelectedMenuPhone] = useState(null);
    const handle_dynamic_menu_mobile = async (val) =>{
        console.log(val)
        let Menu = ["About_Mobile", "Startups_Mobile" , "Ecosystem_Mobile"]
        if(!Menu.includes(val)){
          document.getElementById("NavigationSidebar").classList.add("hidden");
        }
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

      }
  return (
    <>
        <section
            className="w-full z-20 fixed h-[100dvh] bg-slate-50 duration-300 transition-transform  hidden bottomUPTitle overflow-hidden overflow-y-scroll"
            id="NavigatiionSidebarMobile"
            // onMouseLeave={()=>{toggleSidebar()}}
        > 
            <div className="h-full w-full flex">
            <div className="h-full w-full  flex items-center flex-col justify-start">
                <div className="flex items-center justify-around w-full ">
                <ul className="w-full text-2xl pt-24" style={{ fontFamily: "AvenirLight" }}>
                <li 
                    className="py-4 cursor-pointer"
                    data-custom-value="About_Mobile"
                    onClick={(e)=>{
                        handle_dynamic_menu_mobile("About_Mobile")
                        }}
                >
                    <div className="flex justify-between mx-3">
                        About
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-caret-right"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                            </svg>
                    </div>
                    <hr className="mt-4"></hr>
                </li>
                <li className="py-4 cursor-pointer"
                    data-custom-value="Startups_Mobile"
                    onClick={(e)=>{
                        console.log(e.target)
                        handle_dynamic_menu_mobile("Startups_Mobile")
                        }}
                >
                    <div  className="flex justify-between mx-3">
                        Startups and Innovators
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-caret-right"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                            </svg>
                    </div>
                    <hr className="mt-4"></hr>
                </li>
                <li className="py-4 cursor-pointer" 
                    data-custom-value="Ecosystem_Mobile"
                    onClick={(e)=>{
                        handle_dynamic_menu_mobile("Ecosystem_Mobile")
                        }}
                >
                    <div className="flex justify-between mx-3">
                        Ecosystem
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                fill="currentColor"
                                className="bi bi-caret-right"
                                viewBox="0 0 16 16"
                            >
                                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                            </svg>
                    </div>
                    <hr className="mt-4"></hr>
                </li>
                <li className="py-4 cursor-pointer"><Link href="/" className="mx-3">Programs</Link><hr className="mt-4"></hr></li>
                <li className="py-4 cursor-pointer"><Link href="/" className="mx-3">Contact Us</Link><hr className="mt-4"></hr></li>
                <li className="py-4 cursor-pointer"><Link href="/" className="mx-3">Apply Now</Link></li>
            </ul>
                </div>
            </div>
                <SideBarSubMenu2Mobile/> 
            </div>
            
            
        </section>
    </>
  )
}

export default NavigatiionSidebarMobile