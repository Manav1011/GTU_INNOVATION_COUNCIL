import Circular from "./Circular"
import Report from "./Report"

async function FourthFold() {
  return (
    <>
    <div className="min-h-screen h-full w-full" >
    <div className='min-h-screen h-full sm:h-screen sm:overflow-hidden z-0 flex pt-20 justify-between flex-col lg:flex-row' style={{backgroundAttachment:'fixed'}}>
    <div className='w-full text-center h-screen pt-12'>
      <h2 className="text-4xl font-medium uppercase" style={{ fontFamily: 'oswald' }}>CIRCULARS</h2>
      <marquee direction="up" className="marquee-reports-circulars h-4/5" behaviour='scroll'>
      <Circular id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />
      <Circular id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />
      <Circular id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />
      <Circular id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />      
      </marquee>
    </div>
    <div className='w-full text-center h-screen pt-12'>
      <h2 className="text-4xl font-medium uppercase" style={{ fontFamily: 'oswald' }}>reports</h2>
      <marquee direction="up" className="marquee-reports-circulars h-4/5" behaviour='scroll'>
        <Report id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />
        <Report id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />
        <Report id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />                
        <Report id={1} content={<>GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</>} />        
      </marquee>
    </div>
    </div>
    </div>
    </>
  )
}

export default FourthFold