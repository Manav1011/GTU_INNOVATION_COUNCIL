import Link from "next/link";
import Image from "next/image";
import NavigationSidebar from "./NavigationSidebar";
import NavToggler from "./NavToggler";
import Navbarlist from "./Navbarlist"
import NavigatiionSidebarMobile from "./NavigatiionSidebarMobile"
async function NavBarLatest() {
  return (
    <section>
    <nav className="w-full fixed z-40 backdrop-filter bg-white topToBottom" id="navbar-main">
      <div className="flex justify-between mx-5 sm:mx-20 items-center">
        <div className="flex gap-x-4 items-center">
          <Link href="/" className="">
            <Image
              width={200}
              height={192}
              priority={true}
              id="gtu-logo"
              className="h-auto w-14"
              src="/images/logos/gtu.png"
              alt="Your Company"
            />
          </Link>
        </div>
        <div className="">
        <Link href="/" className="">
            <Image
              width={200}
              height={192}
              priority={true}
              id="gtu-logo"
              className="h-auto w-14"
              src="/images/logos/GISC.png"
              alt="Your Company"
            />
          </Link>
        </div>
        
        <div className="flex gap-3 items-center">
        <Link href="/" className="xl:text-xl  text-sm px-4 py-2 bg-green-500" style={{ fontFamily: "AvenirLight" }}>
            Apply Now
          </Link>   
          <NavToggler/>
        </div>
      </div>
    </nav>
    <NavigationSidebar/>
    <NavigatiionSidebarMobile></NavigatiionSidebarMobile>
    </section>
  );
}

export default NavBarLatest;

