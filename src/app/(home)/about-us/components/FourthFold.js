import Image from "next/image";
async function FourthFold() {
  return (
    <section
      className="h-screen w-screen bg-slate-400"
      id="about-us-fourthfold"
      style={{ backgroundAttachment: "fixed" }}
    >
    <div className="" id="about-us-fourthfold-content">
      <div
        className="bottomUPTitle  xs:text-5xl xs:pt-28 font-thin sm:text-5xl lg:text-7xl  text-5xl sm:pt-28 lg:pt-40 pt-28 sm:px-10 text-center"
        style={{ fontFamily: "Baskerville" }}
      >
        SUPPORTED STARTUPS
      </div>
      <div className="xs:pt-20 max-w-screen-xl px-4 mx-auto pt-10 lg:pt-10">
        <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-6 lg:grid-cols-6 dark:text-gray-400">
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/9_1_1_eswasthya.in_-scalia-person-scalia-person.webp"
            alt="default image"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/se-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/14_1_1_kredib-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/vinglobe-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/158_1_1_SAN-BURN-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/vinspire-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/wepaint-300x199-scalia-person-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/CPM-Image-1-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/Whole-Logo-300x70-scalia-person-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/mocktale1-300x199-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/Youth-Connect-logo-2-1-300x199-scalia-person-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            priority={true}
            className="h-auto sm:w-24 lg:w-32 w-20"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/mod-logo-300x212-scalia-person-scalia-person.webp"
          />
        </div>
      </div>
    </div>
    </section>
  );
}

export default FourthFold;
