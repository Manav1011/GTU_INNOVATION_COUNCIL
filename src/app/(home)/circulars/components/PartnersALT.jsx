import Dic_mob_view from "@/Components/SecondFold/Dic_mob_view";
import Idealab_mob_view from "@/Components/SecondFold/Idealab_mob_view";
import IPFS_mob_view from "@/Components/SecondFold/IPFS_mob_view";
import Mic_mob_view from "@/Components/SecondFold/Mic_mob_view";
import NSTEDBE_mob_view from "@/Components/SecondFold/NSTEDBE_mob_view";
import Ssip_mob_view from "@/Components/SecondFold/Ssip_mob_view";

async function PartnerALT() {
  return (
    <div className="bg-white bg-opacity-40 min-h-[100dvh] h-[100dvh] w-full  items-center justify-center lg:flex hidden">
      <div className="flex-col w-full">
        <div className="w-full mt-7 text-center">
          <span className="w-full text-4xl font-bold text-center " style={{ color: "#2C2E90" }}>Incubation Programs</span>
          <p className="pt-2 text-2xl px-5">Handholding at every stage!</p>
        </div>
        <div className="w-full px-3 mb-5" id="carouselContainer">
        <Ssip_mob_view hidden={false}></Ssip_mob_view>
        <Idealab_mob_view hidden={true}></Idealab_mob_view>
        <IPFS_mob_view hidden={true}></IPFS_mob_view>
        <Mic_mob_view hidden={true}></Mic_mob_view>
        <Dic_mob_view hidden={true}></Dic_mob_view>
        <NSTEDBE_mob_view hidden={true}></NSTEDBE_mob_view>
        </div>
      </div>
    </div>
  );
}

export default PartnerALT;
