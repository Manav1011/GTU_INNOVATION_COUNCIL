"use client";
import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import styles from "./styles.module.css";

const callbackSecondFoldFirstView = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("here");
    }
  });
};

const Page = ({
  ref,
  id,
  offset,
  gradient,
  onClick,
  logo,
  header,
  content,
}) => (
  <>
    <ParallaxLayer offset={offset} speed={0.1} id={id}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>
    <ParallaxLayer
      offset={offset}
      speed={0.5}
      className={`${styles.text}`}
      id="secondfolds"
    >
      <div className="flex justify-center flex-col sm:flex-row items-center h-screen">
        {logo && <div className="w-full h-48  sm:w-1/4 text-center ">
          <img
            src={logo}
            alt="Leafs"
            className="mx-auto"
            style={{ width: "300px", height: "auto" }}
          />
        </div>}
        <div className="order-1 sm:order-2w-full sm:w-8/12">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-2 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="uppercase text-2xl lg:text-4xl sm:text-3xl font-bold">{header}</h1>
                <div className="w-20 h-2 bg-green-700 my-4" />
                <p className="text-lg lg:text-xl mb-10">{content}</p>
              </div>
            </header>
          </div>
        </div>
          <div className="order-3 flex flex-row justify-center cursor-pointer items-center"  onClick={onClick}>
          <span className="inline mr-2">view more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
          </svg>
          </div>
      </div>
    </ParallaxLayer>
  </>
);
export default function SecondFold() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  return (
    <>
    <div className="h-screen bg-slate-100 bg-opacity-70" id='secondfolddiv' style={{backgroundAttachment:'fixed'}}>
      <Parallax
        ref={parallax}
        pages={4}
        id="secondfold"
        horizontal
        className=""
        // style={{
        //   backgroundAttachment: "fixed",
        //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        // }}
      >
        <Page
          id="secondfoldfirstview"
          offset={0}
          gradient="red"
          onClick={() => scroll(1)}
          logo={"/images/secondfold/SSIP.png"}
          header={"The Student Startup and Innovation Policy"}
          content={
            <>
              GTU has been at forefront in the sphere of student innovation start-up ecosystem development.
            </>
          }
        />
        <Page
          offset={1}
          gradient="teal"
          onClick={() => scroll(2)}
          // logo={"/images/secondfold/IPR.png"}
          header={"Intellectual property right"}
          content={
            <>
             GTU IPR Cell was constituted under the aegies of GTU Innovation Council (GIC) since 3rd September 2011.
            </>
          }
        />
        <Page
          offset={2}
          gradient="tomato"
          onClick={() => scroll(3)}
          // logo={"/images/secondfold/NODALINSTITUTE.png"}
          header={"Nodal Institutes"}
          content={
            <>
              Assistance to Startups/Innovation scheme’s operative period is 01 January, 2015 to 31 December, 2019
            </>
          }
        />
        <Page
          id="secondfoldlastview"
          offset={3}
          gradient="teal"
          onClick={() => scroll(0)}
          // logo={"/images/secondfold/DIC.png"}
          header={"Design Innovation Centre"}
          content={
            <>
              MHRD Design-centred innovation is a force multiplier that can help the country move up the value chain, making Indian industry globally competitive.
            </>
          }
        />
      </Parallax>
    </div>    
    </>
  );
}
