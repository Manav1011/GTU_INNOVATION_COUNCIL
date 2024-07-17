import Link from "next/link";
import Image from "next/image";
import NavigationSidebar from "./NavigationSidebar";
import NavToggler from "./NavToggler";
async function NavBarLatest() {
  return (
    <section>
    <nav className="w-full fixed z-40 backdrop-filter bg-white topToBottom" id="navbar-main">
      <div className="flex justify-between mx-5 sm:mx-20 items-center">
        <div className="">
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
              id="gic-logo"
              className="h-auto w-24"
              src="/images/logos/GISC.png"
              alt="Your Company"
            />
          </Link>
        </div>
        <NavToggler/>
      </div>
    </nav>
    <NavigationSidebar/>
    </section>
  );
}

export default NavBarLatest;
