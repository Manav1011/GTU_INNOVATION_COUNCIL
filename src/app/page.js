import MainGraphic from "@/Components/FirstFold/layout";
import ScrollListener from "@/Components/Client/ScrollListener";
// import SecondFold from "@/Components/SecondFold/layout";
import ThirdFoldAlt from "@/Components/ThirdFold/ThirdFoldAlt";
// import ThirdFold from "@/Components/ThirdFold/layout";
// import FourthFold from "@/Components/FourthFold/layout";
import FifthFold from "@/Components/FifthFold/layout";
// import SixthFold from "@/Components/SixthFold/layout";
// import SecondFoldAlt from "@/Components/SecondFold/layout_alt";
// import SeventhFold from "@/Components/SeventhFold/layout";
// import CarouselScrollListener from "@/Components/Client/CarouselScrollListener";
import SecondFoldAlt from "@/Components/SecondFold/SecondFoldAlt";
import FourthFoldALT from "@/Components/FourthFold/FourthFoldALT";
import IntersectionTransitions from "@/Components/Client/IntersectionTransitions";
import Preloaders from "@/Components/Client/Preloaders";
import NavBarLatest from "@/Components/Globals/NavBar/NavBarLatest";
import Footer from "@/Components/Globals/Footer/Footer";
import GlobalRouteListener from "./GlobalRouteListener";
import NavScrollListener from "@/Components/Client/NavScrollListener";

export default function Home() {
  return (
    <>
    {/* <Preloaders/>    */}
      <NavBarLatest/>            
      <MainGraphic/> 
      {/* <SixthFold/> */}
      <SecondFoldAlt/>
      {/* <SecondFoldAlt/> */}
      <ThirdFoldAlt/>             
      <FifthFold/>
      {/* <FourthFold/> */}
      <FourthFoldALT/>
      {/* <SeventhFold/> */}
      {/* <SecondFold/> */}
      {/* <>
      </> */}      
      <ScrollListener/>       
      <IntersectionTransitions/>
      <Footer/>   
      <NavScrollListener/>
      <GlobalRouteListener/>
       {/* <CarouselScrollListener/> */}
    </>
  );
}
