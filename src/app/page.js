import MainGraphic from "@/Components/MainGraphic";
import ScrollListener from "@/Components/Client/ScrollListener";
import SecondFold from "@/Components/SecondFold";
import ThirdFold from "@/Components/ThirdFold";
import FourthFold from "@/Components/FourthFold";

export default function Home() {
  return (
    <>   
    <ScrollListener/>       
      <MainGraphic/> 
      <>
      <SecondFold/>
      <ThirdFold/>            
      </>
    </>
  );
}
