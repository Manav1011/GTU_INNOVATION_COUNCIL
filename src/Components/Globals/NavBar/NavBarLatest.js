import Link from "next/link";
import Image from "next/image";
import NavToggler from "@/Components/Globals/NavBar/client/NavToggler";
import NavLinks from "@/Components/Globals/NavBar/client/NavLinks";
async function NavBarLatest() {
  const Menus = {
    about: {
      key: "about",
      title: "About",
      link: null,
      "is-sub-menu": false,
      "parent-menu-key": null,
      "has-sub-menu": true,
      "sub-menu-content": {
        "about-us": {
          "menu-count": "second",
          key: "about-us",
          title: "About Us",
          link: "about-us",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "Leadership and Governance": {
          "menu-count": "second",
          key: "leadership-and-governance",
          title: "Leadership and Governance",
          link: "leadership-and-governance",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        recognitions: {
          "menu-count": "second",
          key: "recognitions",
          title: "Recognitions",
          link: "recognitions",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        partners: {
          "menu-count": "second",
          key: "partners",
          title: "Partners",
          link: "partners",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "mentors-and-advisors": {
          "menu-count": "second",
          key: "mentors-and-advisors",
          title: "Mentors and Advisors",
          link: "mentors-and-advisors",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "go-back": { "parent-key": "base" },
      },
    },
    "startups-and-innovators": {
      key: "About",
      title: "Startups And Innovators",
      link: null,
      "is-sub-menu": false,
      "parent-menu-key": null,
      "has-sub-menu": true,
      "sub-menu-content": {
        "startups-and-innovators-supported": {
          "menu-count": "second",
          key: "startups-and-innovators-supported",
          title: "Startups and Innovators Supported",
          link: "startups-and-innovators",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "benefits-available": {
          "menu-count": "second",
          key: "benefits-available",
          title: "Benifits Avilable",
          link: null,
          "is-sub-menu": true,
          "parent-menu-key": "startups-and-innovators",
          "has-sub-menu": true,
          "sub-menu-content": {
            incubation: {
              "menu-count": "third",
              key: "incubation",
              title: "Incubation",
              link: "incubation",
              "is-sub-menu": false,
              "parent-menu-key": null,
              "has-sub-menu": false,
            },
            funding: {
              "menu-count": "third",
              key: "funding",
              title: "Funding",
              link: "funding",
              "is-sub-menu": false,
              "parent-menu-key": null,
              "has-sub-menu": false,
            },
            "ipr-support": {
              "menu-count": "third",
              key: "ipr-support",
              title: "IPR Support",
              link: "ipr-support",
              "is-sub-menu": false,
              "parent-menu-key": null,
              "has-sub-menu": false,
            },
            "co-working-facilities": {
              "menu-count": "third",
              key: "ipr-support",
              title: "Co Working Facilities",
              link: "co-working-facilities",
              "is-sub-menu": false,
              "parent-menu-key": null,
              "has-sub-menu": false,
            },
            resources: {
              "menu-count": "third",
              key: "resources",
              title: "Resources",
              link: "resources",
              "is-sub-menu": false,
              "parent-menu-key": null,
              "has-sub-menu": false,
            },
            "lab-facilities": {
              "menu-count": "third",
              key: "lab-facilities",
              title: "Lab Facilities",
              link: "lab-facilities",
              "is-sub-menu": false,
              "parent-menu-key": null,
              "has-sub-menu": false,
            },
            "market-access-and-networking": {
              "menu-count": "third",
              key: "market-access-and-networking",
              title: "Market Access and Networking",
              link: "market-access-and-networking",
              "is-sub-menu": false,
              "parent-menu-key": null,
              "has-sub-menu": false,
            },
            "go-back": {
              "menu-count": "third",
              "parent-key": "startups-and-innovators",
            },
          },
        },
        "go-back": { "parent-key": "base" },
      },
    },
    Ecosystem: {
      key: "ecosystem",
      title: "Ecosystem",
      link: null,
      "is-sub-menu": false,
      "parent-menu-key": null,
      "has-sub-menu": true,
      "sub-menu-content": {
        "gic-clubs": {
          "menu-count": "second",
          key: "gic-clubs",
          title: "GIC Clubs",
          link: "gic-clubs",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        sankuls: {
          "menu-count": "second",
          key: "sankuls",
          title: "Sankuls",
          link: "sankuls",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        cic3: {
          "menu-count": "second",
          key: "cic3",
          title: "CiC3",
          link: "cic3",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "student-associateship-program": {
          "menu-count": "second",
          key: "student-associateship-program",
          title: "Student Associateship Program",
          link: "student-associateship-program",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "gtu-motorsports": {
          "menu-count": "second",
          key: "gtu-motorsports",
          title: "GTU Motorsports",
          link: "gtu-motorsports",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        ideathon: {
          "menu-count": "second",
          key: "ideathon",
          title: "Ideathon",
          link: "ideathon",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "robocon-club": {
          "menu-count": "second",
          key: "robocon-club",
          title: "Robocon Club",
          link: "robocon-club",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "gtu-startup-policy": {
          "menu-count": "second",
          key: "gtu-startup-policy",
          title: "GTU Startup Policy",
          link: "gtu-startup-policy",
          "is-sub-menu": false,
          "parent-menu-key": null,
          "has-sub-menu": false,
        },
        "go-back": { "parent-key": "base" },
      },
    },
    programs: {
      key: "programs",
      title: "Programs",
      link: "programs",
      "is-sub-menu": false,
      "parent-menu-key": null,
      "has-sub-menu": false,
    },
    Apply: {
      key: "apply",
      title: "Apply",
      link: "apply",
      "is-sub-menu": false,
      "parent-menu-key": null,
      "has-sub-menu": false,
    },
    "contact-us": {
      key: "contact-us",
      title: "Contact Us",
      link: "reach-us",
      "is-sub-menu": false,
      "parent-menu-key": null,
      "has-sub-menu": false,
    },
  };
  return (
    <section>
      <nav
        className="w-full fixed z-40 backdrop-filter bg-white topToBottom h-14"
        id="navbar-main"
      >
        <div className="flex justify-between mx-5 sm:mx-20 items-center relative">
          <div className="flex items-center gap-2">
            <div className="flex gap-x-4 items-center">
              <Link href="/" className="">
                <Image
                  width={200}
                  height={192}
                  priority={true}
                  id="gtu-logo"
                  className="h-auto w-14"
                  src="/images/logos/gtu.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="">
              <Link href="/" className="">
                <Image
                  width={200}
                  height={192}
                  priority={true}
                  id="gtu-logo"
                  className="h-auto w-20"
                  src="/images/logos/GISC.png"
                  alt="Your Company"
                />
              </Link>
            </div>
          </div>
          <NavToggler />
          <button className="toggle-menu absolute" id="toggle-menu">
            <span
              className="bg-black before:bg-black after:bg-black"
              id="nav-toggler-span"
            ></span>
          </button>
        </div>
      </nav>
      <div
        className="w-full h-[100dvh] bg-black	 text-zinc-500 absolute hidden z-10 FadeINQuick flex justify-between pb-6 items-center flex-col"
        id="full-screen-nav-menu-container"
      >
        <NavLinks BaseLinksObj={Menus} />
      </div>      
    </section>
  );
}

export default NavBarLatest;
