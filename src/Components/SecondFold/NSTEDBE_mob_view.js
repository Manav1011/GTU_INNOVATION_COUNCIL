async function NSTEDBE_mob_view({hidden}){
    return (
        <>
        {/* <div className={`carousel mt-10 px-2 py-10 h-60 flex items-center mx-2 hover:shadow-2xl hover:translate-y-4 hover:duration-1000  translate-y-0 duration-1000 rounded-lg shadow dark:shadow-black/20 mb-10 ${hidden && 'hidden'}`}>
  <img src="/images/secondfold/NSTEDB.webp" alt="Your Image" className="px-3"/>

  <div class="group absolute inset-0 h-full flex flex-col items-center rounded-lg justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 gap-y-2 hover:h-full hover:duration-1000">
    <p className="text-white text-left font-bold text-xl group-hover:animate-fade-in-up">About NSTEDB</p>
    <p class="text-white text-center group-hover:animate-fade-in-up">NSTEDB, established in 1982 by the Government of India, aims to foster self-employment among S&T professionals and promote knowledge-based enterprises. Operating under the Department of Science & Technology, it collaborates with various ministries, entrepreneurship institutions, and financial bodies.</p>
  </div>
</div> */}

<div className={`carousel w-full h-80 bg-white overflow-hidden perspective-1000 mt-5 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <div className="relative w-full h-full text-center transition-transform duration-1000 preserve-3d hover:rotate-y-180">
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