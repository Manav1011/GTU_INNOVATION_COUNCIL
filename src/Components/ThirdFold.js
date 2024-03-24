'use client'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import OurSupport from "./OurSupport";
import WhyGIC from "./WhyGIC";
import OurGoalsCard from "./OurGoalsCard";
import OurOfferings from "./OurOfferings";

function ThirdFold() {
  return (
    <div
      className="h-screen bg-gradient-to-b sm:bg-gradient-to-r from-slate-100 to-slate-400"
      id="thirdfold"
      style={{        
        backgroundAttachment: "fixed",    
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",        
      }}
    >
      <Parallax
        pages={3}
        className=""
        style={{height:'100vh'}}
      >
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          className="h-screen"
        >
        <WhyGIC/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} className="sm:pr-10">
          <div className="w-full sm:w-1/3 sm:float-right">
            <div className="px-10 sm:px-0 min-h-screen flex flex-col justify-end sm:justify-center relative overflow-hidden sm:py-12">
            <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">Goals.</span></h1>
              <div className="max-w-7xl">
                <div className="relative group">
                  <div className="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <OurGoalsCard content={'Nurture Creativity'}/>
                    <OurGoalsCard content={'Collaboration'}/>
                    <OurGoalsCard content={'Successful Startup'}/>
                </div>              
            </div>
          </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} className="sm:pr-10">
        <div className="w-full sm:w-1/3 sm:float-right">
            <div className="px-10 sm:px-0 min-h-screen flex flex-col justify-end sm:justify-center relative overflow-hidden sm:py-12">
            <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">Support.</span></h1>
              <OurSupport/>
          </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5} className="sm:pr-10">
        <div className="w-full sm:w-1/3 sm:float-right">
            <div className="px-10 sm:px-0 min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12">
            <h1 className="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">Offerings.</span></h1>
              <OurOfferings/>
          </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ThirdFold;
