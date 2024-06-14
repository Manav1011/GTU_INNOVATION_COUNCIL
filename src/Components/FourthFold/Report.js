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
        content:'GTU - Design Innovation Centre (DIC) is celebrating \\\"Innovation Day\\\" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth...'
    }    
]

  return (
    <div className="px-4 py-3 w-full sm:w-1/2 sm:mr-3 rounded-lg mb-5 sm:mb-0" id="circular-section">
    <h3 className="text-center my-3 text-4xl font-bold">REPORTS</h3>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                                      
            {reports && reports.map((item,index) => (                
                <li key={index} id={item.id} className="mb-4 ms-4  px-3 py-2 rounded-md border border-gray-700">
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
