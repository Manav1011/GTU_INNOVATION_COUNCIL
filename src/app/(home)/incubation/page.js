async function IncubationForm() {
  return (
    <div className="h-full mt-12 ">
      <div className="mx-5 pt-12 text-center">
        <span className="text-3xl sm:text-5xl" style={{ fontFamily: "Azonix" }}>
          Incubation Form
        </span>
        <span
          className="block mt-3 text-md sm:text-xl"
          style={{ fontFamily: "variable" }}
        >
          Welcome To GISC! Please follow the steps to begin your incubation
          journey with us.
        </span>
      </div>
      <form className="flex h-full justify-center w-full">
        <div className="mt-5 rounded-lg shadow w-full mx-5 lg:sm-10 sm:mx-24">
          <div className="flex">
            <div className="flex-1 py-5 pl-5 overflow-hidden">
              <svg
                className="inline"
                height="30"
                viewBox="0 0 24 24"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>

              <h1 className="inline text-2xl font-semibold ">
                Fill Personal Information
              </h1>
            </div>
          </div>
          <div className="px-5 pb-5">
            <input
              placeholder="Startup's / Company's Name (required)"
              type="text"
              className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              required
            />
            <select
              id="nearest-city"
              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              defaultValue={""}
            >
              <option>Select Nearest City</option>
              <option value="amd">Ahmedabad</option>
              <option value="vs">Vadodara</option>
              <option value="sr">Surat</option>
              <option value="rj">Rajkot</option>
              <option value="mh">Mehsana</option>
            </select>
            <div className="mt-10 flex flex-wrap flex-col sm:flex-row justify-between">
              <input
                placeholder="Founders's Name (required)"
                type="text"
                className=" text-black placeholder-gray-600 sm:w-1/2 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                required
              />
              <input
                placeholder="Founders's Email (required)"
                type="email"
                className=" text-black placeholder-gray-600 sm:w-1/5 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                required
              />
              <input
                placeholder="Founders's Contact No. (required)"
                type="email"
                className=" text-black placeholder-gray-600 sm:w-1/5 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                required
              />
            </div>
            <div className="mt-10 flex flex-wrap flex-col sm:flex-row justify-between">
              <input
                placeholder="Co-Founders's Name"
                type="text"
                className=" text-black placeholder-gray-600 sm:w-1/2 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                placeholder="Co-Founders's Email"
                type="email"
                className=" text-black placeholder-gray-600 sm:w-1/5 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                placeholder="Co-Founders's Contact No."
                type="email"
                className=" text-black placeholder-gray-600 sm:w-1/5 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
            </div>
            <input
              placeholder="Size Of The Team (required)"
              type="number"
              className="mt-10 text-black placeholder-gray-600 w-full px-4 py-2.5 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              required
            />
            <select
              id="idea-domain"
              className="mt-10 text-black placeholder-gray-600 w-full px-4 py-2.5 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              defaultValue={""}
              required
            >
              <option>Select Domain Of Your Idea</option>
              <option value="Advertising and Branding">
                Advertising and Branding
              </option>
              <option value="Agricultural">Agricultural</option>
              <option value="Agricultural and allied science">
                Agricultural and allied science
              </option>
              <option value="Agricultural Technology">
                Agricultural Technology
              </option>
              <option value="Agri-tech">Agri-tech</option>
              <option value="AR">AR</option>
              <option value="Architecture">Architecture</option>
              <option value="Automobile">Automobile</option>
              <option value="Bakery">Bakery</option>
              <option value="BigData">BigData</option>
              <option value="BigData Analytics">BigData Analytics</option>
              <option value="Bio Related Producst/Services">
                Bio Related Producst/Services
              </option>
              <option value="Bio Science">Bio Science</option>
              <option value="Bio Technology">Bio Technology</option>
              <option value="BioTech">BioTech</option>
              <option value="Business Development Startup">
                Business Development Startup
              </option>
              <option value="Chemical">Chemical</option>
              <option value="Chemical Industry with ICT across industries">
                Chemical Industry with ICT across industries
              </option>
              <option value="CIVIL">CIVIL</option>
              <option value="CleanTech">CleanTech</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Communication Technology">
                Communication Technology
              </option>
              <option value="Computer">Computer</option>
              <option value="Cosmetic Science">Cosmetic Science</option>
              <option value="Defence">Defence</option>
              <option value="Dental Science">Dental Science</option>
              <option value="Different Domain of Engineering">
                Different Domain of Engineering
              </option>
              <option value="E-Agriculture">E-Agriculture</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Educated &amp; E-Governance (MSME)">
                Educated &amp; E-Governance (MSME)
              </option>
              <option value="Education">Education</option>
              <option value="Energy">Energy</option>
              <option value="Engineering">Engineering</option>
              <option value="Engineering (IT,Computer,EC,Mechanical,Chemical,Electrical)">
                Engineering (IT,Computer,EC,Mechanical,Chemical,Electrical)
              </option>
              <option value="Environment">Environment</option>
              <option value="E-Retail">E-Retail</option>
              <option value="Fintech">Fintech</option>
              <option value="Food">Food</option>
              <option value="Food Processing">Food Processing</option>
              <option value="Food Tech">Food Tech</option>
              <option value="Health">Health</option>
              <option value="Health Education">Health Education</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Healthcare Services and Products">
                Healthcare Services and Products
              </option>
              <option value="Herbal Technology">Herbal Technology</option>
              <option value="Information Communication Technology">
                Information Communication Technology
              </option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="IOT">IOT</option>
              <option value="IT">IT</option>
              <option value="Life Science">Life Science</option>
              <option value="Light Technology">Light Technology</option>
              <option value="Logistics">Logistics</option>
              <option value="Management">Management</option>
              <option value="Management Service">Management Service</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Mobile">Mobile</option>
              <option value="Mobile Enabled Services">
                Mobile Enabled Services
              </option>
              <option value="Pharmaceutical">Pharmaceutical</option>
              <option value="Pharmaceutical Sciences">
                Pharmaceutical Sciences
              </option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Physiotherapy">Physiotherapy</option>
              <option value="Product Design">Product Design</option>
              <option value="Product Development">Product Development</option>
              <option value="Renewable Energy">Renewable Energy</option>
              <option value="Robotics">Robotics</option>
              <option value="Skill Development">Skill Development</option>
              <option value="SMAR">SMAR</option>
              <option value="Social">Social</option>
              <option value="Social Entrepreneurship">
                Social Entrepreneurship
              </option>
              <option value="Social Ventures with Design or ICT Interventions">
                Social Ventures with Design or ICT Interventions
              </option>
              <option value="Supply Chain">Supply Chain</option>
              <option value="Technology">Technology</option>
              <option value="Technology and Design">
                Technology and Design
              </option>
              <option value="Technology based Startups">
                Technology based Startups
              </option>
              <option value="Veterinary">Veterinary</option>
              <option value="Water">Water</option>
              <option value="Biomedical devices">Biomedical devices</option>
              <option value="Medtech">Medtech</option>
            </select>
            <textarea
              maxLength="5000"
              placeholder="Idea Description Under 5000 Characters (required)"
              className="mt-2 text-black placeholder-gray-600 w-full px-4 py-2.5 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
          </div>
          <div className="flex">
            <div className="flex-1 py-5 pl-5 overflow-hidden">
              <svg
                className="inline align-text-top"
                width={21}
                height="20.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0" />
              </svg>
              <h1 className="inline text-2xl font-semibold leading-none">
                Download -&gt; Fill &gt; Upload
              </h1>
            </div>
            <div className="flex-none pt-2.5 pr-2.5 pl-1" />
          </div>
          <div className="px-5 pb-5">
            <span className="text-lg block">
              i] Download the incubation form -{" "}
              <a href="incubation"> from here</a>
            </span>
            <span className="text-lg block mt-2">
              ii] Fill the form neat & clean{" "}
            </span>
            <span className="text-lg block mt-2">
              iii] Upload Filled Incubation form PDF here. (required){" "}
            </span>
            <input
              type="file"
              name="file-input"
              id="file-input"
              className="mt-2 block w-full border shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-300 text-black file:me-4 file:border-0 file:py-3 file:px-4 file:bg-gray-200 file:text-black"
              placeholder="Upload the incubation form"
              accept=".pdf"
              required
            />
          </div>
          <div className="flex">
            <div className="flex-1 py-5 pl-5 overflow-hidden">
              <svg
                className="inline align-text-top"
                width={21}
                height="20.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0" />
              </svg>
              <h1 className="inline text-2xl font-semibold leading-none">
                Upload Necessary Documents
              </h1>
            </div>
            <div className="flex-none pt-2.5 pr-2.5 pl-1" />
          </div>
          <div className="px-5 pb-5">
            <span className="text-lg block mt-2">
              =&gt; Aadharcard of Founder (required){" "}
            </span>
            <input
              type="file"
              name="file-input"
              id="file-input"
              className="mt-2 block w-full border shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-300 text-black file:me-4 file:border-0 file:py-3 file:px-4 file:bg-gray-200 file:text-black"
              placeholder="Upload the incubation form"
              required
              accept=".pdf"
            />
          </div>
          <hr className="mt-4" />
          <div className="flex flex-row-reverse p-3">
            <div className="flex-initial pl-3">
              <button                
                className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                type='submit'
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path
                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                    opacity=".3"
                  />
                  <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
                </svg>
                <span className="pl-2 mx-1">Submit</span>
              </button>
            </div>
            <div className="flex-initial">
              <button
                type="reset"
                className="flex items-center px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md  hover:bg-red-200 hover:fill-current hover:text-red-600  focus:outline-none  transition duration-300 transform active:scale-95 ease-in-out"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M8 9h8v10H8z" opacity=".3" />
                  <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z" />
                </svg>
                <span className="pl-2 mx-1">Clear</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default IncubationForm;
