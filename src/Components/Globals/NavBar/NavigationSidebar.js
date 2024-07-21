"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SliderbarSubMenu from "./SliderbarSubMenu";
import SideBarSubMenu2Mobile from "./SideBarSubMenu2Mobile";

function NavigationSidebar() {  
  const [selectedMenuDesktop, setSelectedMenuDesktop] = useState("gic-verticals");
  const [selectedMenuPhone, setSelectedMenuPhone] = useState(null);

  const toggleSidebar = async () => {
    let NavigationSidebar = document.getElementById("NavigationSidebar");    
    NavigationSidebar.classList.add("hidden");    
  }; 

  function slugify(text) {
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')         // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\-\-+/g, '-')       // Replace multiple - with single -
      .replace(/^-+/, '')           // Trim - from start of text
      .replace(/-+$/, '');          // Trim - from end of text
  }

  const Menus = {
    "About": [
      "About Us",
      "Leadership and Governance",
      "Recognitions",
      "Partners",
      "Mentors and Advisors",      
    ],
    "Startups and Innovators": [
      "Startups and Innovators Supported",
      { "Benefits Available": ["Incubation", "Funding", "IPR Support", "Co Working Facilities", "Resources", "Lab Facilities" , "Market Access and Networking"] },
    ],
    "Ecosystem": [
      "GIC Clubs",
      "Sankuls",
      "CiC3",
      "Student Associateship Program",
      "GTU Motorsports",
      "Ideathon",
      "Robocon Club",
      "GTU Startup Policy",
    ],
    "Programs" : [
      "New Programs"
    ]

  };
  return (
    <section
      className="w-full z-20 fixed pt-24 bg-slate-50 duration-300 transition-transform  hidden bottomUPTitle"
      id="NavigationSidebar"
      // onMouseLeave={()=>{toggleSidebar()}}
      // onMouseDown={()=>{toggleSidebar()}}
      // onMouseOut={()=>{toggleSidebar()}}
    > 
      <div className="flex justify-between gap-x-12 mx-16">
      <div className="h-full flex flex-col flex-wrap gap-4 justify-between mb-3" id="About">
        <div className="text-2xl font-bold">
          About GIC : 
        </div>
      {
        Menus["About"].map((item,index)=>{
          if (typeof item === "string") {
            return (
              <Link
              href={`/${slugify(item)}`}
                key={index}
                // onClick={() => {toggleSidebar()}}
                className="font-medium text-xl ml-3 hover:text-orange-500 transition duration-300 ease-in-out flex items-center gap-4"
              >
                {item}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
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
            );
          } else if (typeof item === "object") {
            return (
              <div key={index}>
                {Object.keys(item).map((key, subIndex) => (
                  <div key={subIndex}>
                    <div className="font-bold text-xl transition duration-300 ease-in-out flex items-center gap-4 text-emerald-400">
                      {key}
                    </div>
                    <div className="font-normal text-2xl flex gap-6">
                      {item[key].map((subItem, subSubIndex) => (
                        <Link
                          href={`/${slugify(subItem)}`}
                          // onClick={() => {toggleSidebar()}}
                          key={subSubIndex}
                          className="hover:text-orange-500 transition duration-300 ease-in-out"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })
      }
      </div> 
      <div className="  h-full flex-col flex-wrap items-start gap-4 mb-3 flex" id="Startups">
      <div className="text-2xl font-bold">
        Startups and Innovators Section : 
        </div>
      {
        Menus["Startups and Innovators"].map((item,index)=>{
          if (typeof item === "string") {
            return (
              <Link
              href={`/${slugify(item)}`}
                key={index}
                // onClick={() => {toggleSidebar()}}
                className="font-medium ml-3 text-xl hover:text-orange-500 transition duration-300 ease-in-out flex items-center gap-4"
              >
                {item}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
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
            );
          } else if (typeof item === "object") {
            return (
              <div key={index}>
                {Object.keys(item).map((key, subIndex) => (
                  <div key={subIndex}>
                    <div className="font-bold ml-3 text-2xl transition duration-300 ease-in-out flex items-center gap-4 text-emerald-400">
                      {key}
                    </div>
                    <div className="font-normal mt-3 text-lg flex flex-col gap-2">
                      {item[key].map((subItem, subSubIndex) => (
                        <Link
                          href={`/${slugify(subItem)}`}
                          // onClick={() => {toggleSidebar()}}
                          key={subSubIndex}
                          className="hover:text-orange-500 transition duration-300 ease-in-out ml-3"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })
      }
      </div> 
      <div className="  h-full flex-col flex-wrap gap-4 justify-between mb-3 flex" id="Ecosystem">
        <div className="text-2xl font-bold">
          Ecosystem Of GIC :
        </div>
      {
        Menus["Ecosystem"].map((item,index)=>{
          if (typeof item === "string") {
            return (
              <Link
              href={`/${slugify(item)}`}
                key={index}
                // onClick={() => {toggleSidebar()}}
                className="font-medium ml-3 text-xl hover:text-orange-500 transition duration-300 ease-in-out flex items-center gap-4"
              >
                {item}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
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
            );
          } else if (typeof item === "object") {
            return (
              <div key={index}>
                {Object.keys(item).map((key, subIndex) => (
                  <div key={subIndex}>
                    <div className="font-bold text-xl transition duration-300 ease-in-out flex items-center gap-4 text-emerald-400">
                      {key}
                    </div>
                    <div className="font-normal text-2xl flex gap-6">
                      {item[key].map((subItem, subSubIndex) => (
                        <Link
                          href={`/${slugify(subItem)}`}
                          // onClick={() => {toggleSidebar()}}
                          key={subSubIndex}
                          className="hover:text-orange-500 transition duration-300 ease-in-out"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })
      }
      </div> 
      <div className="  h-full flex-col flex-wrap gap-4 justify-between mb-3 flex" id="Ecosystem">
        <div className="text-2xl font-bold">
          Programs :
        </div>
      {
        Menus["Programs"].map((item,index)=>{
          if (typeof item === "string") {
            return (
              <Link
              href={`/${slugify(item)}`}
                key={index}
                // onClick={() => {toggleSidebar()}}
                className="font-medium ml-3 text-xl hover:text-orange-500 transition duration-300 ease-in-out flex items-center gap-4"
              >
                {item}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
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
            );
          } else if (typeof item === "object") {
            return (
              <div key={index}>
                {Object.keys(item).map((key, subIndex) => (
                  <div key={subIndex}>
                    <div className="font-bold text-xl transition duration-300 ease-in-out flex items-center gap-4 text-emerald-400">
                      {key}
                    </div>
                    <div className="font-normal text-2xl flex gap-6">
                      {item[key].map((subItem, subSubIndex) => (
                        <Link
                          href={`/${slugify(subItem)}`}
                          // onClick={() => {toggleSidebar()}}
                          key={subSubIndex}
                          className="hover:text-orange-500 transition duration-300 ease-in-out"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          }
          return null;
        })
      }
      </div> 
      </div>
    </section>
  );
}

export default NavigationSidebar;
