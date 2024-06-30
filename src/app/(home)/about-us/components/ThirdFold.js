async function ThirdFold() {
  return (
    <section
    className="h-screen min-h-screen w-full min-w-screen overflow-hidden bg-stone-500"
    style={{
      backgroundImage:
        "url('/images/backgrounds/white-black-grad.png')",
      backgroundAttachment: "fixed",
    }}
  >
    <div className="h-full w-full flex flex-col items-center justify-center" id="about-us-thirdfold-content">
      <div className="container mx-auto px-6">
        <div className="text-center">
        <div
      className="bottomUPTitle font-light sm:text-5xl lg:text-8xl  xs:text-5xl text-5xl sm:px-10 text-center"
      style={{ fontFamily: "OSWALD" }}
    >
            OUR MISSION
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
      <p
        className="flex flex-row  bottomUPContent xs:text-2xl xs:pt-20 lg:text-3xl sm:text-xl text-2xl px-10 sm:px-20 pt-10 sm:pt-10 sm:text-center text-justify"
        style={{ fontFamily: "SairaCondensed" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={20}
          height={20}
          fill="currentColor"
          className="h-6 w-6 text-black mr-2"
        >
          <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
        </svg>
        To nurture creativity and innovation within the university community.
      </p>
      <p
        className="flex flex-row  bottomUPContent xs:text-2xl xs:pt-10 sm:text-xl lg:text-3xl text-2xl px-10 sm:px-20 pt-5 sm:pt-10 sm:text-center text-justify"
        style={{ fontFamily: "SairaCondensed" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={20}
          height={20}
          fill="currentColor"
          className="h-6 w-6 text-black mr-2"
        >
          <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
        </svg>
        To involve students, along with the industries and faculty members in an
        innovation campaign.
      </p>
      <p
        className="flex flex-row  bottomUPContent xs:text-2xl xs:pt-10 sm:text-xl lg:text-3xl text-2xl px-10 sm:px-20 pt-5 sm:pt-10 sm:text-center text-justify"
        style={{ fontFamily: "SairaCondensed" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={20}
          height={20}
          fill="currentColor"
          className="h-6 w-6 text-black mr-2"
        >
          <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
        </svg>
        Top-notch support for absolute startup’s satisfaction.
      </p>
      </div>
    </div>
    </section>
  );
}

export default ThirdFold;
