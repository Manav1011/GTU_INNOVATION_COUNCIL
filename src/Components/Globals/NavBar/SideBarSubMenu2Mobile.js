import { useState } from "react";
import SideBarSubMenu3Mobile from "./SideBarSubMenu3Mobile";

function SideBarSubMenu2Mobile({ title }) {
  const [selectedMenuPhone, setSelectedMenuPhone] = useState(null);
  const HideTheSecondSubMenu = async () => {
    document.getElementById("SideBarSubMenu2Mobile").classList.add("hidden");
  };
  const Menus = {
    "gic-verticals": [
      "GIC Clubs",
      "Sankuls",
      "Design Thinking",
      "CIC3",
      "IPR",
      "Ideathon21",
      "GTU Motorsports",
      "Incubator",
      "Awards",
      "Student Associateship Program",
    ],
    "our-support": ["Allied Support", "Funding"],
    "gic-startup": [
      "GIC Startup Mart",
      "Startup Stories",
      "SSIP Startup List",
      "Nodal Institute Startup",
    ],
    "resource-bank": [
      "MOOCs",
      "MSTE",
      "OSTE",
      "Case Studies",
      "BLOG",
      "Books Generals",
    ],
    latest: [
      "Career",
      "Upcoming Event List",
      "Upcoming Classic Event",
      "Circulars",
      "Reports",
      "Utility Forms",
    ],
    apply: [
      "Incubation Form",
      "Apply Under Nodal Institute",
      "Apply Under SSIP",
      "Apply Under TBI",
      "Startup Gallery",
    ],
  };
  return (
    <section
      className="z-20 w-full fixed h-screen overflow-y-scroll overflow-x-hidden sm:hidden sm:w-1/4 bg-zinc-300 flex flex-col gap-10 justify-start sm:justify-center items-start sm:pt-14 pt-28"
      id="SideBarSubMenu2Mobile"
    >
      <div
        className="flex gap-6 items-center font-bold text-xl ml-5 text-slate-500 cursor-pointer"
        onClick={() => {
          HideTheSecondSubMenu();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
        Go Back
      </div>
      <div
        className="flex flex-col gap-10 px-4 sm:mx-0 w-full"
        style={{ fontFamily: "OSWALD" }}
      >
        {Menus[title].map((item, index) => (
          <div
            key={index}
            className={`font-bold sm:text-2xl text-3xl flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
            onClick={() => {
              if (item === "Funding") {
                setSelectedMenuPhone("funding");
                const element = document.getElementById(
                  "SideBarSubMenu3Mobile"
                );
                if (element) {
                  element.classList.remove("hidden");
                }
              }
            }}
          >
            {item}
            {item == "Funding" ? (
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
            ) : null}
          </div>
        ))}
      </div>
      {selectedMenuPhone && <SideBarSubMenu3Mobile title={selectedMenuPhone} />}
    </section>
  );
}

export default SideBarSubMenu2Mobile;
