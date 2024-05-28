
async function Ssip_mob_view({hidden}){
    return(
        <>
    {/* <div className={`carousel mt-10 px-2 h-60 flex items-center mx-2 hover:shadow-2xl hover:translate-y-4 hover:duration-1000  translate-y-0 duration-1000 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <img src="images/secondfold/SSIP.webp" className="px-3"/>
        <div class="group absolute inset-0 h-full flex flex-col items-center rounded-lg justify-center bg-red-400 opacity-0 hover:opacity-100 transition-opacity duration-300 gap-y-2 hover:h-full hover:duration-1000">
  <p class="text-white text-left font-bold text-xl group-hover:animate-fade-in-up">
        About SSIP
    </p>
    <p class="text-white text-center font-bold group-hover:animate-fade-in-up">The Government of Gujarat has introduced a startup assistance policy, welcoming individuals or institutions with innovative ideas to receive support and mentorship. Startups in technology sectors play a crucial role in assessing a region's technological advancement and economic performance.</p>
  </div>
    </div> */}

<div className={`carousel w-full h-80 bg-white overflow-hidden perspective-1000 mt-5 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <div className="relative w-full h-full text-center transition-transform duration-1000 preserve-3d hover:rotate-y-180">
          <div className="absolute w-full h-full backface-hiddentext-white flex items-center justify-center">
          <img src="images/secondfold/SSIP.webp" className="px-3"/>
          </div>
          <div className="absolute w-full h-full backface-hidden bg-red-400 text-white flex flex-col items-center justify-center rotate-y-180">
            <h2 className="text-2xl font-bold mb-2">About SSIP</h2>
            <p className="text-justify px-3">
            The Government of Gujarat has introduced a startup assistance policy, welcoming individuals or institutions with innovative ideas to receive support and mentorship. Startups in technology sectors play a crucial role in assessing a region's technological advancement and economic performance.
            </p>
          </div>
        </div>
      </div>
            <div className={`carousel relative w-full h-34 my-3 px-3 rtl:space-x-reverse ${hidden && 'hidden'} hover:shadow-2xl hover:translate-y-4 hover:duration-1000  translate-y-0 duration-1000`}>
  <img src="/images/secondfold/SSIP.webp" alt="Your Image" className="w-full h-full object-cover rounded-lg p-10 shadow dark:shadow-black/20 rtl:divide-x-reverse"/>

  <div className="absolute inset-0 px-3 h-full left-2 flex flex-col items-center  object-cover rounded-lg mx-1 justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 gap-y-2 hover:h-full hover:duration-1000" style={{width:"95%"}}>
    <p className="text-white text-left font-bold text-xl">About SSIP</p>
    <p className="text-white text-center font-bold">The Government of Gujarat has introduced a startup assistance policy, welcoming individuals or institutions with innovative ideas to receive support and mentorship. Startups in technology sectors play a crucial role in assessing a region's technological advancement and economic performance.</p>
  </div>
</div>

        </>
    )
}
export default Ssip_mob_view