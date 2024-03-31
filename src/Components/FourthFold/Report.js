import React from 'react'

function Report({content,id}) {
  return (
    <div className="z-20 relative m-10">
    <span className="absolute -z-10  w-full h-full inset-1 bg-emerald-900 rounded-xl"></span>    
    <div className="p-8 border border-black purple_border bg-white rounded-xl z-20 font-light" style={{fontFamily:'oswald'}}>
          {content}        
      </div>
    </div>
  )
}

export default Report