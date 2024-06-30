import MainGraphic from "@/Components/FirstFold/layout";
import ScrollListener from "@/Components/Client/ScrollListener";
// import SecondFold from "@/Components/SecondFold/layout";
import ThirdFoldAlt from "@/Components/ThirdFold/ThirdFoldAlt";
// import ThirdFold from "@/Components/ThirdFold/layout";
// import FourthFold from "@/Components/FourthFold/layout";
import FifthFold from "@/Components/FifthFold/layout";
// import SixthFold from "@/Components/SixthFold/layout";
// import SecondFoldAlt from "@/Components/SecondFold/layout_alt";
// import SeventhFold from "@/Components/SeventhFold/layout";
// import CarouselScrollListener from "@/Components/Client/CarouselScrollListener";
import SecondFoldAlt from "@/Components/SecondFold/SecondFoldAlt";
import FourthFoldALT from "@/Components/FourthFold/FourthFoldALT";
import IntersectionTransitions from "@/Components/Client/IntersectionTransitions";
import Preloaders from "@/Components/Client/Preloaders";
import base_url from "@/baseusrl";

export default async function  Home() {
  
  try{
    let res = await fetch(`${base_url}/manage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `{
            quotes{
                _id,
                content,
                author,
                designation
            },
            startups{
                _id,
                title,
                count
            },
            partners{
              _id,
              logo,
              title,
              about
            }
          }`
      })
    })

    const result = await res.json()
    const quotes = result.data.quotes
    const startups = result.data.startups
    const partners = result.data.partners
    
  
  
      return (
        <>
          {/* <Preloaders/>    */}
          <MainGraphic />
          {/* <SixthFold/> */}
          {startups && partners && <SecondFoldAlt startups={startups} partners={partners}/>}
          {/* <SecondFoldAlt/> */}
          <ThirdFoldAlt />
          {quotes && <><FifthFold quotes={quotes}/> <ScrollListener /></>}
          {/* <FourthFold/> */}
          <FourthFoldALT />
          {/* <SeventhFold/> */}
          {/* <SecondFold/> */}
          {/* <>
          </> */}
          
          <IntersectionTransitions />
          {/* <CarouselScrollListener/> */}
        </>
      );
  }
  catch(error){
    return (
      <>
        error page
      </>
    )
  }
    
    
}
