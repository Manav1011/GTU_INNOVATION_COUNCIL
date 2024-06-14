async function NSTEDBE_mob_view({hidden}){
    return (
        <>

<div className={`carousel w-full h-80 bg-white overflow-hidden perspective-1000 mt-5 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <div className="card relative w-full h-full text-center transition-transform duration-1000 preserve-3d">
          <div className="absolute w-full h-full backface-hiddentext-white flex items-center justify-center">
          <img src="images/secondfold/NSTEDB.webp" className="px-3"/>
          </div>
          <div className="absolute w-full h-full backface-hidden bg-green-600 text-white flex flex-col items-center justify-center rotate-y-180">
            <h2 className="text-2xl font-bold mb-2">About NSTEDB</h2>
            <p className="text-justify px-3">
            NSTEDB, established in 1982 by the Government of India, aims to foster self-employment among S&T professionals and promote knowledge-based enterprises. Operating under the Department of Science & Technology, it collaborates with various ministries, entrepreneurship institutions, and financial bodies.
            </p>
          </div>
        </div>
      </div>

        </>
    )
    
}
export default NSTEDBE_mob_view;