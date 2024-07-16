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
      </div>
    </section>
  );
}
export default FifthFold
