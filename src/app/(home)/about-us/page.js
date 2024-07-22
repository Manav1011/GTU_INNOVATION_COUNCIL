import ThirdFold from "./components/ThirdFold";
import FourthFold from "./components/FourthFold";
import SecondFoldAlt from "./components/SecondFoldAlt";
import FirstFoldAlt from "./components/FirstFoldAlt";

async function page() {  
  return (
    <>    
      <div className="flex" id="about-us-container">
        <div className="flex flex-col w-full">
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
