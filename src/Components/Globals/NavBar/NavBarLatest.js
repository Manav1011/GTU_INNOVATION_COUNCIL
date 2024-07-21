import Link from "next/link";
import Image from "next/image";
import NavToggler from '@/Components/Globals/NavBar/client/NavToggler'
import './NavToggler.css'
async function NavBarLatest() {
  return (
    <section>
      <nav
        className="w-full fixed z-40 backdrop-filter bg-white topToBottom"
        id="navbar-main"
      >
        <div className="flex justify-between mx-5 sm:mx-20 items-center relative">
          <div className="flex items-center gap-2">
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
                  className="h-auto w-20"
                  src="/images/logos/GISC.png"
                  alt="Your Company"
                />
              </Link>
            </div>
          </div>
          <button className="toggle-menu absolute">
            <span className="bg-black before:bg-black after:bg-black" id="nav-toggler-span"></span>
          </button>
        </div>
      </nav>
      <div className="w-full h-[100dvh] bg-black	 text-zinc-600 absolute hidden z-10 FadeINQuick" id="full-screen-nav-menu-container">
        <div className="h-full w-full flex justify-center items-center flex-col gap-4 BottomTOUpQuick" style={{fontFamily:'OSWALD'}}>
          <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white">About</h1>
          <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white">Startups and Innovators</h1>
          <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white">Ecosystem</h1>
          <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white">Programs</h1>
          <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white">Apply</h1>
          <h1 className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white">Contact Us</h1>
        </div>
      </div>
      <NavToggler/>
    </section>
  );
}

export default NavBarLatest;
