async function ListTable() {
  return (
    <div className="flex w-full">
      <div className="w-full flex mx-10 flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
        <div className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            Authors Table
          </h6>
        </div>
        <div className="flex flex-row items-center">
          <div class="relative inline-flex">
            <svg
              class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fill-rule="nonzero"
              />
            </svg>
            <select class="border-gray-300 border-0 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option className="p-2">Choose a color</option>
              <option className="p-2">Red</option>
              <option className="p-2">Blue</option>
              <option className="p-2">Yellow</option>
              <option className="p-2">Black</option>
              <option className="p-2">Orange</option>
              <option className="p-2">Purple</option>
              <option className="p-2">Gray</option>
              <option className="p-2">White</option>
            </select>
          </div>
          <div class="relative flex items-center h-12 rounded-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>
        <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    author
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    function
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    status
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400">
                    employed
                  </p>
                </th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">
                  <p className="block antialiased font-sans text-[11px] font-bold uppercase text-blue-gray-400" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        John Michael
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        john@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Manager
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Organization
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    data-projection-id={15}
                    style={{ opacity: 1 }}
                  >
                    <span className="">online</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    23/04/18
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <a
                    href="#"
                    className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Alexa Liras
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        alexa@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Programator
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Developer
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    data-projection-id={16}
                    style={{ opacity: 1 }}
                  >
                    <span className="">offline</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    11/01/19
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <a
                    href="#"
                    className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Laurent Perrier
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        laurent@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Executive
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Projects
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    data-projection-id={17}
                    style={{ opacity: 1 }}
                  >
                    <span className="">online</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    19/09/17
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <a
                    href="#"
                    className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Michael Levi
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        michael@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Programator
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Developer
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-green-600 to-green-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    data-projection-id={18}
                    style={{ opacity: 1 }}
                  >
                    <span className="">online</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    24/12/08
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <a
                    href="#"
                    className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Bruce Mars
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        bruce@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Manager
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Executive
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    data-projection-id={19}
                    style={{ opacity: 1 }}
                  >
                    <span className="">offline</span>
                  </div>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    04/10/21
                  </p>
                </td>
                <td className="py-3 px-5 border-b border-blue-gray-50">
                  <a
                    href="#"
                    className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-5 ">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-semibold">
                        Alexander
                      </p>
                      <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                        alexander@creative-tim.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-5 ">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    Programator
                  </p>
                  <p className="block antialiased font-sans text-xs font-normal text-blue-gray-500">
                    Developer
                  </p>
                </td>
                <td className="py-3 px-5 ">
                  <div
                    className="relative grid items-center font-sans uppercase whitespace-nowrap select-none bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 text-white rounded-lg py-0.5 px-2 text-[11px] font-medium w-fit"
                    data-projection-id={20}
                    style={{ opacity: 1 }}
                  >
                    <span className="">offline</span>
                  </div>
                </td>
                <td className="py-3 px-5 ">
                  <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
                    14/09/20
                  </p>
                </td>
                <td className="py-3 px-5 ">
                  <a
                    href="#"
                    className="block antialiased font-sans text-xs font-semibold text-blue-gray-600"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListTable;
