export default function MainGraphic() {
  return (
    <section>
    {/* <div
          className="flex flex-col lg2:hidden"
          style={{
            backgroundAttachment: "fixed",
            backgroundImage:
              "url('/images/backgrounds/GTU_CAMPUS_POTRAIT_4.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100dvh",
          }}
        >
          <div
            className="h-full w-full flex flex-col backdrop-filter"
            style={{ backdropFilter: "blur(1px)" }}
          >
            <div className="pt-40 md:pt-60 z-10 bg-white slide-right mb-2 text-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 mx-3">
              <h1
                className=" text-black leading-10 sm:leading-1 font-bold text-2xl xss:text-3xl xs:text-3xl sm:text-4xl md:text-6xl"
                style={{ fontFamily: "Azonix" }}
              >
                Igniting Innovation
              </h1>
              <h1
                className="text-slate-600 mb-2 leading-10 sm:leading-1 text-sm xss:text-lg xs:text-xl md:text-3xl font-bold"
                style={{ fontFamily: "Azonix"}}
              >
                Empowering Entrepreneurs
              </h1>
              <div
                className="font-semibold	sm:font-normal text-slate-400 text-xs xss:text:md xs:text-lg sm:text-2xl"
                style={{ fontFamily: "AvenirLight"}}
              >
                Welcome to the Gateway of Opportunities at GTU Innovation
                Council
              </div>
            </div>
          </div>
        </div> */}
     <div
          className="flex backdrop-filter bg-opacity-5 bg-[url('/images/backgrounds/GTU_CAMPUS_POTRAIT_4.webp')]"
          id="mainGraphicContainer"
          style={{
            backgroundAttachment: "fixed",
            // backgroundImage: "url('/images/backgrounds/GTU_CAMPUS_6.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "100dvh",
          }}
        >
          <div
            className="h-full w-full flex flex-col  lg2:bg-black  backdrop-filter lg2:bg-opacity-80 backdrop-blur-[2px] lg2:backdrop-blur-[5px]"
            // style={{ backdropFilter: "blur(5px)" }}
          >
            <div className="flex mt-40 lg2:mt-0 justify-start lg2:justify-center items-center flex-col h-full w-full text-center">
              <div
                id="MainGraphicHeader"
                className="my-2 leading-10 font-bold w-full"
              >
                <div className="flex items-center flex-col justify-start overflow-hidden">
                  <div className="text-3xl xss:text-4xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-6xl 2xl:text-8xl">
                    <div className="rolling-up-text bottom-up hidden">
                      <span
                        className="text-slate-800 lg2:text-white"
                        style={{ fontFamily: "BebasNeue" }}
                        id="igniting-innovation-span"
                      >
                        Igniting Innovation
                      </span>
                    </div>
                    <div className="rolling-up-text bottom-up hidden">
                      <span
                        className="text-black lg2:text-white"
                        style={{ fontFamily: "BebasNeue" }}
                      >
                        Empowering Enterpreneurs
                      </span>
                    </div>
                    <div className="rolling-up-text bottom-up hidden">
                      <span
                        className="text-black lg2:text-white"
                        style={{ fontFamily: "BebasNeue" }}
                      >
                        Elevating Excellence
                      </span>
                    </div>
                  </div>
                </div>
                <span
                  className="text-slate-700 xss:tracking-wide lg:tracking-wider lg2:text-emerald-200 font-light text-xs xss:text-sm xs:text-sm sm:text-sm lg:text-lg xl:text-3xl 2xl:text-3xl bg-gradient-to-r from-slate-800 to-slate-900 lg2:from-emerald-200 lg2:to-green-500 text-transparent bg-clip-text "
                  id="spare-time"
                  style={{ fontFamily: "oswald" }}
                >
                  Welcome to the Gateway of Opportunities at GTU Innovation
                  Council
                </span>
              </div>
            </div>                                       
          </div> 
        </div>      
    </section>
  );
}
