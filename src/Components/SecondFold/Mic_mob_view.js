async function Mic_mob_view({hidden}){
    return (
        <>
        

<div className={`carousel w-full h-80 bg-white overflow-hidden perspective-1000 mt-5 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <div className="card relative w-full h-full text-center transition-transform duration-1000 preserve-3d hover:rotate-y-180">
          <div className="absolute w-full h-full backface-hiddentext-white flex items-center justify-center">
          <img src="images/secondfold/MIC.webp" className="px-3"/>
          </div>
          <div className="absolute w-full h-full backface-hidden bg-red-600 text-white flex flex-col items-center justify-center rotate-y-180">
            <h2 className="text-2xl font-bold mb-2">About MIC</h2>
            <p className="text-justify px-3">
            The Indian Ministry of Education has set up an Innovation Cell to cultivate innovation in Higher Education Institutions nationwide. The Cell aims to nurture a comprehensive innovation ecosystem, from idea generation to startup success, and will develop a ranking system to recognize innovative institutions.
            </p>
          </div>
        </div>
      </div>
        </>
    )
}
export default Mic_mob_view