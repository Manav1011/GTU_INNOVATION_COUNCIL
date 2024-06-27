"use client";
import { useRef } from "react";
import { useRouter } from 'next/navigation'

function page() {
  const email = useRef(null);
  const password = useRef(null);
  const router = useRouter()

  const SubmitLoginForm = async (event) => {
    event.preventDefault();    
    fetch('/cms-admin/api/login',{
        method:'POST',
        body:JSON.stringify({
            email:email.current.value,
            password:password.current.value
        })
    }).then((res) => res.json()).then(data => {
        if(data.success == true){
            router.push('/cms-admin')
        }
    }).catch(err => {
        console.log(err);
    })
  };
  return (
    <div className="flex justify-center h-screen w-full flex-col items-center">
    <div className="container sm:mx-auto my-4 mx-4 sm:px-4 lg:px-20">
      <div className="w-full sm:p-8 p-4 my-4 md:px-12  mx-auto rounded-2xl shadow-2xl">
        <div className="">
          <h1
            className="font-bold text-center uppercase lg:text-5xl sm:text-4xl text-2xl"
            style={{ fontFamily: "Azonix" }}
          >
            Sign In To The CMS
          </h1>
        </div>
        <form onSubmit={SubmitLoginForm}>
          <div className="grid grid-cols gap-5 md:grid-cols-2 mt-5">
            <input
              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              type="email"
              placeholder="Email"
              ref={email}
              required={true}
            />
            <input
              className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              type="password"
              placeholder="Password"
              ref={password}
              required={true}
            />
          </div>
          <div className="mt-10 ">
            <button className="uppercase text-sm font-bold tracking-wide bg-slate-900 text-gray-100 p-3 rounded-lg w-full  focus:outline-none focus:shadow-outline">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
       
  );
}

export default page;
