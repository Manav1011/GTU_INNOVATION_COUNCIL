"use client";
import { useEffect, useState } from "react";
import { SignInUser, AuthenticateUser } from "../actions";
import { useFormState } from "react-dom";

function SignInComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    AuthenticateUser().then((res) => {
      setIsAuthenticated(false);
    });
  }, []);
  const [state, formAction] = useFormState(SignInUser, {
    error: false,
    message: "",
  });
  return (
    <>
      {isAuthenticated ? (
        <div>
          <div className="flex justify-center h-screen w-full flex-col items-center relative">
            <div className="absolute w-full h-full backdrop-blur-sm z-20"></div>
            <div className="container sm:mx-auto my-4 mx-4 sm:px-4 lg:px-20">
              <div className="w-full sm:p-8 p-4 my-4 md:px-12  mx-auto rounded-2xl shadow-2xl">
                <div className="">
                  <h1
                    className="font-bold text-center uppercase lg:text-5xl sm:text-4xl text-2xl"
                    style={{ fontFamily: "Azonix" }}
                  >
                    Sign In
                  </h1>
                </div>
                <form action={formAction}>
                  <div className="grid grid-cols gap-5 md:grid-cols-2 mt-5">
                    <input
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      // ref={email}
                      required={true}
                    />
                    <input
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      // ref={password}
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
        </div>
      ) : (
        <div>
          {state.error == true ? (
            <div
              className="bg-red-100 border fixed top-0 border-red-400 text-red-700 px-4 py-3 rounded w-full text-center"
              role="alert"
            >
              <strong className="font-bold">Oh No!!</strong>
              <span className="block sm:inline">{state.message}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
            </div>
          ) : null}

          <div className="flex justify-center h-screen w-full flex-col items-center">
            <div className="container sm:mx-auto my-4 mx-4 sm:px-4 lg:px-20">
              <div className="w-full sm:p-8 p-4 my-4 md:px-12  mx-auto rounded-2xl shadow-2xl">
                <div className="">
                  <h1
                    className="font-bold text-center uppercase lg:text-5xl sm:text-4xl text-2xl"
                    style={{ fontFamily: "Azonix" }}
                  >
                    Sign In
                  </h1>
                </div>
                <form action={formAction}>
                  <div className="grid grid-cols gap-5 md:grid-cols-2 mt-5">
                    <input
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      // ref={email}
                      required={true}
                    />
                    <input
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-slate-200 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      // ref={password}
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
        </div>
      )}
    </>
  );
}

export default SignInComponent;
