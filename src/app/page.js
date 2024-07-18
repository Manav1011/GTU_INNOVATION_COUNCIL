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
import NavBarLatest from "@/Components/Globals/NavBar/NavBarLatest";
import Footer from "@/Components/Globals/Footer/Footer";
import GlobalRouteListener from "./GlobalRouteListener";
import NavScrollListener from "@/Components/Client/NavScrollListener";

// export const dynamic = 'force-dynamic'
export default async function Home() {
  let partners = null
  let startups = null
  let quotes = null

  let response
  try {
     response = await fetch(`http://localhost:4000/manage`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query{
            startups {
              slug
              title
              content
            }
            quotes {
              slug
              content
              author
              designation
            }
            partners {
              logo
              slug
              title
              about
              url
            }
            }
        `,
      }),
    });

    if (!response.ok) {
      console.log(response)
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    partners = data.data.partners
    quotes = data.data.quotes
    startups = data.data.startups
    console.log(partners)

  } catch (error) {
    console.log(error)
    console.error("Error fetching data:", error);
  }

  return (
    <>
    {/* <Preloaders/>    */}
      <NavBarLatest/>            
      <MainGraphic/> 
      {/* <SixthFold/> */}
      {
        startups  && partners && <SecondFoldAlt startups={startups} partners={partners} />
      }
      
      {/* <SecondFoldAlt/> */}
      <ThirdFoldAlt/>             
      {
        quotes && <FifthFold quotes={quotes} /> 
    
      }
      
      {/* <FourthFold/> */}
      <FourthFoldALT/>
      {/* <SeventhFold/> */}
      {/* <SecondFold/> */}
      {/* <>
      </> */}      
      {
        quotes && <ScrollListener/>   
      }          
      <IntersectionTransitions/>
      <Footer/>   
      <NavScrollListener/>
      <GlobalRouteListener/>
       {/* <CarouselScrollListener/> */}
    </>
  );
}
