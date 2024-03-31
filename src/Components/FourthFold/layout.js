import Circular from "./Circular"
import Report from "./Report"

async function FourthFold() {
  return (
    <>
    <div className="min-h-screen h-full w-full" >
    <div className='min-h-screen h-full bg-gradient-to-r from-slate-50 to-slate-400 z-0 flex pt-20 justify-between flex-col lg:flex-row' style={{backgroundAttachment:'fixed'}}>
      <div className='w-full text-center'>
      <h2 className="text-4xl font-medium uppercase" style={{fontFamily:'oswald'}}>CIRCULARS</h2> 
        <Circular id={1} content={ <>GTU - Design Innovation Centre (DIC) is celebrating "Innovation Day" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...<span className="text-blue-900 cursor-pointer">view more</span></> } />
        <Circular id={1} content={ <>GTU - Design Innovation Centre (DIC) is celebrating "Innovation Day" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...<span className="text-blue-900 cursor-pointer">view more</span></> } />
        <Circular id={1} content={ <>GTU - Design Innovation Centre (DIC) is celebrating "Innovation Day" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...<span className="text-blue-900 cursor-pointer">view more</span></> } />
      </div>
      <div className='w-full text-center'>
        <h2 className="text-4xl font-medium uppercase" style={{fontFamily:'oswald'}}>reports</h2>  
        <Report id={1} content={ <>GTU - Design Innovation Centre (DIC) is celebrating "Innovation Day" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...<span className="text-blue-900 cursor-pointer">view more</span></> } />
        <Report id={1} content={ <>GTU - Design Innovation Centre (DIC) is celebrating "Innovation Day" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...<span className="text-blue-900 cursor-pointer">view more</span></> } />
        <Report id={1} content={ <>GTU - Design Innovation Centre (DIC) is celebrating "Innovation Day" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...<span className="text-blue-900 cursor-pointer">view more</span></> } />
      </div>
    </div>
    </div>
    </>
  )
}

export default FourthFold