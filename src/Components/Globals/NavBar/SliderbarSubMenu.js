function SliderbarSubMenu({ title }) {
  const Menus = {
    "gic-verticals": [
      "GIC Clubs",
      "Sankuls",
      "Design Thinking",
      "CIC3",
      "IPR",
      "Ideathon21",
      "GTU Motorsports",
      "Incubator",
      "Awards",
      "Student Associateship Program",
    ],
    "our-support": [
      "Allied Support",
      { Funding: ["SSIP", "Nodal Institute", "DIC", "AIC", "TBI"] },
    ],
    "gic-startup": [
      "GIC Startup Mart",
      "Startup Stories",
      "SSIP Startup List",
      "Nodal Institute Startup",
    ],
    "resource-bank": [
      "MOOCs",
      "MSTE",
      "OSTE",
      "Case Studies",
      "BLOG",
      "Books Generals",
    ],
    latest: [
      "Career",
      "Upcoming Event List",
      "Upcoming Classic Event",
      "Circulars",
      "Reports",
      "Utility Forms",
    ],
    apply: [
      "Incubation Form",
      "Apply Under Nodal Institute",
      "Apply Under SSIP",
      "Apply Under TBI",
      "Startup Gallery",
    ],
  };

  return (
    <div className="mt-40 pb-48 flex  flex-wrap flex-col gap-10 ml-40 h-full w-full">
      {Menus[title]?.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div
              key={index}
              className="font-medium text-4xl hover:text-orange-500 transition duration-300 ease-in-out flex items-center gap-4"
            >
              {item}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          );
        } else if (typeof item === "object") {
          return (
            <div key={index}>
              {Object.keys(item).map((key, subIndex) => (
                <div key={subIndex}>
                  <div className="font-bold text-4xl transition duration-300 ease-in-out flex items-center gap-4 text-emerald-400">
                    {key}
                  </div>
                  <div className="font-normal text-2xl flex gap-6">
                    {item[key].map((subItem, subSubIndex) => (
                      <div
                        key={subSubIndex}
                        className="hover:text-orange-500 transition duration-300 ease-in-out"
                      >
                        {subItem}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default SliderbarSubMenu;
