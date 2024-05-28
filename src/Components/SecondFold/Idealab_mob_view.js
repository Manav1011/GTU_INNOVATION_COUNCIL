async function Idealab_mob_view({hidden}){
    return (
        <>

<div className={`carousel w-full h-80 bg-white overflow-hidden perspective-1000 mt-5 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <div className="card relative w-full h-full text-center transition-transform duration-1000 preserve-3d">
          <div className="absolute w-full h-full backface-hiddentext-white flex items-center justify-center">
          <img src="images/secondfold/IDEALAB.webp" className="px-3"/>
          </div>
          <div className="absolute w-full h-full backface-hidden bg-yellow-400 text-white flex flex-col items-center justify-center rotate-y-180">
            <h2 className="text-2xl font-bold mb-2">About Idea-Lab</h2>
            <p className="text-justify px-3">
            AICTE-IDEA Labs foster STEM application, nurturing creativity and 21st-century skills in students. They serve as hubs for hands-on learning, multidisciplinary education, and faculty-led innovation.
            </p>
          </div>
        </div>
      </div>

        </>
    )
}
export default Idealab_mob_view