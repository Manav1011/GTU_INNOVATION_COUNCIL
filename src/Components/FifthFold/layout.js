import QuoteCard from "./QuoteCard";

async function FifthFold({quotes}) {
  return (
    <section
      className="h-[100dvh] w-full"
      style={{
        backgroundImage: "url('/images/backgrounds/startup.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}>
      <div  id="quote-container" className="h-[100dvh] flex justify-center items-center bg-clip-padding backdrop-filter bg-slate-50 bg-opacity-10" style={{backdropFilter:'blur(9px)'}}>
        {
          quotes.map((quote,index)=>{
            return (
              <QuoteCard content={<> {quote.content} </>} author={quote.author} designation={quote.designation} hidden={index == 0 ? false : true} key={index}/>
            )
          })
        }
          
          {/* <QuoteCard content={<>“GTU Innovation Council is the key player (innovation to impact) for solving real time solution and support innovators.”</>} author={"Mr.Hiranmay Mahanta"} designation={"Former Director, GTU Innovation Council"} hidden={true}/>
          <QuoteCard content={<>“Victory and defeat are a part of life, which are to be viewed with equanimity.”</>} author={"Shri. Atal Bihari Vajpayee"} designation={"Former Prime Minister of India"} hidden={true}/>
          <QuoteCard content={<>“Hindustan me koi aisa zila na ho, aisa block na ho jahan  koi startup na shuru ho.’Start up India Stand up India’”</>} author={"Shri. Narendra Modi"} designation={"Prime Minister of India"} hidden={true}/> */}
      </div>
    </section>
  );
}
export default FifthFold;
