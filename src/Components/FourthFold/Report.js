import React from 'react'

function Report({content,id,link}) {
  return (
    <li class="mb-4 ms-4 px-3 py-2 rounded-md border border-gray-700">
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">April 2022</time>
      <a href={link} className="text-xl text-blue-800 font-medium">
        {content}
      </a>
    </li>
  )
}

export default Report