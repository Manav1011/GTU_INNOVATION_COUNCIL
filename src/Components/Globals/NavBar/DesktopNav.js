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
              <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'GIC Club'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Sankuls'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Design Thinking'}/>              
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'CiC3'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'IPR'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Ideathon21'}/> 
            </li>
            <li>
              <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'GTU Motorsports'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Incubator'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Awards'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICVerticalsDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Student Associateship Program'}/>              
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
              <NavLink parentDiv={'OurSupportDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Allied Support'}/>
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
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'SSIP'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Nodal Institute'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'DIC'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'AIC'}/>
                    </li>
                    <li>
                    <NavLink parentDiv={'FundingDropdown'} SecondParent={'OurSupportDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'TBI'}/>                      
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
            <NavLink parentDiv={'GICStartupDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'GIC Startup Mart'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICStartupDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Startup Stories'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICStartupDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'SSIP Startup List'}/>
            </li>
            <li>
            <NavLink parentDiv={'GICStartupDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Nodal Institute Startup'}/>
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
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'MOOCs'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'MSTE'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'OSTE'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Case Studies'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'BLOG'}/>
            </li>
            <li>
            <NavLink parentDiv={'ResourceBankDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Books Generals'}/>
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
              <NavLink parentDiv={'LatestDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Career'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Upcoming Event List'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Upcoming Classic Event'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Circulars'}/>
            </li>
            <li>
            <NavLink parentDiv={'LatestDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Reports'}/>
            </li>
            <li>            
            <NavLink parentDiv={'LatestDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Utility Forms'}/>
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
              <NavLink parentDiv={'StartupApplyDropdown'} href={"/incubation"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Incubation Form'}/>
            </li>
            <li>
              <NavLink parentDiv={'StartupApplyDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Apply Under Nodal Institute'}/>              
            </li>
            <li>
            <NavLink newPage={true} parentDiv={'StartupApplyDropdown'} href={"https://docs.google.com/forms/d/e/1FAIpQLScXect1CjLrHwE20g4umPqjBNNpA9RoO5CrIEy1R25zxhdgYQ/viewform"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Apply Under SSIP'}/>
            </li>
            <li>
            <NavLink newPage={true} parentDiv={'StartupApplyDropdown'} href={"https://web.archive.org/web/20210629165925/https://docs.google.com/forms/d/1vUVBc2XchnSE94IMAWq16t8c25v7Mpr1Y-nXZh7uiJA/viewform?edit_requested=true"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Apply Under TBI'}/>
            </li>
            <li>
            <NavLink parentDiv={'StartupApplyDropdown'} href={"/"} classList={'block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md '} title={'Startup Gallery'}/>
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