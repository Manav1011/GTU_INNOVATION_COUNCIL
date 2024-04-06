"use client";

import { useEffect } from "react";

const callBackSecondFoldAboutUs = async (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.scrollIntoView();
      document
        .getElementById("about-us-secondfold-content")
        .classList.remove("hidden");
      observer.disconnect();
    }
  });
};

async function transformScroll(event) {
  event.preventDefault();
  if (event.deltaY) {    
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
  }
}

const callBackThirdFoldAboutUs = async (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.scrollIntoView();
      document
        .getElementById("about-us-thirdfold-content")
        .classList.remove("hidden");
      observer.disconnect();
    }
  });
};
const callBackFourthFoldAboutUs = async (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.scrollIntoView();
      document
        .getElementById("about-us-fourthfold-content")
        .classList.remove("hidden");
      observer.disconnect();
    }
  });
};
const callBackAboutUs = async (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document
        .getElementById("footer")
        .classList.add("sm:fixed", "sm:w-full", "sm:bottom-0",'sm:bg-transparent','bg-slate-400');        
    } else {
      document
        .getElementById("footer")
        .classList.remove("sm:fixed", "sm:w-full", "sm:bottom-0",'sm:bg-transparent','bg-slate-400');
      observer.disconnect();
    }
  });
};

function ScrollListener() {
  useEffect(() => {
    const optionsAboutUS = {
      root: null,
      threshold: 0.1,
    };
    const ObserveeAboutUs = new IntersectionObserver(
      callBackAboutUs,
      optionsAboutUS
    );
    const AboutUS = document.getElementById("about-us-container");
    if (AboutUS) {
      ObserveeAboutUs.observe(AboutUS);
    }
    AboutUS.addEventListener("wheel", transformScroll, { passive: false });

    // const optionsSecondFold = {
    //   root: null,
    //   threshold: 0.3,
    // };
    // const ObserveSecondFold = new IntersectionObserver(
    //   callBackSecondFoldAboutUs,
    //   optionsSecondFold
    // );
    // const SecondFoldAboutUS = document.getElementById("about-us-secondfold");
    // if (SecondFoldAboutUS) {
    //   ObserveSecondFold.observe(SecondFoldAboutUS);
    // }

    // const optionsThirdFold = {
    //   root: null,
    //   threshold: 0.3,
    // };
    // const ObserveThirdFold = new IntersectionObserver(
    //   callBackThirdFoldAboutUs,
    //   optionsThirdFold
    // );
    // const ThirdFoldAboutUS = document.getElementById("about-us-thirdfold");
    // if (ThirdFoldAboutUS) {
    //   ObserveThirdFold.observe(ThirdFoldAboutUS);
    // }

    // const optionsFourthFold = {
    //   root: null,
    //   threshold: 0.3,
    // };
    // const ObserveFourthFold = new IntersectionObserver(
    //   callBackFourthFoldAboutUs,
    //   optionsFourthFold
    // );
    // const FourthFoldAboutUS = document.getElementById("about-us-fourthfold");
    // if (FourthFoldAboutUS) {
    //   ObserveFourthFold.observe(FourthFoldAboutUS);
    // }
  }, []);
  return null;
}

export default ScrollListener;
