import NavLinkMobile from "./NavLinkMobile";
async function MobileNav() {
  return (
    <div className="hidden topToBottom text-slate-50" id="mobile-menu">
      <div className="px-2 pb-3 pt-2 flex flex-col justify-start items-start">
        <NavLinkMobile
          classList="my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
          title={"GIC Verticals"}
          dropdown={true}
          dropdownLinkClass={"gic-verticals-links"}
        />        
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"GIC Club"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"Sankuls"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"Design Thinking"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"CiC3"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"IPR"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"Ideathon21"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"GTU Motorsports"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"Incubator"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"Awards"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-verticals-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 backdrop-filter  hover:bg-gray-700 border-b-2 rounded-md hover:text-white px-3 py-2 text-sm font-semibold"
          title={"Student Associateship Program"}
          href={"/"}
        />


        <NavLinkMobile
          classList="my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"          
          title="Our Support"
          dropdown={true}
          dropdownLinkClass={"our-supports-links"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile our-supports-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Allied Support"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile text-left our-supports-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Funding"}
          dropdown={true}
          dropdownLinkClass={"funds-links"}
          isChildDropdown={true}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile funds-links ml-10 text-slate-200 w-full bg-gradient-to-r from-slate-900 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"SSIP"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile funds-links ml-10 text-slate-200 w-full bg-gradient-to-r from-slate-900 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Nodal Institute"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile funds-links ml-10 text-slate-200 w-full bg-gradient-to-r from-slate-900 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"DIC"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile funds-links ml-10 text-slate-200 w-full bg-gradient-to-r from-slate-900 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"AIC"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile funds-links ml-10 text-slate-200 w-full bg-gradient-to-r from-slate-900 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"TBI"}
          href={"/"}
        />

        <NavLinkMobile
          classList=" my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
          id="teamdetailscontainer"
          title="GIC Startup"
          dropdown={true}
          dropdownLinkClass={"gic-startup-links"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-startup-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"GIC Startup Mart"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-startup-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Startup Stories"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-startup-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"SSIP Startup List"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile gic-startup-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Nodal Institute Startup"}
          href={"/"}
        />


        <NavLinkMobile
          classList="my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
          id="projectssection"
          title="Resource Bank"          
          dropdown={true}
          dropdownLinkClass={"resource-bank-links"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile resource-bank-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"MOOCs"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile resource-bank-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"MSTE"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile resource-bank-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"OSTE"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile resource-bank-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Case Studies"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile resource-bank-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"BLOG"}
          href={"/"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile resource-bank-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Book Generals"}
          href={"/"}
        />




        <NavLinkMobile
          classList="my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
          id="aboutussection"
          title="Latest"
          dropdown={true}
          dropdownLinkClass={"latest-links"}
        />
        <NavLinkMobile
          classList="hidden dropdownlinksmobile latest-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Career"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile latest-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Upcoming Event List"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile latest-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Upcoming Classic Event"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile latest-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Circulars"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile latest-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Reports"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile latest-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Utility Forms"}
          href={"/"}
        />


        <NavLinkMobile
          classList="my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"          
          title="Apply"          
          dropdown={true}
          dropdownLinkClass={"startup-apply-links"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile startup-apply-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Incubation Form"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile startup-apply-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Apply Under Nodal Institute"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile startup-apply-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Apply Under SSIP"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile startup-apply-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Apply Under TBI"}
          href={"/"}
        />
         <NavLinkMobile
          classList="hidden dropdownlinksmobile startup-apply-links ml-3 text-slate-200 w-full bg-gradient-to-r from-slate-800 to-transparent bg-opacity-80 bg-opacity-50 hover:bg-gray-700 hover:text-white border-b-2 rounded-md px-3 py-2 text-sm font-semibold"
          title={"Startup Gallery"}
          href={"/"}
        />
<NavLinkMobile
          classList="my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
          id="aboutussection"
          title="About"
          href={"/about-us"}
        />

        
        <NavLinkMobile
          classList="my-1 text-slate- hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold"
          id="aboutussection"
          title="Reach US"
          href={"/"}
        />
      </div>
    </div>
  );
}

export default MobileNav;
