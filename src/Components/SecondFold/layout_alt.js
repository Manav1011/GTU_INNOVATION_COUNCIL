import DICFold from "./DICFold";
import Dic_mob_view from "./Dic_mob_view";
import IDEALabFold from "./IDEALabFold";
import IPFSFold from "./IPFSFold";
import IPFS_mob_view from "./IPFS_mob_view";
import Idealab_mob_view from "./Idealab_mob_view";
import MICFold from "./MICFold";
import Mic_mob_view from "./Mic_mob_view";
import NSTEDBE_mob_view from "./NSTEDBE_mob_view";
import NSTEDBFold from "./NSTEDBFold";
import SSIPFold from "./SSIPFold";
import Ssip_mob_view from "./Ssip_mob_view";

async function SecondFoldAlt() {
  return (
    <div className="bg-white bg-opacity-40  md:min-h-screen md:h-screen h-full w-full flex flex-wrap">
      <div className="lg:hidden w-full flex flex-col">
        <div className="w-full mt-7">
          <span className="w-full text-4xl font-bold px-5" style={{ color: "#2C2E90" }}>Incubation Programs</span>
          <p className="pt-2 text-2xl px-5">Handholding at every stage!</p>
        </div>
        <Ssip_mob_view></Ssip_mob_view>
        <Idealab_mob_view></Idealab_mob_view>
        <IPFS_mob_view></IPFS_mob_view>
        <Mic_mob_view></Mic_mob_view>
        <Dic_mob_view></Dic_mob_view>
        <NSTEDBE_mob_view></NSTEDBE_mob_view>
      </div>
      <div className="lg:w-full lg:flex hidden">
        <div className="w-4/12 flex flex-col h-screen justify-center ">
          <span className="text-7xl  sm:pl-40 md:pl-20 font-bold" style={{ color: "#2C2E90" }}>Incubation</span>
          <span className="text-7xl  sm:pl-40 md:pl-20 font-bold" style={{ color: "#2C2E90" }}>Programs</span>
          <span className="sm:pl-40 md:pl-20 pt-2 text-2xl">Handholding at every stage!</span>
        </div>
        <div className="w-8/12 flex flex-wrap h-screen items-center overflow-x-scroll">
          <SSIPFold></SSIPFold>
          <IDEALabFold></IDEALabFold>
          <IPFSFold></IPFSFold>
          <MICFold></MICFold>
          <DICFold></DICFold>
          <NSTEDBFold></NSTEDBFold>

        </div>
      </div>
    </div>
  );
}

export default SecondFoldAlt;
