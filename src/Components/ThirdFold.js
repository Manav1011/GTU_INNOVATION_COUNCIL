'use client'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import OurSupport from "./OurSupport";
import WhyGIC from "./WhyGIC";
import OurGoalsCard from "./OurGoalsCard";
import OurOfferings from "./OurOfferings";

function ThirdFold() {
  return (
    <div
      className="h-screen bg-gradient-to-tr from-lime-400 via-emerald-500 to-teal-700"
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
        style={{height:'101vh'}}
      >
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          className="h-screen"
        >
        <WhyGIC/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1} className="pr-10">
          <div className="sm:w-1/3 float-right">
            <div class="min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12">
            <h1 class="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">Goals.</span></h1>
              <div class="max-w-7xl">
                <div class="relative group">
                  <div class="absolute -inset-1  rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <OurGoalsCard content={'Nurture Creativity'}/>
                    <OurGoalsCard content={'Collaboration'}/>
                    <OurGoalsCard content={'Successful Startup'}/>
                </div>              
            </div>
          </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} className="pr-10">
        <div className="sm:w-1/3 float-right">
            <div class="min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12">
            <h1 class="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">Support.</span></h1>
              <OurSupport/>
          </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} className="pr-10">
        <div className="sm:w-1/3 float-right">
            <div class="min-h-screen flex flex-col justify-center relative overflow-hidden sm:py-12">
            <h1 class="mb-4 text-3xl font-extrabold text-white md:text-5xl lg:text-6xl">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">Offerings.</span></h1>
              <OurOfferings/>
          </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ThirdFold;
