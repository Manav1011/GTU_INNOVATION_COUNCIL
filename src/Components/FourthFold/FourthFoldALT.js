async function FourthFoldALT() {
  return (
    <section className="bg-slate-100 h-full">
      <div className="h-full w-full mx-auto">
        {/* Vertical Timeline #1 */}
        <div className="pt-20 flex justify-center items-center flex-col">
          <div className="bg-gradient-to-r from-black to-slate-500 bg-clip-text font-semibold g-clip-text text-3xl xs:text-3xl sm:text-4xl md:text-5xl  lg:text-5xl xl:text-6xl 2xl:text-7xl text-center flex sm:mb-20 mb-5 w-full flex-row justify-center gap-3 opacity-0 items-center" id="FourthFoldTitle" style={{ fontFamily: "AvenirBlack" }}>
            <span
              className="text-transparent font-semibold"              
            >
              REPORTS
            </span>
            <span
              className="text-transparent font-semibold"              
            >
              &
            </span>
            <span
              className="text-transparent font-semibold"              
            >
              CIRCULARS
            </span>
            <div className="gap-5 items-center text-blue-600 hidden sm:flex">
            <span className="sm:hidden">Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width={32}
              // height={32}
              fill="currentColor"
              className="h-6 w-6 sm:h-8 sm:w-8 bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
              />
            </svg>
            </div>
          </div>
          <div className="gap-5 items-center text-blue-600 flex sm:hidden">
            <span className="sm:hidden">Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width={32}
              // height={32}
              fill="currentColor"
              className="h-6 w-6 sm:h-8 sm:w-8 bi bi-box-arrow-up-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
              />
            </svg>
            </div>
          <div className="mx-5 sm:mx-auto" style={{ fontFamily: "AvenirLight" }}>
            {/* Item #1 */}
            <div className="relative pl-8 sm:pl-32 py-6 group report opacity-0">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  May, 2020
                </time>
                <span className="sm:absolute left-0 top-14 inline-flex items-center justify-center font-semibold uppercase w-20 h-6 text-amber-600 rounded-full text-xl">
                  Report
                </span>
                <div className="text-xl font-bold text-slate-900">
                  Acme was founded in Milan, Italy
                </div>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                GTU - Design Innovation Centre (DIC) is celebrating
                &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda
                campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary.
              </div>
            </div>
            {/* Item #2 */}
            <div className="relative pl-8 sm:pl-32 py-6 group circular opacity-0">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  May, 2021
                </time>
                <span className="sm:absolute left-0 top-14 inline-flex items-center justify-center font-semibold uppercase w-20 h-6 text-amber-600 rounded-full text-xl">
                  Circular
                </span>
                <div className="text-xl font-bold text-slate-900">
                  Reached 5K customers
                </div>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Invite Application from Students / Innovators / Researchers /
                Start - up to take support and mentorship under Design
                Innovation Centre (DIC) funded by MHRD.
              </div>
            </div>
            {/* Item #3 */}
            <div className="relative pl-8 sm:pl-32 py-6 group circular opacity-0">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  May, 2022
                </time>
                <span className="sm:absolute left-0 top-14 inline-flex items-center justify-center font-semibold uppercase w-20 h-6 text-amber-600 rounded-full text-xl">
                  Circular
                </span>
                <div className="text-xl font-bold text-slate-900">
                  Acquired various companies, inluding Technology Inc.
                </div>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Invite Application from Students / Innovators / Researchers /
                Start - up to take support and mentorship under Design
                Innovation Centre (DIC) funded by MHRD.
              </div>
            </div>
            {/* Item #4 */}
            <div className="relative pl-8 sm:pl-32 py-6 group report opacity-0">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  May, 2023
                </time>
                <span className="sm:absolute left-0 top-14 inline-flex items-center justify-center font-semibold uppercase w-20 h-6 text-amber-600 rounded-full text-xl">
                  Report
                </span>
                <div className="text-xl font-bold text-slate-900">
                  Acme went public at the New York Stock Exchange
                </div>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                GTU - Design Innovation Centre (DIC) is celebrating
                &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda
                campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary.
              </div>
            </div>
          </div>
        </div>
        {/* End: Vertical Timeline #1 */}
      </div>
    </section>
  );
}

export default FourthFoldALT;
