import SideBarSubMenu3Mobile from "./SideBarSubMenu3Mobile";
import Link from "next/link";

function SideBarSubMenu2Mobile() {
  // const [selectedMenuPhone, setSelectedMenuPhone] = useState(null);
  const HideTheSecondSubMenu = async () => {
    document.getElementById("SideBarSubMenu2Mobile").classList.remove("sm:flex");
    document.getElementById("SideBarSubMenu2Mobile").classList.add("hidden");
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
  };
  return (
    <section
      className="z-20 w-full fixed h-[100dvh] overflow-y-scroll overflow-x-hidden hidden  bg-zinc-300 flex-col gap-10 justify-start items-start sm:pt-14 pt-28"
      id="SideBarSubMenu2Mobile"
    >
      <div
        className="flex gap-6 items-center justify-center  w-full font-bold text-xl ml-5 text-slate-500 cursor-pointer mb-5"
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
        style={{ fontFamily: "AvenirLight" }}
      >
        <div className="w-full h-full flex-col flex-wrap gap-4 justify-between mb-3 hidden" id="About_Mobile">
        <div className="text-2xl font-bold">
          About :
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
                    <div className="font-bold text-4xl transition duration-300 ease-in-out flex items-center gap-4 ">
                      {key}
                    </div>
                    <div className="font-normal text-xl flex gap-6">
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
      <div className="w-full h-full flex-wrap gap-4 justify-between mb-3 hidden" id="Startups_Mobile">
      <div className="text-2xl font-bold">
          Startups and Innovators :
        </div>
      {
        Menus["Startups and Innovators"].map((item,index)=>{
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
              <div key={index} className="ml-3">
                {Object.keys(item).map((key, subIndex) => (
                  <div key={subIndex}>
                    <div className="font-bold text-2xl transition duration-300 ease-in-out flex items-center gap-4 ">
                      {key}
                    </div>
                    <div className="font-normal text-xl flex flex-col gap-6 mt-3">
                      {item[key].map((subItem, subSubIndex) => (
                        <Link
                          href={`/${slugify(subItem)}`}
                          // onClick={() => {toggleSidebar()}}
                          key={subSubIndex}
                          className="hover:text-orange-500 transition duration-300 ease-in-out flex"
                        >
                          {subItem}
                          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={32}
                  height={32}
                  fill="currentColor"
                  className="bi bi-arrow-right ml-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
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
      <div className="w-full h-full  flex-col flex-wrap gap-4 justify-between mb-3 hidden" id="Ecosystem_Mobile">
        <div className="text-2xl font-bold">
          Ecosystem :
        </div>
      {
        Menus["Ecosystem"].map((item,index)=>{
          if (typeof item === "string") {
            return (
              <Link
              href={`/${slugify(item)}`}
                key={index}
                // onClick={() => {toggleSidebar()}}
                className="font-medium text-xl hover:text-orange-500 transition duration-300 ml-4 ease-in-out flex items-center gap-4"
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
                    <div className="font-bold text-4xl transition duration-300 ease-in-out flex items-center gap-4">
                      {key}
                    </div>
                    <div className="font-normal text-2xl flex gap-6 mt-3">
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
        {/* {Menus[title].map((item, index) => (
          item != 'Funding' ? (
          <Link
            href={`/${slugify(item)}`}
            key={index}            
            className={`font-bold sm:text-2xl text-3xl flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
          >
            {item}
          </Link>
           ) : (
            <div            
            key={index}
            className={`cursor-pointer font-bold sm:text-2xl text-3xl flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
            onClick={() => {              
                setSelectedMenuPhone("Benefits Available");
                const element = document.getElementById(
                  "SideBarSubMenu3Mobile"
                );
                if (element) {
                  element.classList.remove("hidden");
                }              
            }}
          >
            {item}            
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
           )
        ))} */}
      </div>
      {/* {selectedMenuPhone && <SideBarSubMenu3Mobile title={selectedMenuPhone} />} */}
    </section>
  );
}

export default SideBarSubMenu2Mobile;
