import Image from "next/image";
export default function MainGraphic() {
  return (
    <section>

    <div id="firstfold">
      <div
        className="flex flex-col sm:hidden"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage:
            "url('/images/backgrounds/GTU_CAMPUS_POTRAIT_4.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >    
        <div
          className="h-full w-full flex flex-col backdrop-filter"
          style={{ backdropFilter: "blur(1px)",}}
        >
          <div className="pt-40 z-10 bg-white slide-right mb-2 text-center bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 mx-3">
            <h1
              className=" text-black my-2 leading-10 sm:leading-1 font-bold"
              style={{ fontFamily: "Azonix" ,fontSize:'3em'}}
            >
              Igniting Innovation
            </h1>
            <h1
              className="text-slate-500 my-2 leading-10 sm:leading-1 text-md font-bold"
              style={{ fontFamily: "Azonix",fontSize:'1.2em'}}
            >
              Empowering Entrepreneurs
            </h1>
            <div
              className="font-semibold	sm:font-normal text-slate-400 "
              style={{ fontFamily: "OSWALD",fontSize:'1em'}}
            >
              Welcome to the Gateway of Opportunities at GTU Innovation Council
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden sm:flex backdrop-filter bg-opacity-5"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url('/images/backgrounds/GTU_CAMPUS_6.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
      <link rel="preload" href="/images/backgrounds/GTU_CAMPUS_6.webp" as="image" />
        <div
          className="h-full w-full flex flex-col bg-gray-900  backdrop-filter bg-opacity-20  justify-end items-start"
          style={{ backdropFilter: "blur(1px)" }}
        >
          <div className="slide-right bg-gray-900 mb-2 text-left bg-clip-padding backdrop-filter rounded-r-full backdrop-blur-sm bg-opacity-75 p-10">
            <h1
              className="text-orange-500 my-2 leading-10 sm:leading-1 text-4xl font-bold"
              style={{ fontFamily: "Azonix" }}
            >
              Igniting Innovation
            </h1>
            <h1
              className="text-slate-300 my-2 leading-10 sm:leading-1 text-4xl font-bold"
              style={{ fontFamily: "Azonix" }}
            >
              Empowering Entrepreneurs
            </h1>
            <div
              className="font-semibold	sm:font-normal text-green-500 text-2xl"
              style={{ fontFamily: "dosislight" }}
            >
              Welcome to the Gateway of Opportunities at GTU Innovation Council
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
