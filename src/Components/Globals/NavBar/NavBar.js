import Image from "next/image";
import Link from "next/link";
import ToggleNavButton from "./ToggleNavButton";
import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav
      className="w-full fixed top-0 z-40 backdrop-filter bg-opacity-80 topToBottom  rounded-b-2xl"
      id="navbar-main"
      style={{
        fontFamily: "dosislight",
        fontWeight: "bolder",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          <div className="flex flex-1 items-center lg:items-stretch justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image
                  width={300}
                  height={192}
                  priority={true}
                  className="h-auto w-24"
                  src="/images/logos/GISC.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div
              className="hidden lg:ml-6 lg:flex items-center"
              id="nav-menus-desktop"
            >
              <div className="flex space-x-5">                
                  <NavLink
                    classList="text-slate-800 rounded-md  text-md font-semibold"
                    title={"GIC Verticals"}                    
                  />
                  <NavLink
                    classList="text-slate-800 rounded-md  text-md font-semibold"
                    title={"Our Support"}                    
                  /> 
                  <NavLink
                    classList="text-slate-800 rounded-md  text-md font-semibold"
                    title={"GIC Startup"}                    
                  />                                    
                  <NavLink
                    classList="text-slate-800 rounded-md  text-md font-semibold"
                    title={"Resource Bank"}                    
                  />                                    
                  <NavLink
                    classList="text-slate-800 rounded-md  text-md font-semibold"
                    title={"Latest"}                    
                  />
                  <NavLink
                    classList="text-slate-800 rounded-md  text-md font-semibold"
                    title={"Reach US"}
                  />
                  <NavLink
                    classList="text-slate-800 rounded-md  text-md font-semibold"
                    title={"Apply"}
                  />
              </div>
            </div>
            <div
              className="inset-y-0 right-0 flex items-center lg:hidden"
              id="togglenavbutton"
              style={{ transition: ".25s ease-in-out" }}
            >
              <ToggleNavButton />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="hidden topToBottom text-slate-50" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id={"clientssection"}
            title={"GIC Verticals"}
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="servicescontainer"
            title="Our Support"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="teamdetailscontainer"
            title="GIC Startup"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="projectssection"
            title="Resource Bank"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="aboutussection"
            title="Latest"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="aboutussection"
            title="Reach US"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="aboutussection"
            title="Apply"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
