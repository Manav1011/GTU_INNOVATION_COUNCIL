"use client";
import NavFooter from "@/Components/Globals/NavBar/NavFooter";
import Link from "next/link";
import { useState } from "react";
function NavLinks({BaseLinksObj}) {
  const [LinksObj, setLinksObj] = useState(BaseLinksObj);  
  return (
    <>
      <div
        className="mt-14 h-full w-full flex justify-center items-center flex-col gap-4 BottomTOUpQuick"
        style={{ fontFamily: "OSWALD" }}
      >
        {LinksObj &&
          Object.keys(LinksObj).map((el, index) =>
            LinksObj[el] &&
            LinksObj[el].key !== "go-back" &&
            LinksObj[el].link ? (
              <Link
                className={`${LinksObj[el]['menu-count'] == 'third' ? 'select-none cursor-pointer text-xl xss:text-3xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-3xl 2xl:text-3xl' : LinksObj[el]['menu-count'] == 'second' ? 'select-none cursor-pointer text-2xl xss:text-3xl xs:text-3xl sm:text-5xl lg:text-5xl xl:text-4xl 2xl:text-3xl' : 'select-none cursor-pointer text-3xl xss:text-4xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-5xl 2xl:text-5xl'}  ease-in duration-200 hover:text-white nav-link`}
                data-custom-value={LinksObj[el].key}
                key={index}
                href={`/${LinksObj[el].link}`}
              >
                {LinksObj[el].title}
              </Link>
            ) : (
              <h1
                className={`${LinksObj[el]['menu-count'] == 'third' ? 'select-none cursor-pointer text-xl xss:text-3xl xs:text-3xl sm:text-4xl lg:text-4xl xl:text-3xl 2xl:text-3xl' : LinksObj[el]['menu-count'] == 'second' ? 'select-none cursor-pointer text-2xl xss:text-3xl xs:text-3xl sm:text-5xl lg:text-5xl xl:text-4xl 2xl:text-3xl' : 'select-none cursor-pointer text-3xl xss:text-4xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-5xl 2xl:text-5xl'}  ease-in duration-200 hover:text-white nav-link`}
                data-custom-value={LinksObj[el].key}
                key={index}
                onClick={() => {
                  setLinksObj(LinksObj[el]["sub-menu-content"]);
                }}
              >
                {LinksObj[el].title}
              </h1>
            )
          )}
        {LinksObj["go-back"] ? (
          <div
            className="select-none cursor-pointer text-3xl xss:text-4xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-5xl 2xl:text-5xl ease-in duration-200 hover:text-white nav-link flex items-center gap-2"
            onClick={() => {                
                LinksObj["go-back"]['parent-key'] == 'base' ? setLinksObj(BaseLinksObj) : setLinksObj(BaseLinksObj[LinksObj["go-back"]['parent-key']]["sub-menu-content"]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              fill="currentColor"
              className="bi bi-arrow-left w-8 h-auto"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Go Back
          </div>
        ) : null}
      </div>
      <NavFooter />
    </>
  );
}

export default NavLinks;
