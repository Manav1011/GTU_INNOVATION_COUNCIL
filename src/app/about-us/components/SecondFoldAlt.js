async function SecondFoldAlt() {
  return (    
          <section
            className="h-[100dvh] min-h-[100dvh] w-full min-w-screen overflow-hidden bg-gray-500"
            style={{
              backgroundImage:
                "url('/images/backgrounds/white-black-grad.png')",
              backgroundAttachment: "fixed",
              backgroundSize:'cover'
            }}
          >
          <div
    id="about-us-firstfold"
    className="h-full w-full flex flex-col items-center justify-center"
  >
    <div
      className="bottomUPTitle font-light sm:text-5xl lg:text-8xl  xs:text-5xl text-5xl sm:px-10 text-center"
      style={{ fontFamily: "OSWALD" }}
    >
            HOW DO WE OPERATE
    </div>
    <div
      className="bottomUPContent lg:text-3xl sm:text-xl text-ms px-5 xs:text-2xl xs:pt-20 sm:px-20 pt-10 sm:pt-10 text-center"
      style={{ fontFamily: "SairaCondensed" }}
    >
      {
        <>
        The council&apos;s goal is to streamline management systems, leveraging
      existing infrastructure for innovation.<br /> <br /> Documenting successes boosts
      stakeholder confidence. With a focus on fostering national and
      international collaborations in Science, Engineering, Technology, and
      Management.  <br />
        <br />The GTU Innovation Council facilitates ongoing interaction
      between industries, businesses, students, faculties, and GTU across
      various courses and faculties.
        </>
      }
    </div>
  </div>
            <div className="w-full h-full overflow-scroll" id="about-us-section"></div></section>
  )
}

export default SecondFoldAlt