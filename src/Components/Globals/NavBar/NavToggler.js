"use client";
import { useState } from "react";

function NavToggler() {
  // const [SidebarOn, setSidebarOn] = useState(false);
  const toggleSidebar = async () => {
    document.body.classList.toggle('sm:overflow-hidden')
    document.getElementById('gtu-logo').classList.toggle('sm:hidden')
    document.getElementById('gic-logo').classList.toggle('sm:hidden')
    let NavigationSidebar = document.getElementById("NavigationSidebar");    
    NavigationSidebar.classList.toggle("hidden");    
    document.getElementById("NavTogglerOpen").classList.toggle('hidden')
    document.getElementById("NavTogglerClosed").classList.toggle('hidden')
    // setSidebarOn(!SidebarOn);
  };
  // useEffect(() => {

  // },[])
  return (
    <div className="pl-1 cursor-pointer sm:py-5" onClick={toggleSidebar}>      
    <div className="hidden" id="NavTogglerOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={52}
          height={52}
          fill="currentColor"          
          className="bi bi-x-lg text-black hover:text-slate-700"
          viewBox="0 0 15 10"
          style={{
            display: "block",
            fill: "none",
            height: 32,
            width: 32,
            stroke: "currentcolor",
            overflow: "visible",
          }}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>     
    </div>
        <div className="" id="NavTogglerClosed">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          className="bi bi-x-lg text-black hover:text-slate-700"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: 32,
            width: 32,
            stroke: "currentcolor",
            strokeWidth: 3,
            overflow: "visible",
          }}
        >
          <g fill="none" fillRule="nonzero">
            <path d="m2 16h28" />
            <path d="m2 28h28" />
          </g>
        </svg>      
        </div> 
    </div>
  );
}

export default NavToggler;
