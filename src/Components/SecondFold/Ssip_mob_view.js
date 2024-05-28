
async function Ssip_mob_view({hidden}){
    return(
        <>

<div className={`carousel w-full h-80 bg-white overflow-hidden perspective-1000 mt-5 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <div className="card relative w-full h-full text-center transition-transform duration-1000 preserve-3d">
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
        </>
    )
}
export default Ssip_mob_view