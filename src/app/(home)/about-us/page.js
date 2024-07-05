import ThirdFold from "./components/ThirdFold";
import FourthFold from "./components/FourthFold";
import SecondFoldAlt from "@/app/(home)/about-us/components/SecondFoldAlt";
import FirstFoldAlt from "./components/FirstFoldAlt";


async function page() {  
  return (
    <>
      <div className="flex" id="about-us-container">
        <div className="flex flex-col w-full bg-black backdrop-blur-md">
            <div className="w-full h-full overflow-scroll " id="about-us-section" >
              <FirstFoldAlt />
              <SecondFoldAlt />
              <ThirdFold/>
              <FourthFold/>
            </div>        
          </div>        
      </div>      
    </>
  );
}

export default page;
