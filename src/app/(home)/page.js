import MainGraphic from "@/Components/FirstFold/layout";
import ScrollListener from "@/Components/Client/ScrollListener";
import SecondFold from "@/Components/SecondFold/layout";
import ThirdFold from "@/Components/ThirdFold/layout";
import FourthFold from "@/Components/FourthFold/layout";
import FifthFold from "@/Components/FifthFold/layout";
import SixthFold from "@/Components/SixthFold/layout";
import SecondFoldAlt from "@/Components/SecondFold/layout_alt";
import SeventhFold from "@/Components/SeventhFold/layout";
import CarouselScrollListener from "@/Components/Client/CarouselScrollListener";

export default function Home() {
  return (
    <>   
      <MainGraphic/> 
      <SixthFold/>
      <SecondFoldAlt/>
      <ThirdFold/>             
      <FourthFold/>
      <FifthFold/>
      {/* <SeventhFold/> */}
      {/* <SecondFold/> */}
      {/* <>
      </> */}
      <ScrollListener/>       
       <CarouselScrollListener></CarouselScrollListener>
    </>
  );
}
