async function MICFold() {
    return (
      <div className="carousel-item w-full h-full flex flex-row items-center justify-center">
        <>
          <div className="container my-24 mx-auto md:pr-8">
            <section className="">
              <div className="flex flex-wrap items-center">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                  <div className="flex lg:py-12">
                    <img
                      src="/images/secondfold/MIC.webp"
                      className="z-[10] w-full rounded-lg p-10 shadow dark:shadow-black/20"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 lg:ml-[-50px]">
                  <div
                    className="flex h-full items-center rounded-lg p-6 text-center text-white lg:pl-12 lg:text-left"
                    style={{ backgroundColor: "rgb(154 19 56)" }}
                  >
                    <div className="lg:pl-12">
                      <h2 className="mb-8 text-3xl font-bold">About MIC</h2>
                      <p>
                        Ministry of Education, Govt. of India has established an ‘Innovation cell’ with a purpose of systematically fostering the culture of Innovation in all Higher Education Institutions (HEIs) across the country.<br/><br/>
                        MIC will focus on creating complete ecosystem which will foster the culture of Innovation across all educational institutions from ideas generation to pre-incubation, incubation and graduating from the incubator as successful start-ups. MIC will also work on designing ranking system to identify institutions in the forefront of innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      </div>
    );
  }
  
  export default MICFold;
  