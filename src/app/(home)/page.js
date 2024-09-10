import MainGraphic from "@/Components/FirstFold/layout";
import ScrollListener from "@/Components/Client/ScrollListener";
import ThirdFoldAlt from "@/Components/ThirdFold/ThirdFoldAlt";
import SecondFoldAlt from "@/Components/SecondFold/SecondFoldAlt";
import FourthFoldALT from "@/Components/FourthFold/FourthFoldALT";
import IntersectionTransitions from "@/Components/Client/IntersectionTransitions";

export const dynamic = 'force-dynamic'
export default async function Home() {
  let partners = null
  let startups = null
  let quotes = null
  let circulars = null
  let response
  try {
     response = await fetch(`http://localhost:3000/api/manage`,{
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
            circulars{
              slug,
              title,
              about,
              date,
              url
            }
            }
        `,
      }),
    });

    if (!response.ok) {            
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    partners = data.data.partners
    quotes = data.data.quotes
    startups = data.data.startups
    circulars = data.data.circulars

  } catch (error) {
    console.log(error)
    console.error("Error fetching data:", error);
  }

  return (
    <>          
      <MainGraphic/>       
      {startups  && partners && <SecondFoldAlt startups={startups} partners={partners} />}
      <ThirdFoldAlt/>                                 
      {circulars && <FourthFoldALT circulars={circulars}/>}      
      {quotes && <ScrollListener/>}          
      <IntersectionTransitions/>       
    </>
  );
}
