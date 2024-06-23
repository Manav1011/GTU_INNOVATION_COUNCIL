import OurGoalsCard from "./OurGoalsCard"
async function GoalsALT() {
  return (
    <>
    <div className="w-full">
    <div className="mx-auto pt-10 flex flex-col justify-center sm:justify-center relative overflow-hidden bg-black backdrop-filter bg-opacity-70" style={{backdropFilter: "blur(1px)"}}>
    <h1 className="mb-4 text-7xl lg:text-8xl text-center font-bold text-slate-400">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700">Goals.</span></h1>
      <div className="sm:mx-20 mx-5">
        <div className="relative group">
          <div className="absolute -inset-1  rounded-lg opacity-100 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <OurGoalsCard content={'Nurture Creativity'}/>
            <OurGoalsCard content={'Collaboration'}/>
            <OurGoalsCard content={'Successful Startup'}/>
        </div>              
    </div>
    </div>
  </div>
    </>
  )
}

export default GoalsALT