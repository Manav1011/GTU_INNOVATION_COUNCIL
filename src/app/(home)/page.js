import MainGraphic from "@/Components/FirstFold/layout";
import ScrollListener from "@/Components/Client/ScrollListener";
import SecondFold from "@/Components/SecondFold/layout";
import ThirdFold from "@/Components/ThirdFold/layout";
import FourthFold from "@/Components/FourthFold/layout";
import FifthFold from "@/Components/FifthFold/layout";
import SixthFold from "@/Components/SixthFold/layout";
import SeventhFold from "@/Components/SeventhFold/layout";

export default function Home() {
  return (
    <>   
    <ScrollListener/>       
      <MainGraphic/> 
      <>
      <SecondFold/>
      <ThirdFold/>             
      <FourthFold/>
      <FifthFold/>
      <SixthFold/>
      <SeventhFold/>
      </>
    </>
  );
}
