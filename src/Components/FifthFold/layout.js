import QuoteCard from "./QuoteCard";

async function FifthFold() {
  return (
    <div  id="quote-container" className="h-screen flex justify-center items-center bg-gradient-to-r from-neutral-100 to-violet-300">
        <QuoteCard content={<>“Dream is not that which you see while sleeping, It is something that doesn’t let you sleep.”</>} author={"Dr.A.P.J.Abdul Kalam"} designation={"Former President of India & Aerospace scientist"} hidden={false}/>
        <QuoteCard content={<>“GTU Innovation Council is the key player (innovation to impact) for solving real time solution and support innovators.”</>} author={"Mr.Hiranmay Mahanta"} designation={"Former Director, GTU Innovation Council"} hidden={true}/>
        <QuoteCard content={<>“Victory and defeat are a part of life, which are to be viewed with equanimity.”</>} author={"Shri. Atal Bihari Vajpayee"} designation={"Former Prime Minister of India"} hidden={true}/>
        <QuoteCard content={<>“Hindustan me koi aisa zila na ho, aisa block na ho jahan  koi startup na shuru ho.’Start up India Stand up India’”</>} author={"Shri. Narendra Modi"} designation={"Prime Minister of India"} hidden={true}/>
    </div>
  );
}
export default FifthFold;
