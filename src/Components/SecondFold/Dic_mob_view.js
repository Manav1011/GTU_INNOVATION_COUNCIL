async function Dic_mob_view({hidden}){
    return (
        <>
        <div class={`carousel relative w-full h-34 my-3 px-3 rtl:space-x-reverse ${hidden && 'hidden'} hover:shadow-2xl hover:translate-y-4 hover:duration-1000  translate-y-0 duration-1000`}>
  <img src="/images/secondfold/DIC.webp" alt="Your Image" class="w-full h-full object-cover rounded-lg shadow dark:shadow-black/20 rtl:divide-x-reverse"/>

  <div class="group absolute inset-0 px-3 h-full left-2 flex flex-col items-center  object-cover rounded-lg mx-1 justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 gap-y-2 hover:h-full hover:duration-1000" style={{width:"95%"}}>
    <p className="text-white text-left font-bold text-xl group-hover:animate-fade-in-up">About DIC</p>
    <p class="text-white text-center group-hover:animate-fade-in-up">AICTE-IDEA Labs foster STEM application, nurturing creativity and 21st-century skills in students. They serve as hubs for hands-on learning, multidisciplinary education, and faculty-led innovation.</p>
  </div>
</div>
        </>
    )
}
export default Dic_mob_view;