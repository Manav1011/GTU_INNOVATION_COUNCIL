import Link from "next/link";
async function page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-indigo-300 bg-opacity-30 backdrop-filter backdrop-blur-sm">
      <div className="cursor-pointer	fixed top-0 left-0 ml-10 mt-10">
      <Link href='/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
          />
        </svg>
      </Link>
      </div>
      <div className="">
        <h1
          className=" text-black text-3xl sm:text-4xl md:text-7xl text-center my-2 font-bold"
          style={{ fontFamily: "Azonix" }}
        >
          Coming Soon
        </h1>
        <div
          className="font-light text-xs sm:text-xs md:text-base text-slate-800 text-center"
          style={{ fontFamily: "NunitoSans" }}
        >
          We're currently working on something interesting <br /> We'll be here
          soon
        </div>
      </div>
    </div>
  );
}

export default page;
