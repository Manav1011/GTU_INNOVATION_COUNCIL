import Link from 'next/link';
export default function MainGraphic() {
  return (
    <section>
      <div
        className="flex backdrop-filter bg-opacity-5 bg-[url('/images/backgrounds/GTU_CAMPUS_POTRAIT_4.webp')]"
        id="mainGraphicContainer"
        style={{
          backgroundAttachment: "fixed",
          // backgroundImage: "url('/images/backgrounds/GTU_CAMPUS_6.webp')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100dvh",
        }}
      >
        <div
          className="h-full w-full flex flex-col  lg2:bg-black  backdrop-filter lg2:bg-opacity-80 backdrop-blur-[2px] lg2:backdrop-blur-[5px]"
          // style={{ backdropFilter: "blur(5px)" }}
        >
          <div className="flex mt-40 lg2:mt-0 justify-start lg2:justify-center items-center flex-col h-full w-full text-center">
            <div
              id="MainGraphicHeader"
              className="my-2 leading-10 font-bold w-full"
            >
              <div className="flex items-center flex-col justify-start overflow-hidden">
                <div className="text-3xl xss:text-4xl xs:text-4xl sm:text-5xl lg:text-7xl xl:text-6xl 2xl:text-8xl">
                  <div className="rolling-up-text bottom-up hidden">
                    <span
                      className="text-slate-800 lg2:text-white"
                      style={{ fontFamily: "BebasNeue" }}
                      id="igniting-innovation-span"
                    >
                      Igniting Innovation
                    </span>
                  </div>
                  <div className="rolling-up-text bottom-up hidden">
                    <span
                      className="text-black lg2:text-white"
                      style={{ fontFamily: "BebasNeue" }}
                    >
                      Empowering Enterpreneurs
                    </span>
                  </div>
                  <div className="rolling-up-text bottom-up hidden">
                    <span
                      className="text-black lg2:text-white"
                      style={{ fontFamily: "BebasNeue" }}
                    >
                      Elevating Excellence
                    </span>
                  </div>
                </div>
              </div>
              <span
                className="text-slate-700 xss:tracking-wide lg:tracking-wider lg2:text-emerald-200 font-light text-xs xss:text-sm xs:text-sm sm:text-sm lg:text-lg xl:text-3xl 2xl:text-3xl bg-gradient-to-r from-slate-800 to-slate-900 lg2:from-emerald-200 lg2:to-green-500 text-transparent bg-clip-text "
                id="spare-time"
                style={{ fontFamily: "oswald" }}
              >
                Welcome to the Gateway of Opportunities at GTU Innovation
                Council
              </span>
            </div>
            <div className="wrapper mt-2 " style={{ fontFamily: "AvenirBook" }}>
              <Link className="cta bg-white text-black px-11 py-2 border border-teal-500 lg:py-4" href="https://docs.google.com/forms/d/e/1FAIpQLScemptmi9LFonX5U1VyoPwVZ_K7-8EVIcss2op1GdBY9GZ4rw/viewform" target='_blank'>
                <span>Apply Now</span>
                <span>
                  <svg
                    width="43px"
                    height="23px"
                    viewBox="0 0 66 43"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g
                      id="arrow"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <path
                        className="one"
                        d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                        fill="#000000"
                      />
                      <path
                        className="two"
                        d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                        fill="#000000"
                      />
                      <path
                        className="three"
                        d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                        fill="#000000"
                      />
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
