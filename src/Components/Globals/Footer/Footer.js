function Footer() {
  return (
    <div className="sm:h-screen flex justify-between flex-col bg-slate-200">
    <section className="relative sm:pt-40 overflow-hidden">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <div className="p-11 h-full text-center  bg-opacity-20 border sm:border-r-slate-800">
                <div className="mb-6 relative mx-auto w-16 h-16  bg-white  border border-blueGray-200 rounded-full">
                <a href="mailto:info_gisc@gtu.edu.in">
                  <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer">
                    <svg
                      width={32}
                      height={33}
                      viewBox="0 0 32 33"
                      fill="none"                                    
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 11.1666L14.5208 18.1805C15.4165 18.7776 16.5835 18.7776 17.4792 18.1805L28 11.1666M6.66667 25.8333H25.3333C26.8061 25.8333 28 24.6394 28 23.1666V9.83329C28 8.36053 26.8061 7.16663 25.3333 7.16663H6.66667C5.19391 7.16663 4 8.36053 4 9.83329V23.1666C4 24.6394 5.19391 25.8333 6.66667 25.8333Z"
                        stroke="#4f46e5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
              </div>
              <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                Send Email
              </h3>
              <p className="font-medium  text-xl leading-relaxed">
                info_gisc@gtu.edu.in
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-3">
          <div className="p-11 h-full text-center bg-opacity-20 border sm:border-r-slate-800">
            <div className="mb-6 relative mx-auto w-16 h-16 bg-white rounded-full">
                <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-clock "
                    style={{color:'#4f46e5'}}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                OFFICE HOURS
              </h3>
              <p className="font-medium text-sm leading-relaxed">Monday – Friday: 10:30 – 18:10 Hrs (Phone until 17:30 Hrs)</p>
              <p className="font-medium text-sm leading-relaxed">1st & 3rd Saturday: 10:30 – 18:30 Hrs</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-3">
          <div className="p-11 h-full text-center bg-opacity-20 border border-blueGray-100 rounded-xl">
              <div className="mb-6 relative mx-auto w-16 h-16 bg-white border border-blueGray-200 rounded-full">
                <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg
                    width={32}
                    height={33}
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.5431 22.7091C22.1797 24.0725 19.192 27.0602 17.4133 28.8389C16.6323 29.62 15.3693 29.6203 14.5883 28.8392C12.8393 27.0903 9.91373 24.1647 8.45818 22.7091C4.29259 18.5435 4.29259 11.7898 8.45818 7.62419C12.6238 3.4586 19.3775 3.4586 23.5431 7.62419C27.7087 11.7898 27.7087 18.5435 23.5431 22.7091Z"
                      stroke="#4F46E5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.0007 15.1667C20.0007 17.3758 18.2098 19.1667 16.0007 19.1667C13.7915 19.1667 12.0007 17.3758 12.0007 15.1667C12.0007 12.9575 13.7915 11.1667 16.0007 11.1667C18.2098 11.1667 20.0007 12.9575 20.0007 15.1667Z"
                      stroke="#4F46E5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold font-heading leading-snug">
                Address
              </h3>
              <p className="font-medium text-sm max-w-xs mx-auto leading-relaxed">
              Acedamic Block 2, GTU- GISC Office, GTU Innovation Council, VGEC College Campus, Chandkheda, Ahmedabad - 382424
              </p>              
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-opacity-40 sm:pt-8 pt-3 sm:pb-6 pb-3" id="footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap  lg:text-left">
          <div className="w-full px-4 flex justify-center flex-row sm:flex-col items-center">
            <h4 className="sm:text-3xl text-xl text-blueGray-700 mr-5 sm:mr-0">
              Let&apos;s keep in touch!
            </h4>            
            <div className="sm:mt-6 mt-0 lg:mb-0 sm:mb-6 mb-0 flex flex-row">              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-facebook mr-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"                  
                  fill="currentColor"
                  className="bi bi-twitter-x mr-4"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>

            </div>
          </div>
        </div>
        <hr className="sm:my-6 my-3 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-md text-blueGray-500 font-semibold py-1">
                ©GIC | <span id="get-current-year">2010</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
