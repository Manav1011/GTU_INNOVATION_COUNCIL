import Link from "next/link";

function SideBarSubMenu3Mobile({ title }) {
  const toggleSidebar = async () => {
    let NavigationSidebar = document.getElementById("NavigationSidebar");    
    NavigationSidebar.classList.toggle("hidden");    
    document.getElementById("NavTogglerOpen").classList.toggle('hidden')
    document.getElementById("NavTogglerClosed").classList.toggle('hidden')
  };
   function slugify(text) {
    return text.toString().toLowerCase().trim()
      .replace(/\s+/g, '-')         // Replace spaces with -
      .replace(/[^\w\-]+/g, '')     // Remove all non-word chars
      .replace(/\-\-+/g, '-')       // Replace multiple - with single -
      .replace(/^-+/, '')           // Trim - from start of text
      .replace(/-+$/, '');          // Trim - from end of text
  }
  const HideTheThirdSubMenu = async () => {
    document.getElementById("SideBarSubMenu3Mobile").classList.add("hidden");
  };
  const Menus = {
    funding: ["SSIP", "Nodal Institute", "DIC", "AIC", "TBI"],
  };
  return (
    <section
      className="z-20 w-full top-0 fixed h-screen overflow-y-scroll overflow-x-hidden sm:hidden sm:w-1/4 bg-zinc-300 flex flex-col gap-10 justify-start sm:justify-center items-start sm:pt-14 pt-28"
      id="SideBarSubMenu3Mobile"
    >
      <div
        className="flex gap-6 items-center font-bold text-xl ml-5 text-slate-500 cursor-pointer"
        onClick={() => {
          HideTheThirdSubMenu();
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
        className="flex flex-col gap-10 mx-4 sm:mx-0 w-full"
        style={{ fontFamily: "OSWALD" }}
      >
        {Menus[title].map((item, index) => (
          <Link
            href={`/${slugify(item)}`}
            key={index}
            onClick={() => {toggleSidebar()}}
            className={`font-bold sm:text-2xl text-3xl flex items-center justify-between sm:justify-center transition duration-300 ease-in-out`}
          >
            {item}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SideBarSubMenu3Mobile;
