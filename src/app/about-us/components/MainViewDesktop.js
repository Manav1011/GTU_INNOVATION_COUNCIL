import ThirdFold from "@/app/about-us/components/ThirdFold";
import FourthFold from "@/app/about-us/components/FourthFold";
import SecondFoldAlt from "@/app/about-us/components/SecondFoldAlt";
import FirstFoldAlt from "@/app/about-us/components/FirstFoldAlt";
import ScrollListener from '@/app/about-us/client/ScrollListener'
async function MainViewDesktop() {
  return (
    <section className="h-full w-full flex justify-center items-center bg-slate-200">
      <div className="hidden lg2:flex justify-center w-1/2">
        <div
          className="font-medium sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center about-us-titles PopUP"
          data-title="FirstFoldAboutUs"
          style={{ fontFamily: "AvenirBook" }}
        >        
          WHO WE ARE        
        </div>
        <div
          className="font-medium sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center about-us-titles hidden PopUP"
          data-title="SecondFoldAboutUs"
          style={{ fontFamily: "AvenirBook" }}
        >
          HOW DO WE OPERATE
        </div>
        <div
          className="font-medium sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center about-us-titles hidden PopUP"
          style={{ fontFamily: "AvenirBook" }}
          data-title="ThirdFoldAboutUs"
        >
          OUR MISSION
        </div>
        <div
          className="font-medium sm:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl text-center about-us-titles hidden PopUP"
          style={{ fontFamily: "AvenirBook" }}
          data-title="FourthFoldAboutUs"
        >
          SUPPORTED STARTUPS
        </div>
      </div>
      <div className="lg2:w-1/2 h-[100dvh] overflow-scroll" id="about-us-section-container">
            <FirstFoldAlt />
            <SecondFoldAlt />
            <ThirdFold/>
            <FourthFold/>
      </div>
      <ScrollListener/>
    </section>
  );
}

export default MainViewDesktop;
