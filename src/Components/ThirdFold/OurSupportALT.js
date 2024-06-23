async function OurSupportALT() {
  return (
    <div className="w-full">
      <div
        className="mx-auto pt-10 flex flex-col justify-center sm:justify-center relative overflow-hidden bg-black backdrop-filter bg-opacity-70"
        style={{ backdropFilter: "blur(1px)" }}
      >
        <h1 className="mb-4 text-7xl lg:text-8xl font-extrabold text-slate-400 md:text-5xl text-center">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">
            Support.
          </span>
        </h1>
        <section className="grid gap-0 my-6 md:grid-cols-1 sm:mx-20 mx-5">
          <div className="p-6  mb-3 bg-sky-100 bg-opacity-60 shadow-lg rounded-lg">
            <dl className="space-y-2">
              <dt className="text-xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
                Ideation of Project
              </dt>
              <dd className="text-5xl font-light md:text-6xl text-slate-800">
                89%
              </dd>
            </dl>
          </div>
          <div className="p-6  mb-3 bg-sky-100 bg-opacity-60 shadow-lg rounded-lg">
            <dl className="space-y-2">
              <dt className="text-xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
                Conceptual Analysis
              </dt>
              <dd className="text-5xl font-light md:text-6xl text-slate-800">
                74%
              </dd>
            </dl>
          </div>
          <div className="p-6 mb-3 bg-sky-100 bg-opacity-60 shadow-lg rounded-lg">
            <dl className="space-y-2">
              <dt className="text-xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">
                Strategy Building
              </dt>
              <dd className="text-5xl font-light md:text-6xl text-slate-800">
                95%
              </dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurSupportALT;
