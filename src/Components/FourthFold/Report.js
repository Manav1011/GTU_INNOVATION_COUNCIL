import Link from "next/link"

async function Circular({ content, id , timespan }) {

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
    <div className="px-4 py-3 w-full sm:w-1/2 sm:mr-3 rounded-lg mb-5 sm:mb-0" id="circular-section">
    <h3 className="text-center my-3 text-4xl font-bold">REPORTS</h3>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                                      
            {reports && reports.map((item,index) => (                
                <li id={item.id} className="mb-4 ms-4  px-3 py-2 rounded-md border border-gray-700">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none ">{item.timespan}</time>
                        <p className="text-xl font-normal text-blue-800">{item.content}</p>
            </li>
            ))}    
        </ol>
        <div className="flex w-full justify-center">
        <Link className="rounded-md bg-black text-white px-5 py-3 text-xl font-bold" href="/circulars">Read more...</Link>
        </div>
        
    </div>
    
  );
}

export default Circular;
