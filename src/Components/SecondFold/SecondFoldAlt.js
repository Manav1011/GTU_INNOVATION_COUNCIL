import Image from "next/image";
async function SecondFoldAlt({ startups, partners }) {
  return (
    <section className="h-full w-full">
      <div className=" justify-center flex items-center bg-slate-200 bg-clip-padding py-14 0">
        <div className="w-full" id="SecondFoldContainer">
          <div className="lg:mx-20 mx-5  opacity-0" id="SecondFoldSubContainer">
            <div className="mb-10 text-center space-y-4">
              <div
                className="text-center flex  w-full sm:flex-row flex-col justify-center gap-3"
                id="second-fold-title"
              >
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-500 font-semibold text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
                  style={{ fontFamily: "AvenirBlack" }}
                >
                  STARTUP STATISTICS
                </span>
              </div>
              <p
                className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl text-semibold leading-8 font-semibold text-slate-700"
                id="second-fold-sub-title"
                style={{ fontFamily: "AvenirLight" }}
              >
                The success story of GIC. In facts & numbers.
              </p>
            </div>
            <dl
              className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
              id="stats-container"
            >
              {startups.map((startup, index) => {
                const rem = startups.length % 4;
                if (rem == 1 && index == startups.length - 1) {
                  return (
                    <div
                      key={index}
                      className="flex stats-block flex-col bg-black sm:bg-slate-300 bg-opacity-30 sm:bg-opacity-90 p-8"
                      style={{ gridColumn: "1 / -1" }}
                    >
                      <dt className="text-sm font-semibold leading-6 text-slate-300 sm:text-slate-700">
                        {startup.title}
                      </dt>
                      <dd
                        className="order-first text-3xl font-semibold tracking-tight text-white sm:text-black stats"
                        data-target={startup.content}
                      >
                        {startup.content}
                      </dd>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className={`flex stats-block flex-col ${
                        index % 2 == 0 ? "bg-black" : "bg-white"
                      } p-4 bg-opacity-90`}
                    >
                      <dt
                        className={`text-sm font-semibold leading-6 ${
                          index % 2 == 0 ? "text-slate-300" : "text-slate-700"
                        }`}
                      >
                        {startup.title}
                      </dt>
                      <dd
                        className={`order-first text-3xl font-semibold tracking-tight  ${
                          index % 2 == 0 ? "text-white" : "text-black"
                        } stats`}
                        data-target={startup.content}
                      >
                        {startup.content}
                      </dd>
                    </div>
                  );
                }
              })}
            </dl>
          </div>
        </div>
      </div>
      <div className="h-full w-full rounded-md sm:px-8 sm:py-10 px-0 my-0 bg-slate-100">
        <div className="text-center space-y-4 mx-5 ">
          <div className="min-h-full text-zinc-950 font-generalSans">
            <div className="slides overflow-scroll smooth-scroll w-full whitespace-nowrap touch-pan-x before:shrink-0 after:shrink-0 snap-mandatory flex snap-x ">
              <div className="slide flex-shrink-0 w-[90vw] h-[calc(55vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[42vw] md:h-[calc(12vw*2.2)] overflow-clip relative mx-2 snap-center rounded-3xl">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
                  alt="Image 1"
                  className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
                />
              </div>
              <div className="slide flex-shrink-0 w-[90vw] h-[calc(55vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[42vw] md:h-[calc(12vw*2.2)] overflow-clip relative mx-2 snap-center rounded-3xl">
                <img
                  src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg"
                  alt="Image 2"
                  className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
                />
              </div>
              <div className="slide flex-shrink-0 w-[90vw] h-[calc(55vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[35vw] md:h-[calc(12vw*2.2)] overflow-clip relative mx-2 snap-center rounded-3xl">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"
                  alt="Image 3"
                  className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
                />
              </div>
              <div className="slide flex-shrink-0 w-[90vw] h-[calc(55vw*1.5)] sm:w-[45vw] sm:h-[calc(40vw*1.5)] md:w-[42vw] md:h-[calc(12vw*2.2)] overflow-clip relative mx-2 snap-center rounded-3xl">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/15/09/20/waters-3083526_1280.jpg"
                  alt="Image 4"
                  className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
                />
              </div>
              <div className="slide flex-shrink-0 w-[90vw] h-[calc(55vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[42vw] md:h-[calc(12vw*2.2)] overflow-clip relative mx-2 snap-center rounded-3xl">
                <img
                  src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
                  alt="Image 5"
                  className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
                />
              </div>
              <div className="slide flex-shrink-0 w-[90vw] h-[calc(55vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[42vw] md:h-[calc(12vw*2.2)] overflow-clip relative mx-2 snap-center rounded-3xl">
                <img
                  src="https://st5.depositphotos.com/19554348/71102/i/450/depositphotos_711021714-stock-photo-beautiful-autumn-scene-hintersee-lake.jpg"
                  alt="Image 7"
                  className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-full w-full rounded-md "
        id="ThirdFoldContainer"
        style={
          {
            // backgroundImage: "url('/images/backgrounds/PartnersGIC.webp')",
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            // backgroundAttachment: "fixed",
          }
        }
      >
        <div className="py-14 bg-slate-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 w-full h-full">
          <div className="text-center space-y-4 mb-10  mx-5">
            <div
              className="text-center flex w-full sm:flex-row flex-col justify-center gap-3 opacity-0"
              id="third-fold-title"
            >
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-500 font-semibold text-3xl xs:text-4xl sm:text-4xl md:text-5xl  lg:text-5xl xl:text-6xl 2xl:text-7xl"
                style={{ fontFamily: "AvenirBlack" }}
              >
                OUR PARTNERS
              </span>
            </div>
            <p
              className="mt-2 text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-3xl text-semibold leading-8 font-semibold text-slate-700"
              id="second-fold-sub-title"
              style={{ fontFamily: "AvenirLight" }}
            >
              How Our Partners Make a Difference
            </p>
          </div>
          <div className="h-full w-full px-10">
            <div className="flex flex-wrap justify-center gap-2">
              {partners.map((partner, index) => {
                return (
                  <div
                    className="rounded-xl w-full lg:w-[30%] min-h-72 bg-white p-6 text-center shadow-xl partner-card opacity-0"
                    key={index}
                  >
                    <div className="mx-auto flex h-20 w-20 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-teal-500/40">
                      <Image
                        width={40}
                        height={40}
                        // priority={true}
                        loading="lazy"
                        src={partner.url}
                        className="w-auto h-auto"
                        alt="default image"
                      />
                    </div>
                    <h1
                      className="text-slate-700 text-darken mb-3 -mt-5 text-xl  text-center font-bold uppercase"
                      style={{ fontFamily: "AvenirBlack" }}
                    >
                      {partner.title}
                    </h1>
                    <p
                      className="px-4 text-gray-500 text-center text-sm lg:text-lg"
                      style={{ fontFamily: "AvenirBook" }}
                    >
                      {partner.about}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondFoldAlt;
