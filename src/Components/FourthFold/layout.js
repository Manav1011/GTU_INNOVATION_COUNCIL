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
    <div className="min-h-screen w-full bg-indigo-100 bg-opacity-40  pt-14 px-2 sm:px-9">
          <div className="w-full flex flex-wrap sm:flex-nowrap">
           <Circular/>
            <Report/>
          </div>
        </div>
    </>
  )
}

export default FourthFold