import NavLink from "./NavLink"
async function DesktopNav() {
  return (
    <div
    className="hidden lg:ml-6 lg:flex items-center"
    id="nav-menus-desktop"
  >
    <div className="flex space-x-8">
      <div>
        <NavLink
          classList="text-slate-700 hover:text-black rounded-md font-semibold"
          title={"GIC Verticals"}
          dropdown={"GICVerticalsDropdown"}
          href={false}
        />
        <div
          id="GICVerticalsDropdown"
          className="parentDropdown hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <NavLink parentDiv={'GICVerticalsDropdown'} href={"/gic-club"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'GIC Club'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/sankuls"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Sankuls'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/design-thinking"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Design Thinking'}/>              
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/cic3"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'CiC3'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/ipr"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'IPR'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/ideathon21"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Ideathon21'}/> 
            </li>
            <li>
              <NavLink parentDiv={'GICVerticalsDropdown'} href={"/gtu-motorsports"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'GTU Motorsports'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/incubator"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Incubator'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/awards"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Awards'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/student-associateship-program"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Student Associateship Program'}/>              
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <NavLink
          classList="text-slate-700 hover:text-black rounded-md   font-semibold"
          title={"Our Support"}
          dropdown={"OurSupportDropdown"}
          href={false}
        />
        <div
          id="OurSupportDropdown"
          className="parentDropdown hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <NavLink parentDiv={'OurSupportDropdown'} href={"/allied-support"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Allied Support'}/>
            </li>
            <li>
              <div>
                <NavLink
                  classList="block px-4 w-full text-left py-3 hover:bg-slate-200 hover:text-black rounded-md"
                  title={"Funding"}
                  dropdown={"FundingDropdown"}
                  isChildDropdown={true}
                  href={false}
                />
                <div
                  id="FundingDropdown"
                  className="parentDropdown hidden ml-56 z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
                >
                  <ul
                    className="text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/ssip"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'SSIP'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/nodal-institutes"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Nodal Institute'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/dic"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'DIC'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/aic"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'AIC'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/tbi"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'TBI'}/>                      
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <NavLink
          classList="text-slate-700 hover:text-black rounded-md   font-semibold"
          title={"GIC Startup"}
          dropdown={"GICStartupDropdown"}
          href={false}
        />
        <div
          id="GICStartupDropdown"
          className="parentDropdown hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
            <NavLink parentDiv={'GICStartupDropdown'} href={"/gic-startup-mart"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'GIC Startup Mart'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICStartupDropdown'} href={"/startup-stories"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Startup Stories'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICStartupDropdown'} href={"/ssip-startup-list"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'SSIP Startup List'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICStartupDropdown'} href={"/nodal-institute-startup"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Nodal Institute Startup'}/>
            </li>
          </ul>
        </div>
      </div>
      <div>
      
      <NavLink
        classList="text-slate-700 hover:text-black rounded-md   font-semibold"
        title={"Resource Bank"}
        dropdown={"ResourceBankDropdown"}
        href={false}
      />
       <div
          id="ResourceBankDropdown"
          className="parentDropdown hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/moc"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'MOOCs'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/mste"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'MSTE'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/oste"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'OSTE'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/case-studies"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Case Studies'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/blog"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'BLOG'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/books-generals"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Books Generals'}/>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <NavLink
        classList="text-slate-700 hover:text-black rounded-md   font-semibold"
        title={"Latest"}
        dropdown={"LatestDropdown"}
        href={false}
      />
        <div
          id="LatestDropdown"
          className="parentDropdown hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <NavLink parentDiv={'LatestDropdown'} href={"/career"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Career'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/upcoming-events"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Upcoming Event List'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/upcoming-classic-events"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Upcoming Classic Event'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/circulars"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Circulars'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/reports"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Reports'}/>
            </li>
            <li>            
            <NavLink parentDiv={'LatestDropdown'} href={"/utility-forms"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Utility Forms'}/>
            </li>
          </ul>
        </div>
      </div>
      <div>
       <NavLink
        classList="text-slate-700 hover:text-black rounded-md   font-semibold"
        title={"Apply"}
        dropdown={"StartupApplyDropdown"}
        href={false}
      />
      <div
          id="StartupApplyDropdown"
          className="parentDropdown hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <NavLink parentDiv={'StartupApplyDropdown'} href={"https://docs.google.com/forms/d/e/1FAIpQLScemptmi9LFonX5U1VyoPwVZ_K7-8EVIcss2op1GdBY9GZ4rw/viewform"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Incubation Form'}/>
            </li>
            <li>
              <NavLink parentDiv={'StartupApplyDropdown'} href={"/apply-under-nodal-institute"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Apply Under Nodal Institute'}/>              
            </li>
            <li>
            <NavLink newPage={true} parentDiv={'StartupApplyDropdown'} href={"https://docs.google.com/forms/d/e/1FAIpQLScXect1CjLrHwE20g4umPqjBNNpA9RoO5CrIEy1R25zxhdgYQ/viewform"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Apply Under SSIP'}/>
            </li>
            <li>
            <NavLink newPage={true} parentDiv={'StartupApplyDropdown'} href={"https://web.archive.org/web/20210629165925/https://docs.google.com/forms/d/1vUVBc2XchnSE94IMAWq16t8c25v7Mpr1Y-nXZh7uiJA/viewform?edit_requested=true"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Apply Under TBI'}/>
            </li>
            <li>
            <NavLink parentDiv={'StartupApplyDropdown'} href={"/startup-gallery"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Startup Gallery'}/>
            </li>
          </ul>
        </div>
      </div>
      <NavLink
        classList="text-slate-700 hover:text-black rounded-md   font-semibold"
        title={"About"}
        href={'/about-us'}                  
      />
      <NavLink
        classList="text-slate-700 hover:text-black rounded-md   font-semibold"
        title={"Reach US"}
        href={'/reach-us'}                  
      />
    </div>
  </div>
  )
}

export default DesktopNav