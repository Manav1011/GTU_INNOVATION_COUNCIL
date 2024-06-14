import Circular from "./Circular"
import Report from "./Report"

async function truncateSentence(sentence, maxLength) {    
    if (sentence.length <= maxLength) {
        return sentence;
    } else {
        return sentence.substring(0, maxLength) + "...";
    }
}

async function FourthFold() {  
  return (
    <>
    <div className="min-h-screen w-full bg-indigo-100 bg-opacity-40  pt-20 px-2 sm:px-9">
          <div className="w-full h-full flex flex-wrap sm:flex-nowrap justify-center items-center">
           <Circular/>
            <Report/>
          </div>
        </div>
    </>
  )
}

export default FourthFold