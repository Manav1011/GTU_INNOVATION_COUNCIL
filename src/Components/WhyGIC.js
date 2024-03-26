const WhyGIC = () => {
  return (
    <div
      className="h-screen sm:h-screen max-w-2xl border border-gray-900"
      style={{ backgroundImage: "url('/images/stocks/TOYOTA.webp')",backgroundSize:'cover',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",          
          }}
      id='whyGICParallaxDiv'
    >
    <div className="p-5 pt-20 sm:pt-0 sm:p-10 h-full w-full flex flex-col justify-start sm:justify-center items-start text-justify bg-black backdrop-filter bg-opacity-60" style={{backdropFilter: "blur(1px)"}}>      
        <h5 className="sm:mb-20 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-teal-200 sm:text-6xl text-5xl font-semibold tracking-tight" style={{fontFamily:'oswald'}}>
          WHY GIC ?
        </h5>      
      <p className="text mb-3 font-medium leading-5 text-slate-100" style={{fontFamily:'variable'}}>
        <>
          <span className="uppercase font-bold text-orange-500">
            Imagination is the base of innovation.
          </span>
          <br/>
          <span id="expand-span" className="hidden sm:hidden text-lg mt-2 text-center w-full justify-center cursor-pointer"><svg className="" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/></svg></span>
          <br />          
          <br /> 
          So we at GIC nurture the soft skills and talent of the students to
          lead their imagination in a proper way. <br /><br />
          GIC has been designed to establish close bonding between industries,
          entrepreneur and students to make research and development at the
          University relevant to the needs of industries at national and
          international levels. <br /><br /> 
          It aims to involve the industries, along with the students and faculty
          members, in an innovation campaign, whereby GTU rejuvenates technology
          education and develops quality research at the University and helps
          create a culture of design, new and improved products and processes in
          our industry.
        </>
      </p>
      </div>
    </div>
  );
};

export default WhyGIC;
