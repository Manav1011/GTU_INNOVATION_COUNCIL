async function FirstFoldAlt() {
  return (        
          <section
            className="h-[100dvh] min-h-[100dvh] w-full min-w-screen overflow-hidden bg-slate-500"
            style={{
              backgroundImage:
                "url('/images/backgrounds/white-black-grad.png')",
                backgroundSize:'cover',
              backgroundAttachment: "fixed",
            }}
          >
            <div className="w-full h-full overflow-scroll" id="about-us-section">
            <div
        id="about-us-firstfold"
        className="h-full w-full flex flex-col items-center justify-center"
      >
        <div
          className="bottomUPTitle font-light sm:text-5xl lg:text-8xl  xs:text-5xl text-5xl sm:px-10 text-center"
          style={{ fontFamily: "OSWALD" }}
        >
          WHO WE ARE
        </div>
        <div
          className="bottomUPContent lg:text-3xl sm:text-2xl px-5 xs:text-xl xs:pt-10 sm:px-20 pt-10 sm:pt-10 text-center"
          style={{ fontFamily: "SairaCondensed" }}
        >
          {
            <>
              Imagination is the base of innovation.
              <br />
              <br />
              At GIC, we cultivate students&apos; soft skills and talents to
              guide their creativity effectively. We foster collaboration among
              industries, entrepreneurs, and students to ensure university
              research aligns with national and global industry requirements.
              <br />
              <br />
              Through an innovation campaign involving industries, students, and
              faculty, GTU revitalizes technology education, fosters quality
              research, and promotes a culture of design and innovation in our
              industries.
            </>
          }
        </div>
      </div>
            </div></section>
  );
}

export default FirstFoldAlt;
