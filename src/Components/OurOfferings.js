const OurOfferings = () => {
  return (
    <section className="flex flex-col  antialiased text-gray-600">
        {/* Card */}
        <div className="max-w-2xl mb-3 bg-sky-100 bg-opacity-20 shadow-lg rounded-lg">
          <div className="px-6 py-5">
            <div className="flex items-start">
              {/* Icon */}
              <svg
                className="fill-current flex-shrink-0 mr-5"
                width={30}
                height={30}
                viewBox="0 0 30 30"
              >
                <path
                  className="text-indigo-300"
                  d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                />
                <path
                  className="text-indigo-200"
                  d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                />
                <path
                  className="text-indigo-500"
                  d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                />
              </svg>
              {/* Card content */}
              <div className="flex-grow truncate">
                {/* Card header */}
                <div className="w-full sm:flex justify-between items-center mb-3">
                  {/* Title */}
                  <h2 className="text-sm:text-xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">
                    ALL-IN-ONE PLACE
                  </h2>
                  {/* Like and comment buttons */}
                </div>
                {/* Card body */}
                <div className="flex items-end justify-between whitespace-normal">
                  {/* Paragraph */}
                  <div className="max-w-md text-slate-100 font-medium">
                    <p className="mb-2">
                      We support to student for patent filling. Meet up with Industry collaboration
                    </p>
                  </div>
                  {/* More link */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mb-3 bg-sky-100 bg-opacity-20 shadow-lg rounded-lg">
          <div className="px-6 py-5">
            <div className="flex items-start">
              {/* Icon */}
              <svg
                className="fill-current flex-shrink-0 mr-5"
                width={30}
                height={30}
                viewBox="0 0 30 30"
              >
                <path
                  className="text-indigo-300"
                  d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                />
                <path
                  className="text-indigo-200"
                  d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                />
                <path
                  className="text-indigo-500"
                  d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                />
              </svg>
              {/* Card content */}
              <div className="flex-grow truncate">
                {/* Card header */}
                <div className="w-full sm:flex justify-between items-center mb-3">
                  {/* Title */}
                  <h2 className="text-xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">
                    INTERNSHIP WITH STUDENT STARTUP
                  </h2>
                  {/* Like and comment buttons */}
                </div>
                {/* Card body */}
                <div className="flex items-end justify-between whitespace-normal">
                  {/* Paragraph */}
                  <div className="max-w-md text-slate-100 font-medium">
                    <p className="mb-2">
                      Its very important for students to work with Startup for understanding ground reality of research and project work.
                    </p>
                  </div>
                  {/* More link */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mb-3 bg-sky-100 bg-opacity-20 shadow-lg rounded-lg">
          <div className="px-6 py-5">
            <div className="flex items-start">
              {/* Icon */}
              <svg
                className="fill-current flex-shrink-0 mr-5"
                width={30}
                height={30}
                viewBox="0 0 30 30"
              >
                <path
                  className="text-indigo-300"
                  d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                />
                <path
                  className="text-indigo-200"
                  d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                />
                <path
                  className="text-indigo-500"
                  d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                />
              </svg>
              {/* Card content */}
              <div className="flex-grow truncate">
                {/* Card header */}
                <div className="w-full sm:flex justify-between items-center mb-3">
                  {/* Title */}
                  <h2 className="text-xl leading-snug font-extrabold text-white truncate mb-1 sm:mb-0">
                    EVENT PARTICIPATION
                  </h2>
                  {/* Like and comment buttons */}
                </div>
                {/* Card body */}
                <div className="flex items-end justify-between whitespace-normal">
                  {/* Paragraph */}
                  <div className="max-w-md text-slate-100 font-medium">
                    <p className="mb-2">
                    We arrange events at GIC where students can be benefited by attending expert mentor lecturer.
                    </p>
                  </div>
                  {/* More link */}
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default OurOfferings;
