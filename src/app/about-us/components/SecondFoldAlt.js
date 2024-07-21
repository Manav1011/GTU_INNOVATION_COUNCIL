async function SecondFoldAlt() {
  return (    
          <section
            className="h-[100dvh] min-h-[100dvh] w-full min-w-screen overflow-hidden"
          >
          <div
        id="about-us-firstfold"
        className="h-full w-full flex flex-col items-left justify-center sm:px-20 px-5"
      >
        <div
          className="bottomUPTitle font-light sm:text-5xl lg:text-8xl  xs:text-5xl text-5xl text-left"
          style={{ fontFamily: "AvenirRegular" }}
        >
          HOW DO WE OPERATE
        </div>
        <div
          className="bottomUPContent lg:text-3xl sm:text-2xl xs:text-xl xs:pt-10  pt-10 sm:pt-10 text-left"
          style={{ fontFamily: "AvenirLight" }}
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