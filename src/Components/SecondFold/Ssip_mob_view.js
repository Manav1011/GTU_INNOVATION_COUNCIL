async function Ssip_mob_view({hidden}){
    return(
        <>
            <div class={`carousel relative w-full h-34 my-3 px-3 rtl:space-x-reverse ${hidden && 'hidden'} hover:shadow-2xl hover:translate-y-4 hover:duration-1000  translate-y-0 duration-1000`}>
  <img src="/images/secondfold/SSIP.webp" alt="Your Image" class="w-full h-full object-cover rounded-lg p-10 shadow dark:shadow-black/20 rtl:divide-x-reverse"/>

  <div class="absolute inset-0 px-3 h-full left-2 flex flex-col items-center  object-cover rounded-lg mx-1 justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 gap-y-2 hover:h-full hover:duration-1000" style={{width:"95%"}}>
    <p className="text-white text-left font-bold text-xl">About SSIP</p>
    <p class="text-white text-center font-bold">The Government of Gujarat has introduced a startup assistance policy, welcoming individuals or institutions with innovative ideas to receive support and mentorship. Startups in technology sectors play a crucial role in assessing a region's technological advancement and economic performance.</p>
  </div>
</div>

        </>
    )
}
export default Ssip_mob_view