import Link from "next/link";
import Navigation from './client/Navigation'
function SideBarSubMenu3Mobile() {
   function slugify(text) {
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')         // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\-\-+/g, '-')       // Replace multiple - with single -
      .replace(/^-+/, '')           // Trim - from start of text
      .replace(/-+$/, '');          // Trim - from end of text
  }
  
  const Menus = {
    "Benefits Available": ["Incubation", "Funding", "IPR Support", "Co Working Facilities", "Resources", "Lab Facilities" , "Market Access and Networking"],
  };
  return (
    <section
      className="z-20 w-full fixed h-[100dvh] overflow-y-scroll overflow-x-hidden hidden text-zinc-600 bg-black FadeINQuick flex-col justify-start items-start sm:pt-4 pt-28"
      id="SideBarSubMenu3Mobile"
    >
      
      <div
        className="flex h-full flex-col px-4 sm:mx-0 w-full"
        style={{ fontFamily: "AvenirLight" }}
      >
        <div
        className="flex gap-6 items-center justify-center  w-full font-bold text-xl ml-5 text-slate-500 cursor-pointer mb-5"
        id = "close_sub_nav_btn"
        
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
        <div className="w-full h-full flex-col justify-center items-center flex-wrap gap-5  mb-3 hidden BottomTOUpQuick" id="Benefits">
      {
        Menus["Benefits Available"].map((item,index)=>{
          if (typeof item === "string") {
            return (
              <Link
              href={`/${slugify(item)}`}
                key={index}
                // onClick={() => {toggleSidebar()}}
                className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white  ml-3  transition flex items-center gap-4"
              >
                {item}
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
                          className="sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-5xl ease-in duration-200 hover:text-white  ml-3  transition flex items-center gap-4"
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
      <Navigation></Navigation>
    </section>
  );
}

export default SideBarSubMenu3Mobile;
