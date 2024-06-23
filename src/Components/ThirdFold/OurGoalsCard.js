const OurGoalsCard = ({ content }) => {
  return (
    <div className="relative my-2 px-7 py-6  bg-sky-100 bg-opacity-60 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start sm:justify-start items-center space-x-6">
      <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
        ></path>
      </svg>
      <div className="space-y-2">
        <p className="text-xl leading-snug font-extrabold text-black truncate mb-1 sm:mb-0">{content}</p>
      </div>
    </div>
  );
};

export default OurGoalsCard;
