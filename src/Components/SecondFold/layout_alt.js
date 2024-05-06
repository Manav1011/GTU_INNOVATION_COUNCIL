import DICFold from "./DICFold";
import IDEALabFold from "./IDEALabFold";
import IPFSFold from "./IPFSFold";
import MICFold from "./MICFold";
import NSTEDBFold from "./NSTEDBFold";
import SSIPFold from "./SSIPFold";

async function SecondFoldAlt() {
  return (
    <div className="bg-violet-200 bg-opacity-40  min-h-screen h-screen overflow-x-scroll overflow-y-hidden w-full flex flex-wrap flex-col">
      <SSIPFold/>
      <IPFSFold/>
      <MICFold/>
      <NSTEDBFold/>
    <IDEALabFold/>
      <DICFold/>
    </div>
  );
}

export default SecondFoldAlt;
