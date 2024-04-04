'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'

function NavLink({classList, title,id,dropDownToggeler}) {
    const currentPath = usePathname()    
  return (
    <Link className={classList} data-dropdown-toggle={dropDownToggeler} href={currentPath === '/' ? `#${id}` : `/#${id}`}>{title}</Link>
  )
}

export default NavLink