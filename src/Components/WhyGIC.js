const WhyGIC = () => {
  return (
    <div
      className="h-3/5 sm:h-screen max-w-2xl border border-gray-900"
      style={{ backgroundImage: "url('/images/stocks/TOYOTA.webp')",backgroundSize:'cover',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",          
          }}
    >
    <div className="p-5 pt-20 sm:pt-0 sm:p-10 h-full w-full  flex flex-col justify-start sm:justify-center items-start text-justify bg-black backdrop-filter bg-opacity-60" style={{backdropFilter: "blur(1px)"}}>
      <a href="#">
        <h5 className="sm:mb-20 mb-5 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-teal-200 sm:text-6xl text-5xl font-semibold tracking-tight" style={{fontFamily:'oswald'}}>
          WHY GIC ?
        </h5>
      </a>
      <p className="text mb-3 font-medium leading-5 text-slate-100" style={{fontFamily:'variable'}}>
        <>
          <span className="uppercase font-bold text-orange-500">
            Imagination is the base of innovation.
          </span>
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
