async function Report({ content, id , timespan }) {
  return (
    <li id={id} className="mb-4 ms-4  px-3 py-2 rounded-md border border-gray-700">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none ">{timespan}</time>
                        <p className="text-xl font-normal text-blue-800">{content}</p>
    </li>
  );
}

export default Report;
