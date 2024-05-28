async function IPFS_mob_view({hidden}){
    return (
        <>
        
<div className={`carousel w-full h-80 bg-white overflow-hidden perspective-1000 mt-5 rounded-lg shadow dark:shadow-black/20 ${hidden && 'hidden'}`}>
        <div className="card relative w-full h-full text-center transition-transform duration-1000 preserve-3d">
          <div className="absolute w-full h-full backface-hiddentext-white flex items-center justify-center">
          <img src="images/secondfold/IPR.webp" className="px-3"/>
          </div>
          <div className="absolute w-full h-full backface-hidden bg-blue-600 text-white flex flex-col items-center justify-center rotate-y-180">
            <h2 className="text-2xl font-bold mb-2">About IPFS</h2>
            <p className="text-justify px-3">
            The Intellectual Property Facilitation Centre (IPFC) at ni-msme since August 2009 offers consultancy to MSMEs on trademarks, copyrights, patents, and geographical indications, with incentives for national and international patents provided by the Government of India.
            </p>
          </div>
        </div>
      </div>

        </>
    )
}
export default IPFS_mob_view;