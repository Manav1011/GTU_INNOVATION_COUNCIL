"use client";
import { useState } from "react";
import Link from "next/link";
import SliderbarSubMenu from "./SliderbarSubMenu";
import SideBarSubMenu2Mobile from "./SideBarSubMenu2Mobile";

function NavigationSidebar() {  
  const [selectedMenuDesktop, setSelectedMenuDesktop] = useState("gic-verticals");
  const [selectedMenuPhone, setSelectedMenuPhone] = useState(null);
  return (
    <section
      className="w-full z-20 fixed h-[100dvh] bg-slate-50 hidden bottomUPTitle overflow-y-scroll sm:overflow-y-hidden"
      id="NavigationSidebar"
    >
      <div className="h-full w-full flex">
        <div className="h-full w-full sm:w-1/4 bg-zinc-300 flex justify-start sm:justify-center sm:pt-20 pt-20">
          <div
            className="flex flex-col gap-10 mx-4 sm:mx-0 w-full"
            style={{ fontFamily: "OSWALD" }}
          >
            <div
              className={`cursor-pointer font-bold sm:text-2xl text-3xl ${
                selectedMenuDesktop == "gic-verticals"
                  ? "sm:text-orange-500 sm:underline"
                  : null
              } flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
              onClick={() => {setSelectedMenuDesktop("gic-verticals");setSelectedMenuPhone("gic-verticals"); document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.remove('hidden')}}
            >
              GTU Verticals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-caret-right sm:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </div>
            <div
              className={`cursor-pointer font-bold sm:text-2xl text-3xl ${
                selectedMenuDesktop == "our-support"
                  ? "sm:text-orange-500 sm:underline"
                  : null
              } flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
              onClick={() => {setSelectedMenuDesktop("our-support");setSelectedMenuPhone("our-support"); document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.remove('hidden')}}
            >
              Our Support
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-caret-right sm:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </div>
            <div
              className={`cursor-pointer font-bold sm:text-2xl text-3xl ${
                selectedMenuDesktop == "gic-startup"
                  ? "sm:text-orange-500 sm:underline"
                  : null
              } flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
              onClick={() => {setSelectedMenuDesktop("gic-startup");setSelectedMenuPhone("gic-startup"); document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.remove('hidden')}}
            >
              GIC Startup
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-caret-right sm:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </div>
            <div
              className={`cursor-pointer font-bold sm:text-2xl text-3xl ${
                selectedMenuDesktop == "resource-bank"
                  ? "sm:text-orange-500 sm:underline"
                  : null
              } flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
              onClick={() => {setSelectedMenuDesktop("resource-bank");setSelectedMenuPhone("resource-bank"); document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.remove('hidden')}}
            >
              Resource Bank
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-caret-right sm:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </div>
            <div
              className={`cursor-pointer font-bold sm:text-2xl text-3xl ${
                selectedMenuDesktop == "latest"
                  ? "sm:text-orange-500 sm:underline"
                  : null
              } flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
              onClick={() => {setSelectedMenuDesktop("latest");setSelectedMenuPhone("latest"); document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.remove('hidden')}}
            >
              Latest
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-caret-right sm:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </div>
            <div
              className={`cursor-pointer ${
                selectedMenuDesktop == "apply" ? "sm:underline" : null
              } flex items-center justify-between sm:justify-center font-bold sm:text-3xl text-4xl text-orange-500`}
              onClick={() => {setSelectedMenuDesktop("apply");setSelectedMenuPhone("apply"); document.getElementById('SideBarSubMenu2Mobile') && document.getElementById('SideBarSubMenu2Mobile').classList.remove('hidden')}}
            >
              Apply
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-caret-right sm:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </div>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLScemptmi9LFonX5U1VyoPwVZ_K7-8EVIcss2op1GdBY9GZ4rw/viewform" target="_blank" className="cursor-pointer font-bold text-lg flex flex-row items-center sm:justify-center gap-5 hover:text-orange-500 transition duration-300 ease-in-out">
              Send Inquiry
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
            <Link href="/about-us" className="cursor-pointer font-bold text-lg flex flex-row items-center sm:justify-center gap-5 hover:text-orange-500 transition duration-300 ease-in-out">
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
            <Link href={'/reach-us'} className="cursor-pointer font-bold text-lg flex flex-row items-center sm:justify-center gap-5 hover:text-orange-500 transition duration-300 ease-in-out">
              Reach Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div
          className="h-full w-3/4 hidden sm:flex justify-start items-start"
          style={{ fontFamily: "OSWALD" }}
        >
          <SliderbarSubMenu title={selectedMenuDesktop} />
        </div>
        {selectedMenuPhone && <SideBarSubMenu2Mobile title={selectedMenuPhone}/> }
      </div>
    </section>
  );
}

export default NavigationSidebar;
