async function SideBar() {
  return (
    <aside className="hidden max-w-screen lg:flex bg-white shadow-sm ml-5 rounded-xl my-5 z-50 w-72  transition-transform duration-300  border border-blue-gray-100">
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          <li>
            <a className="" href="/dashboard/notifications">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  notifications
                </p>
              </button>
            </a>
          </li>
        </ul>
        <ul className="mb-4 flex flex-col gap-1">
          <li>
            <a className="" href="/auth/sign-in">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-black uppercase">
                  Incubations
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/auth/sign-in">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-black uppercase">
                  Inquiries
                </p>
              </button>
            </a>
          </li>
        </ul>
        <ul className="mb-4 flex flex-col gap-1">
          <li className="mx-3.5 mt-4 mb-2">
            <p className="block antialiased border border-b-2 border-slate-600 border-t-0 border-x-0 font-sans leading-normal text-black font-black text-xl uppercase opacity-75">
              Home Page
            </p>
          </li>
          <li>
            <a className="" href="/auth/sign-in">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Startup Stats
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/auth/sign-up">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Partners
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/auth/sign-up">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Quotes
                </p>
              </button>
            </a>
          </li>
          <li>
            <a className="" href="/auth/sign-up">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
                type="button"
              >
                <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
                  Reports & Circulars
                </p>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
