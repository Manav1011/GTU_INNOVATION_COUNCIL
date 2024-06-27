import ReginalCenter from "./components/ReginalCenter";

async function page() {
  return (
    <>
      <div className="flex justify-center flex-col items-center  sm:pt-12 pt-12">
        {/* COMPONENT CODE */}
        <div className="container min-h-screen sm:mx-auto my-4 mx-4 sm:px-4 lg:px-20">
          <div className="w-full sm:p-8 p-4 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1
                className="font-bold uppercase lg:text-5xl sm:text-4xl text-2xl"
                style={{ fontFamily: "Azonix" }}
              >
                Send us a message
              </h1>
            </div>
            <form>
            <div className="grid grid-cols gap-5 md:grid-cols-2 mt-5">
              <input
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                type="text"
                placeholder="Last Name*"
                required
              />
              <input
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                type="number"
                placeholder="Phone*"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                defaultValue={""}
                required
              />
            </div>
            <div className="my-2 ">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-slate-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
            </form>
            
          </div>
          <div className="bottomUPContent w-full lg:-mt-96 lg:w-2/6 px-8 py-10 ml-auto bg-slate-900 rounded-2xl">
            <div className="flex flex-col text-white">
              <h1 className="font-bold uppercase text-4xl my-4">
                Licensing Officer
              </h1>
              <span className="text-2xl">GTU Innovation & Startup Center</span>
              <div>
                <p className="font-bold mt-5">
                  Prof. (Dr.) Sanjay Chauhan - Director
                </p>
                <p className="font-medium">Email : director.gic@gtu.edu.in</p>
              </div>
              <div>
                <p className="font-bold mt-5">Mr. Tushar Panchal - CEO-GISC</p>
                <p className="font-medium">Email : ceo_gisc@gtu.edu.in</p>
              </div>
              <div className="flex my-10">
                <div className="flex flex-col">
                  <h2 className="text-2xl">GTU Innovation Council</h2>
                  <p className="text-gray-200 text-xl my-2">Ahmedabad</p>
                  <p className="text-gray-400 text-sm mt-4">
                    Acedamic block 2, GTU- GISC office, GTU innovation council, VGEC College Campus, Chandkheda, Ahmedabad 382424
                    <br />
                    Email : startupni@gtu.edu.in | ssipgtu@gtu.edu.in
                    <br />
                    Phone : 079-26316000
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="text-center pt-12">
        <h1 className="font-bold uppercase lg:text-5xl sm:text-4xl text-2xl" style={{ fontFamily: "Azonix" }}> Regional Center</h1>
        <div className="grid my-4 border-gray-200 rounded-lg shadow-sm md:grid-cols-2">
           <ReginalCenter city={'Vadodara'} address={'GTU Innovation and Startup Centre, Technical High School Campus, Opposite Santadevi Nursing House, Dandia Bazar, Dandia Bazar, Vadodara, Gujarat 390001.'} ph_no={'265 2415500'}/>
           <ReginalCenter city={'Surat'} address={'GTU Innovation and Startup Centre, 1st Floor, Amenities Block, Dr. S. S. Gandhy College Campus, Majura Gate, Surat, Gujarat 395001.'} ph_no={'261 2660603 / 602'}/>
           <ReginalCenter city={'Rajkot'} address={'GTU Innovation and Startup Centre, AVPTI Campus, Opp. Hemu Gadhvi Hall, Tagore Road, Rajkot, 360001.'} ph_no={'0281 2464964 / 56'}/>
           <ReginalCenter city={'Mehsana'} address={'GTU Innovation and Startup G9GP+PVH, Near Mevad Toll-booth, Ahmedabad, Express Highway, Mehsana, Gujarat 382710.'}/>
        </div>
        </div>

      </div>
    </>
  );
}

export default page;
