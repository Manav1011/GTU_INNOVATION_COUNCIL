import Image from "next/image";
async function FourthFold() {
  return (
    <section
    className="h-[100dvh] min-h-[100dvh] w-full min-w-screen overflow-hidden bg-zinc-500 bg-opacity-70"
    style={{
      backgroundImage:
        "url('/images/backgrounds/white-black-grad.png')",
      backgroundAttachment: "fixed",
      backgroundSize:'cover',
    }}
  >
    <div className="h-full w-full flex flex-col items-center justify-center" id="about-us-fourthfold-content">
      <div
        className="bottomUPTitle font-light sm:text-5xl lg:text-8xl  xs:text-5xl text-5xl sm:px-10 text-center"
        style={{ fontFamily: "OSWALD" }}
      >
        SUPPORTED STARTUPS
      </div>
      <div className="pt-10 max-w-screen-xl px-4 mx-auto">
        <div className="grid grid-cols-3 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-6 lg:grid-cols-6 dark:text-gray-400">
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/9_1_1_eswasthya.in_-scalia-person-scalia-person.webp"
            alt="default image"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/se-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/14_1_1_kredib-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/vinglobe-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/158_1_1_SAN-BURN-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/vinspire-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/wepaint-300x199-scalia-person-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/CPM-Image-1-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/Whole-Logo-300x70-scalia-person-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/mocktale1-300x199-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
            alt="default image"
            style={{ mixBlendMode: "color-burn" }}
            src="/images/gic-startup-logos/Youth-Connect-logo-2-1-300x199-scalia-person-scalia-person.webp"
          />
          <Image
            width={200}
            height={150}
            loading="lazy"
            className="h-auto sm:w-24 lg:w-80 w-28"
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
