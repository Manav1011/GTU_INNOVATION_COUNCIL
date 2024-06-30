async function FirstFold() {
  return (
    <div
      id="about-us-firstfold"
      className="h-screen w-screen flex flex-col items-center justify-start"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div
        className="bottomUPTitle font-thin sm:text-5xl lg:text-7xl  xs:text-5xl text-4xl sm:pt-28 lg:pt-32 xs:pt-28 pt-20 sm:px-10 text-center"
        style={{ fontFamily: "Baskerville" }}
      >
        WHO WE ARE
      </div>
      <div
        className="bottomUPContent lg:text-3xl md:sm:text-xl text-2xl px-5 xs:text-2xl xs:pt-20 sm:px-20 pt-10 sm:pt-10 text-center"
        style={{ fontFamily: "variable" }}
      >
        {
          <>
            Imagination is the base of innovation.
            <br />
            <br />
            At GIC, we cultivate students&apos; soft skills and talents to guide
            their creativity effectively. We foster collaboration among
            industries, entrepreneurs, and students to ensure university
            research aligns with national and global industry requirements.<br />
            <br />
            Through an innovation campaign involving industries, students, and
            faculty, GTU revitalizes technology education, fosters quality
            research, and promotes a culture of design and innovation in our
            industries.
          </>
        }
      </div>
    </div>
  );
}

export default FirstFold;
