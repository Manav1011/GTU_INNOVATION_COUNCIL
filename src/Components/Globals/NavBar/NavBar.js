import Image from "next/image";
import Link from "next/link";
import ToggleNavButton from "./ToggleNavButton";
import NavLink from "./NavLink";

function NavBar() {
  return (
    <nav
      className="w-full fixed top-0 z-40 backdrop-filter bg-opacity-80 topToBottom  rounded-b-2xl"
      id="navbar-main"
      style={{ fontFamily: "dosislight",fontWeight:'bolder',backgroundAttachment:'fixed'}}
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
                  className="h-auto w-20"
                  src="/images/logos/GISC.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden lg:ml-6 lg:flex items-center" id="nav-menus-desktop">
              <div className="flex space-x-4">
                <NavLink
                  classList={
                    "text-slate- rounded-md px-3 py-2 text-sm font-semibold"
                  }
                  id={"clientssection"}
                  title={"GIC Verticals"}
                />
                <NavLink
                  classList="text-slate- rounded-md px-3 py-2 text-sm font-semibold"
                  id="servicescontainer"
                  title="Our Support"
                />
                <NavLink
                  classList="text-slate- rounded-md px-3 py-2 text-sm font-semibold"
                  id="teamdetailscontainer"
                  title="GIC Startup"
                />
                <NavLink
                  classList="text-slate- rounded-md px-3 py-2 text-sm font-semibold"
                  id="projectssection"
                  title="Resource Bank"
                />
                <NavLink
                  classList="text-slate- rounded-md px-3 py-2 text-sm font-semibold"
                  id="aboutussection"
                  title="Latest"
                />
                <NavLink
                  classList="text-slate- rounded-md px-3 py-2 text-sm font-semibold"
                  id="aboutussection"
                  title="Reach US"
                />
                <NavLink
                  classList="text-slate- rounded-md px-3 py-2 text-sm font-semibold"
                  id="aboutussection"
                  title="Apply"
                />
              </div>
            </div>
            {/* <div className="flex flex-shrink-0 items-center" style={{cursor:'pointer'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div> */}
            <div className="inset-y-0 right-0 flex items-center lg:hidden" id="togglenavbutton" style={{transition:'.25s ease-in-out'}}>
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
            id="clientssection"
            title="Clients"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="servicescontainer"
            title="Services"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="teamdetailscontainer"
            title="Team"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="projectssection"
            title="Projects"
          />
          <NavLink
            classList="block text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
            id="aboutussection"
            title="About us"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
