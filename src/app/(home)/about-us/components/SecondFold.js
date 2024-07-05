async function SecondFold() {
  return (
    <div
      id="about-us-secondfold"
      className="h-[100dvh] w-screen"
      style={{ ddbackground: "#CFD8D7", backgroundAttachment: "fixed" }}
    >
      <div
        id="about-us-secondfold-content"
        className="flex flex-col items-center justify-start"
      >
        <div
          className="bottomUPTitle font-thin sm:text-5xl lg:text-7xl xs:text-5xl xs:pt-28 text-4xl sm:pt-28 lg:pt-32 pt-20 sm:px-10 text-center"
          style={{ fontFamily: "Baskerville" }}
        >
          HOW DO WE OPERATE
        </div>
        <div
          className="bottomUPContent lg:text-3xl xs:text-2xl xs:pt-20 sm:text-xl text-2xl px-5 sm:px-20 pt-10 sm:pt-10 text-center"
          style={{ fontFamily: "variable" }}
        >
          The council&apos;s goal is to streamline management systems, leveraging
          existing infrastructure for innovation.<br /> <br /> Documenting successes boosts
          stakeholder confidence. With a focus on fostering national and
          international collaborations in Science, Engineering, Technology, and
          Management.  <br />
            <br />The GTU Innovation Council facilitates ongoing interaction
          between industries, businesses, students, faculties, and GTU across
          various courses and faculties.
        </div>
      </div>
    </div>
  );
}

export default SecondFold;
