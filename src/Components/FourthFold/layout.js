// "use client";
import Link from "next/link"
import Circular from "./Circular"
import Report from "./Report"

async function FourthFold() {  
  return (
    <>
    <div className="min-h-screen h-full w-full bg-gradient-to-r from-neutral-50 to-indigo-300 pt-20 px-2 sm:px-9">
          <div className="w-full flex flex-wrap sm:flex-nowrap">
            <div className="px-4 py-3 w-full sm:w-1/2 bg-white sm:mr-3 rounded-lg mb-5 sm:mb-0" id="circular-section">
            <h3 className="text-center my-3 text-4xl font-bold">CIRCULARS</h3>
                <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li class="mb-4 ms-4  px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none ">March 2021</time>
                        <p class="text-xl font-normal text-blue-800">GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</p>
                    </li>
                    <Circular id={1} content={<>Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</>} link={"#"}></Circular>
                    <li class="mb-4 ms-4   px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">April 2022</time>
                        <a href="#" className="text-xl font-normal text-blue-800">
                        Invite Application from Students / Innovators / Researchers / Start - up to take support and mentorship under Design Innovation Centre (DIC) funded by MHRD
                        </a>
                    </li>
                    <li class="mb-4 ms-4   px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">GTU - Design Innovation Centre (DIC) is celebrating \\\"Innovation Day\\\" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary by a number of interesting programs. GTU - DIC is inviting Principal/Director, HOD, Faculty members, Students, Researchers, Industry Personnel, Innovators/Start-ups or any aspirants with the zeal to know, learn, acquire skills by practical approach in areas of Design, Innovation and Emerging Technologies for the program</p>
                    </li>
                    <li class="mb-4 ms-4 px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular.</p>
                    </li>
                    <li class="mb-4 ms-4 px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular.</p>
                    </li>
                    <li class="mb-4 ms-4 px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular.</p>
                    </li>
                    
                </ol>
                <div className="flex w-full justify-center">
                <Link className="rounded-md bg-black text-white px-5 py-3 text-xl font-bold" href="/circulars">Read more...</Link>
                </div>
                
            </div>
            <div className="px-4 py-3 w-full sm:w-1/2 bg-white rounded-lg" id="report-section">
              <h3 className="text-center my-3 text-4xl font-bold">REPORTS</h3>
                <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li class="mb-4 ms-4  px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none ">March 2022</time>
                        <p class="text-xl font-normal text-blue-800">GTU - Design Innovation Centre (DIC) is celebrating &quot;Innovation Day&quot; on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary...</p>
                    </li>
                    <li class="mb-4 ms-4   px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    </li>
                    <li class="mb-4 ms-4   px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">Invite Application from Students / Innovators / Researchers / Start - up to take support and mentorship under Design Innovation Centre (DIC) funded by MHRD</p>
                    </li>
                    <li class="mb-4 ms-4   px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">GTU - Design Innovation Centre (DIC) is celebrating \\\"Innovation Day\\\" on 15th October, 2019 at Chandkheda campus as to mark Dr. A.P.J. Abdul Kalam’s Birth Anniversary by a number of interesting programs. GTU - DIC is inviting Principal/Director, HOD, Faculty members, Students, Researchers, Industry Personnel, Innovators/Start-ups or any aspirants with the zeal to know, learn, acquire skills by practical approach in areas of Design, Innovation and Emerging Technologies for the program</p>
                    </li>
                    <li class="mb-4 ms-4 px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular.</p>
                    </li>
                    <li class="mb-4 ms-4 px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular.</p>
                    </li>
                    <li class="mb-4 ms-4 px-3 py-2 rounded-md border border-gray-700">
                        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                        <p class="text-xl font-normal text-blue-800">For Faculty Members of Degree (BE) colleges of GTU who are previously trained at level 1 FDP: Please register for 53rd FDP (4 days, Intermediate Level 2) on Design Engineering – whole cycle of Design Thinking with refinement in the process and with newer tools, from 20th to 23rd August, 2019 : Important Message for Principals/ Directors/ Heads of Departments/ GTU Coordinators/ Design Coordinators of all the Degree Engineering Colleges – Please read the circular.</p>
                    </li>
                    
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