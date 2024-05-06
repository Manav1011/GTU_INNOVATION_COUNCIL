import Image from "next/image";
import Link from "next/link";
import ToggleNavButton from "./ToggleNavButton";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

async function NavBar() {
  return (
    <nav
      className="w-full fixed top-0 z-40 backdrop-filter bg-opacity-80 topToBottom  rounded-b-2xl text-sm "
      id="navbar-main"
      style={{
        fontFamily: "OSWALD",        
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
        <DesktopNav/>
            <div
              className="inset-y-0 right-0 flex items-center lg:hidden text-black"
              id="togglenavbutton"
              style={{ transition: ".25s ease-in-out" }}
            >
              <ToggleNavButton />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
    <MobileNav/>
    </nav>
  );
}

export default NavBar;
