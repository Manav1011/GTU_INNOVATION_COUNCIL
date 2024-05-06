import FirstFold from "./components/FirstFold"
import SecondFold from "./components/SecondFold"
import ScrollListener from "./client/ScrollListener"
import ThirdFold from "./components/ThirdFold"
import FourthFold from "./components/FourthFold"

async function page() {  
  return (
    <>    
    <div className="flex overflow-scroll" id="about-us-container">
    <div className="flex flex-col">
        <FirstFold/>    
        <SecondFold/>    
        <ThirdFold/>
        <FourthFold/>
        <ScrollListener/>        
    </div>          
    </div>
    </>
  )
}

export default page