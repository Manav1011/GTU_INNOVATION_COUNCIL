async function SideBar() {
  return (
    <aside className="bg-white shadow-sm  fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300  border border-blue-gray-100">
  <div className="relative">
    <a className="py-6 px-8 text-center" href="/">
      <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900">
        GIC Content Dashboard
      </h6>
    </a>
    <button
      className="align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
      type="button"
    >
      <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </button>
  </div>
  <div className="m-4">
    <ul className="mb-4 flex flex-col gap-1">
      <li>
        <a aria-current="page" className="active" href="/dashboard/home">
          <button
            className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-inherit"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
              dashboard
            </p>
          </button>
        </a>
      </li>
      <li>
        <a className="" href="/dashboard/profile">
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
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
              profile
            </p>
          </button>
        </a>
      </li>
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
      <li className="mx-3.5 mt-4 mb-2">
        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-black uppercase opacity-75">
          Home Section
        </p>
      </li>
      <li>
        <a className="" href="/auth/sign-in">
          <button
            className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 w-full flex items-center gap-4 px-4 capitalize"
            type="button"
          >                      
            <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
              sign in
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
              sign up
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
