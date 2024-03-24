import MainGraphic from "@/Components/MainGraphic";
import ScrollListener from "@/Components/Client/ScrollListener";
import SecondFold from "@/Components/SecondFold";
import ThirdFold from "@/Components/ThirdFold";

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
