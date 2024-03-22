export default function MainGraphic() {
    return (
      <div id="firstfold"> 
      <div className="flex flex-col sm:hidden" style={{backgroundAttachment:'fixed',backgroundImage:"url('/images/backgrounds/GTU_CAMPUS_POTRAIT_4.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "100%", height: "100vh"}}>
        <div className="h-full w-full flex flex-col backdrop-filter" style={{backdropFilter:'blur(1px)'}}>                    
            <div className="slide-right bg-gray-900 mt-32 mr-10 text-left bg-clip-padding bg-clip-padding backdrop-filter rounded-r-full bg-opacity-75 p-5">
                <h1 className="text-orange-500 my-2 leading-10 sm:leading-1 text-2xl font-bold" style={{fontFamily:'Azonix'}}>Igniting Innovation</h1>        
            </div>  
            <div className="slide-right bg-gray-900 mt-10 mr-10 text-left bg-clip-padding bg-clip-padding backdrop-filter rounded-r-full bg-opacity-75 p-5">
                <h1 className="text-slate-300 my-2 leading-10 sm:leading-1 text-md font-bold" style={{fontFamily:'Azonix'}}>Empowering Entrepreneurs</h1>
            </div>
            <div className="slide-right bg-gray-900 mt-10 mr-10  text-left bg-clip-padding bg-clip-padding backdrop-filter rounded-r-full bg-opacity-75 p-5">
                <div className="font-semibold sm:font-normal text-green-500" style={{fontFamily:'dosislight',fontSize:'15px'}}>
                        Welcome to the Gateway of Opportunities at GTU Innovation Council
                </div>   
            </div>
            </div>        
      </div>
      <div className="hidden sm:flex backdrop-filter bg-opacity-5" style={{backgroundAttachment:'fixed',backgroundImage:"url('/images/backgrounds/GTU_CAMPUS_6.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", width: "100%", height: "100vh"}}>
        <div className="h-full w-full flex flex-col bg-gray-900  backdrop-filter bg-opacity-20  justify-end items-start" style={{backdropFilter:'blur(1px)'}}>            
        <div className="slide-right bg-gray-900 mb-2 text-left bg-clip-padding backdrop-filter rounded-r-full backdrop-blur-sm bg-opacity-75 p-10">
            <h1 className="text-orange-500 my-2 leading-10 sm:leading-1 text-4xl font-bold" style={{fontFamily:'Azonix'}}>Igniting Innovation</h1>
            <h1 className="text-slate-300 my-2 leading-10 sm:leading-1 text-4xl font-bold" style={{fontFamily:'Azonix'}}>Empowering Entrepreneurs</h1>
            <div className="font-semibold	sm:font-normal text-green-500 text-2xl" style={{fontFamily:'dosislight'}}>
                Welcome to the Gateway of Opportunities at GTU Innovation Council
            </div>                                    
        </div>
        </div>        
      </div>
      </div>
    );
  }
  