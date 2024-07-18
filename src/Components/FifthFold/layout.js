import QuoteCard from "./QuoteCard";

async function FifthFold({quotes}) {
  return (
    <section
      className="w-full bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300 py-10 select-none shadow-2xl"
      style={{
        fontFamily:'AvenirLight'
        // backgroundImage: "url('/images/backgrounds/startup.webp')",
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      }}>
      <div id="quote-container" className="flex justify-center items-center">
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
