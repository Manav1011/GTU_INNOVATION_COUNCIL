import React from 'react'

function Report({content,id}) {
  return (
    <div className="z-20 relative sm:m-2 m-3 reports text-blue-600" style={{ fontFamily: "JustAnotherHand" }}>
    <span className="absolute -z-10  w-full h-full inset-1  rounded-xl"></span>    
    <div className="p-2 sm:p-7 purple_border  rounded-xl z-20 font-light">
    <div className="pt-2 pb-4 last:mb-0 border-black border-solid">
                  <div
                    className="flex sm:items-center justify-between font-sm text-justify flex-col sm:flex-row items-start"                    
                  >
                    <span className='sm:mr-10 text-sm font-light sm:text-3xl'>{content}</span>                    
                    <a href="#" className='sm:hidden sm:w-auto w-full mt-5 sm:mt-0 border p-2 text-center rounded-md border-black flex justify-center items-center'>
                    <span className='sm:hidden mr-5'>view more</span>
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.00002 7.45035e-05L13 7.42506e-05C13.5523 7.45035e-05 14 0.44779 14 1.00007V10.0001C14 10.5524 13.5523 11.0001 13 11.0001C12.4477 11.0001 12 10.5524 12 10.0001V3.41429L1.70712 13.7072L0.292908 12.293L10.5858 2.00007L4.00002 2.00007C3.44773 2.00007 3.00002 1.55236 3.00002 1.00007C3.00002 0.44779 3.44773 7.41663e-05 4.00002 7.45035e-05Z"
                        fill="black"
                      />
                    </svg>                    
                    </a>
                  </div>
                </div>          
      </div>
    </div>
  )
}

export default Report