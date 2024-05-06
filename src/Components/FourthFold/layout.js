// "use client";
import Link from "next/link"
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
const circulars = [
    {
        id:1,
        timespan:"March 2021",
        content:'GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary.'
    },
    {
        id:2,
        timespan:"April 2022",
        content:'Invite Application from Students / Innovators / Researchers / Start - up to take support and mentorship under Design Innovation Centre (DIC) funded by MHRD.'
    },
    {
        id:3,
        timespan:"April 2022",
        content:'GTU - Design Innovation Centre (DIC) is celebrating \\\"Innovation Day\\\" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary by a number of interesting programs. GTU - DIC is inviting Principal/Director, HOD, Faculty members, Students, Researchers, Industry Personnel, Innovators/Start-ups or any aspirants with the zeal to know, learn, acquire skills by practical approach in areas of Design, Innovation and Emerging Technologies for the program.'
    },{
        id:4,
        timespan:"May 2022",
        content:"For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular."
    }
]

const reports = [
    {
        id:1,
        timespan:"March 2021",
        content:'GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary.'
    },
    {
        id:2,
        timespan:"April 2022",
        content:'Invite Application from Students / Innovators / Researchers / Start - up to take support and mentorship under Design Innovation Centre (DIC) funded by MHRD.'
    },
    {
        id:3,
        timespan:"April 2022",
        content:'GTU - Design Innovation Centre (DIC) is celebrating \\\"Innovation Day\\\" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary by a number of interesting programs. GTU - DIC is inviting Principal/Director, HOD, Faculty members, Students, Researchers, Industry Personnel, Innovators/Start-ups or any aspirants with the zeal to know, learn, acquire skills by practical approach in areas of Design, Innovation and Emerging Technologies for the program.'
    },
    {
        id:4,
        timespan:"May 2022",
        content:"For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular."
    }
]
  return (
    <>
    <div className="min-h-screen w-full bg-indigo-100 bg-opacity-40  pt-14 px-2 sm:px-9">
          <div className="w-full flex flex-wrap sm:flex-nowrap">
            <div className="px-4 py-3 w-full sm:w-1/2 sm:mr-3 rounded-lg mb-5 sm:mb-0" id="circular-section">
            <h3 className="text-center my-3 text-4xl font-bold">CIRCULARS</h3>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                                      
                    {circulars && circulars.map((item,index) => (
                        <Circular id={item.id} content={truncateSentence(item.content, 200)} timespan={item.timespan}/>
                    ))}    
                </ol>
                <div className="flex w-full justify-center">
                <Link className="rounded-md bg-black text-white px-5 py-3 text-xl font-bold" href="/circulars">Read more...</Link>
                </div>
                
            </div>
            <div className="px-4 py-3 w-full sm:w-1/2  rounded-lg" id="report-section">
              <h3 className="text-center my-3 text-4xl font-bold">REPORTS</h3>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                {reports && reports.map((item,index) => (
                        <Circular id={item.id} content={truncateSentence(item.content,200)} timespan={item.timespan}/>
                    ))} 
                </ol>
                <div className="flex w-full justify-center">
                <button className="rounded-md bg-black text-white px-5 py-3 text-xl font-bold">Read more...</button>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default FourthFold