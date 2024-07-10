'use client'
import { useEffect } from "react"
import { usePathname } from "next/navigation"
function GlobalRouteListener() {
    const pathname = usePathname()
    useEffect(() => {        
        let NavigationSidebar = document.getElementById("NavigationSidebar");    
        NavigationSidebar.classList.add("hidden");    
        document.getElementById("NavTogglerOpen").classList.add('hidden')
        document.getElementById("NavTogglerClosed").classList.remove('hidden')
    },[pathname])
  return null
}

export default GlobalRouteListener