import NavLink from "./NavLink"
async function DesktopNav() {
  return (
    <div
    className="hidden lg:ml-6 lg:flex items-center"
    id="nav-menus-desktop"
  >
    <div className="flex space-x-10">
      <div>
        <NavLink
          classList="text-slate-800 rounded-md  text-md font-semibold"
          title={"GIC Verticals"}
          dropdown={"GICVerticalsDropdown"}
          href={false}
        />
        <div
          id="GICVerticalsDropdown"
          className="hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                GIC Club
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Sankuls
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Design Thinking
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                CiC3
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                IPR
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Ideathon21
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                GTU Motorsports
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Incubator
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Awards
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Student Associateship Program
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div>
        <NavLink
          classList="text-slate-800 rounded-md  text-md font-semibold"
          title={"Our Support"}
          dropdown={"OurSupportDropdown"}
          href={false}
        />
        <div
          id="OurSupportDropdown"
          className="hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Allied Support
              </a>
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
                  className="hidden ml-56 z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
                >
                  <ul
                    className="text-sm"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md ">
                        SSIP
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                        Nodal Institute
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                        DIC
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                        AIC
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-3 hover:bg-slate-200 hover:text-black rounded-md">
                        TBI
                      </a>
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
          classList="text-slate-800 rounded-md  text-md font-semibold"
          title={"GIC Startup"}
          dropdown={"GICStartupDropdown"}
          href={false}
        />
        <div
          id="GICStartupDropdown"
          className="hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md ">
                GIC Startup Mart
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Startup Stories
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                SSIP Startup List
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Nodal Institute Startup
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
      
      <NavLink
        classList="text-slate-800 rounded-md  text-md font-semibold"
        title={"Resource Bank"}
        dropdown={"ResourceBankDropdown"}
        href={false}
      />
       <div
          id="ResourceBankDropdown"
          className="hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md ">
                MOOCs
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                MSTE
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                OSTE
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                BLOG
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Books Generals
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <NavLink
        classList="text-slate-800 rounded-md  text-md font-semibold"
        title={"Latest"}
        dropdown={"LatestDropdown"}
        href={false}
      />
        <div
          id="LatestDropdown"
          className="hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md ">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Upcoming Event List
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Upcoming Classic Event
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Circulars
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Utility Forms
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
       <NavLink
        classList="text-slate-800 rounded-md  text-md font-semibold"
        title={"Apply"}
        dropdown={"StartupApplyDropdown"}
        href={false}
      />
      <div
          id="StartupApplyDropdown"
          className="hidden z-10 navdropdowns absolute font-normal bg-opacity-70 bg-gray-800 text-slate-100 mt-2 divide-y rounded-lg shadow min-w-56"
        >
          <ul
            className="text-sm"
            aria-labelledby="dropdownLargeButton"
          >
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md ">
                Incubation Form
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Apply Under Nodal Institute
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Apply Under SSIP
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Apply Under TBI
              </a>
            </li>
            <li>
              <a href="#" className="block px-4  py-3 hover:bg-slate-200 hover:text-black rounded-md">
                Startup Gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <NavLink
        classList="text-slate-800 rounded-md  text-md font-semibold"
        title={"Reach US"}
        href={'/reach-us'}                  
      />
    </div>
  </div>
  )
}

export default DesktopNav