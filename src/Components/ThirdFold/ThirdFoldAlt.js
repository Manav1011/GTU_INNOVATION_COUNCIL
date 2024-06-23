import WhyGICAlt from "./WhyGICAlt"
import GoalsALT from "./GoalsALT"
import OurSupportALT from "./OurSupportALT"
import OurOfferingsALT from "./OurOfferingsALT"

async function ThirdFoldAlt() {
  return (
    <section
      className="h-full w-full"
      style={{
        backgroundImage: "url('/images/stocks/TOYOTA.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // backgroundRepeat:'no-repeat'
      }}>        
      <div className="h-full w-full py-6  bg-black backdrop-filter bg-opacity-70"></div>
        <WhyGICAlt/>
        <GoalsALT/>
        <OurSupportALT/>
        <OurOfferingsALT/>
      </section>
  )
}

export default ThirdFoldAlt