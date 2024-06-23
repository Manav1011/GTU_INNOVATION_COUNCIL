import React from "react";

async function SixthFold() {
  return (
    <section className="h-full w-full" style={{backgroundImage:"url('/images/backgrounds/sky-blue-background-qrqh8inzwwyo9d4q.webp')",backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}>
    <div className="min-h-screen py-20 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 sm:py-32 0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-700 ">
                STARTUP STATISTICS
            </h2>
            <p className="text-lg leading-8 text-gray-500">
                The success story of GIC. In facts & numbers.
            </p>
          </div>
          <dl className="mt-8 sm:mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-sky-300 bg-opacity-50 p-4">
              <dt className="text-sm font-semibold leading-6 text-slate-700">
                Application Received SSIP + NI (2500 + 150)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-sky-800">
              2,650 
              </dd>
            </div>
            <div className="flex flex-col bg-sky-400 bg-opacity-50 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-700">
                Selected Startup Data SSIP + NI (250 + 26)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-sky-800">
                276
              </dd>
            </div>
            <div className="flex flex-col bg-sky-300 bg-opacity-50 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-700">
              Fund Disbursed in Lakh SSIP + NI (62 + 176 )  
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-sky-800">
                234
              </dd>
            </div>
            <div className="flex flex-col bg-sky-400 bg-opacity-50 p-8">
            <dt className="text-sm font-semibold leading-6 text-slate-700">
                Jobs Created by Startup (SSIP +NI)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-sky-800">
                500
              </dd>
            </div>
            <div className="flex flex-col bg-sky-400 bg-opacity-50 p-8"  style={{gridColumn:'1 / -1'}}>
            <dt className="text-sm font-semibold leading-6 text-slate-700">
                Jobs Created by Startup (SSIP +NI)
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-sky-800">
                500
              </dd>
            </div>
        
          </dl>
        </div>
      </div>
    </div>
    </section>
  );
}

export default SixthFold;
