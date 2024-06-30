import Image from "next/image";
async function SecondFoldAlt({ startups,partners }) {
  return (
    <section
      className="h-full w-full"
      style={{
        backgroundImage: "url('/images/backgrounds/PartnersGIC.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen py-20 justify-center flex items-center bg-slate-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30  sm:py-32 0">
        <div className="w-full" id="SecondFoldContainer">
          <div className="lg:mx-20 mx-5  opacity-0" id="SecondFoldSubContainer">
            <div className="text-center space-y-4">
              <div className="text-center flex  w-full sm:flex-row flex-col justify-center gap-3" id="second-fold-title">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-500 sm:text-6xl text-6xl font-semibold"
                  style={{ fontFamily: "oswald" }}
                >
                  STARTUP STATISTICS
                </span>
              </div>
              <p className="text-xl text-semibold leading-8 font-semibold sm:text-4xl text-slate-700" id="second-fold-sub-title">
                The success story of GIC. In facts & numbers.
              </p>
            </div>
            <dl className="mt-8 sm:mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4" id="stats-container">
              {
                startups && startups.map((startup, index) => {
                  let lastOne = parseInt(startups.length / 4)
                  if (lastOne <= 1) {
                    lastOne = startups.length
                  }
                  if (index != lastOne - 1) {
                    return (<div className={`flex stats-block flex-col ${index % 2 == 0 ? "bg-black text-white" : "bg-white text-black"} p-4 bg-opacity-90`} key={index}>
                      <dt className={`text-sm font-semibold leading-6 ${index % 2 == 0 ? "text-slate-300" : "text-slate-700"} `}>
                        {startup.title}
                      </dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight  stats" data-target={startup.count}>
                        {startup.count}
                      </dd>
                    </div>)
                  }
                  else {
                    return (
                      <div className="flex stats-block flex-col bg-black sm:bg-slate-200 bg-opacity-30 sm:bg-opacity-90 p-8" style={{ gridColumn: '1 / -1' }}>
                        <dt className="text-sm font-semibold leading-6 text-slate-300 sm:text-slate-700">
                          {startup.title}
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-black stats" data-target={startup.count}>
                          {startup.count}
                        </dd>
                      </div>
                    )
                  }
                })
              }
              {/* 
*/}
              {/*  */}

            </dl>
          </div>
        </div>
      </div>
      <div className="h-full w-full py-10 bg-slate-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30" id="ThirdFoldContainer">
        <div className="text-center">
          <div className="text-center flex  w-full sm:flex-row flex-col justify-center gap-3 opacity-0" id="third-fold-title">
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-black to-slate-500 sm:text-6xl text-6xl font-semibold"
              style={{ fontFamily: "oswald" }}
            >
              OUR PARTNERS
            </span>
          </div>
        </div>
        <div className="h-full min-h-screen w-full  pt-20 p-4">
          <div className="flex flex-wrap justify-center gap-2">
            {
              partners && partners.map((partenr,index)=>(
                <div className="rounded-xl w-full lg:w-1/4 min-h-72 bg-white p-6 text-center shadow-xl partner-card opacity-0" key={index}>
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-teal-500/40" key={index}>
                <Image
                  width={40}
                  height={40}
                  // priority={true}
                  loading="lazy"
                  src={`${partenr.logo}`}
                  alt="default image"
                />
              </div>
              <h1 className="text-darken mb-3 text-md font-bold uppercase">
                {partenr.title}
              </h1>
              <p className="px-4 text-gray-500">
                {partenr.about}
              </p>
            </div>
              ))
            }
            
            {/* <div
              data-aos-delay={150}
              className="rounded-xl w-full lg:w-1/4 min-h-72 bg-white p-6 text-center shadow-xl partner-card opacity-0"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-teal-500/40">
                <Image
                  width={40}
                  height={40}
                  // priority={true}
                  loading="lazy"
                  src="/images/secondfold/IPR.webp"
                  alt="default image"
                />
              </div>
              <h1 className="text-darken mb-3 text-md font-bold uppercase">
                Intellectual Property Facilitation Centre
              </h1>
              <p className="px-4 text-gray-500">
                IPFC for MSMEs, established at ni-msme in August 2009, provides
                consultancy on trademarks, copyrights, patents, and more. It
                offers incentives for national and international patents and
                geographical indications.
              </p>
            </div>
            <div
              data-aos-delay={300}
              className="rounded-xl w-full lg:w-1/4 min-h-72 bg-white p-6 text-center shadow-xl partner-card opacity-0"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-teal-500/40">
                <Image
                  width={40}
                  height={40}
                  // priority={true}
                  loading="lazy"
                  src="/images/secondfold/newidealab.png"
                  alt="default image"
                />
              </div>
              <h1 className="text-darken mb-3 text-md font-bold uppercase">
                IDEA Lab
              </h1>
              <p className="px-4 text-gray-500">
                AICTE-IDEA Labs enhance STEM learning and hands-on experience,
                promoting skills like critical thinking and creativity. They
                empower students and faculty for multidisciplinary education and
                research.
              </p>
            </div>
            <div
              data-aos-delay={300}
              className="rounded-xl w-full lg:w-1/4 min-h-72 bg-white p-6 text-center shadow-xl partner-card opacity-0"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-teal-500/40">
                <Image
                  width={40}
                  height={40}
                  // priority={true}
                  loading="lazy"
                  src="/images/secondfold/MIC.webp"
                  alt="default image"
                />
              </div>
              <h1 className="text-darken mb-3 text-md font-bold uppercase">
                MIC
              </h1>
              <p className="px-4 text-gray-500">
                The Ministry of Education's Innovation Cell fosters innovation
                in Higher Education Institutions nationwide. It creates an
                ecosystem from idea generation to successful startups and
                designs a ranking system for innovative institutions.
              </p>
            </div>
            <div
              data-aos-delay={300}
              className="rounded-xl w-full lg:w-1/4 min-h-72 bg-white p-6 text-center shadow-xl partner-card opacity-0"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-teal-500/40">
                <Image
                  width={40}
                  height={40}
                  // priority={true}
                  loading="lazy"
                  src="/images/secondfold/DIC.webp"
                  alt="default image"
                />
              </div>
              <h1 className="text-darken mb-3 text-md font-bold uppercase">
                Design Innovation Centre
              </h1>
              <p className="px-4 text-gray-500">
                The Gujarat Technological University's Design Innovation Centre,
                funded by the Ministry of Education in May 2018, provides a
                platform for students, faculty, and researchers to transform
                their ideas into design innovations.
              </p>
            </div>
            <div
              data-aos-delay={300}
              className="rounded-xl w-full lg:w-1/4 min-h-72 bg-white p-6 text-center shadow-xl partner-card opacity-0"
            >
              <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-white shadow-lg shadow-teal-500/40">
                <Image
                  width={40}
                  height={40}
                  src="/images/secondfold/NSTEDB.webp"
                  alt="default image"
                  // placeholder="blur"
                  loading="lazy"
                />
              </div>
              <h1 className="text-darken mb-3 text-md font-bold uppercase">
                NSTEDB
              </h1>
              <p className="px-4 text-gray-500">
                Established in 1982, the National Science & Technology
                Entrepreneurship Development Board (NSTEDB) promotes
                self-employment and innovation among S&T professionals, under
                the Department of Science & Technology.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondFoldAlt;
