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
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick} id={id}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>
    <ParallaxLayer
      offset={offset}
      speed={0.5}
      className={`${styles.text}`}
      id="secondfolds"
    >
      <div className="sm:mt-0 flex justify-center flex-col sm:flex-row items-center h-screen">
        <div className="w-full h-48  sm:w-1/4 text-center ">
          <img
            src={logo}
            alt="Leafs"
            className="mx-auto"
            style={{ width: "300px", height: "auto" }}
          />
        </div>
        <div className="order-1 sm:order-2w-full sm:w-8/12">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-2 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">{header}</h1>
                <div className="w-20 h-2 bg-green-700 my-4" />
                <p className="text-xl mb-10">{content}</p>
              </div>
            </header>
          </div>
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
    <div className="h-screen" id='secondfolddiv'>
      <Parallax
        ref={parallax}
        pages={4}
        id="secondfold"
        horizontal
        className="mt-20"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f1f5f9'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
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
          logo={"/images/secondfold/IPR.png"}
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
          logo={"/images/secondfold/NODALINSTITUTE.png"}
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
          logo={"/images/secondfold/DIC.png"}
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
