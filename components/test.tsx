"use client";
import React, { useEffect, useRef, useState } from "react";

const ScrollToNextSection: React.FC = () => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const handleScroll = () => {
    const currentScrollpos = window.scrollY;
    const currentPosition = window.scrollY;

    if (currentScrollpos > prevScrollPos) {
      console.log("Scrolling down");
      sectionRefs.forEach((sectionRef, index) => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const sectionBottom = sectionTop + sectionRef.current.clientHeight;

          // Check if scrolling down and within the current section
          if (
            currentPosition >= sectionTop &&
            currentPosition < sectionBottom
          ) {
            const nextSectionIndex = index + 1;
            const nextSectionRef = sectionRefs[nextSectionIndex];

            if (nextSectionRef && nextSectionRef.current) {
              window.scrollTo({
                top: nextSectionRef.current.offsetTop,
                behavior: "smooth",
              });
            }
          }
        }
      });
    }

    if (currentScrollpos < prevScrollPos) {
      sectionRefs.forEach((sectionRef, index) => {
        if (sectionRef.current) {
          const sectionTop = sectionRef.current.offsetTop;
          const sectionBottom = sectionTop + sectionRef.current.clientHeight;

          // Check if scrolling up and within the current section
          if (
            currentPosition >= sectionBottom &&
            currentPosition < sectionBottom + 1
          ) {
            const prevSectionIndex = index - 1;
            const prevSectionRef = sectionRefs[prevSectionIndex];

            if (prevSectionRef && prevSectionRef.current) {
              window.scrollTo({
                top: prevSectionRef.current.offsetTop,
                behavior: "smooth",
              });
            }
          }
        }
      });
    }

    setPrevScrollPos(currentScrollpos);
  };

  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section ref={sectionRefs[0]} className="w-full h-screen">
        {/* Content for the first section */}
        <h1>First Section Heading</h1>
        {/* ... Your content ... */}
      </section>
      <section ref={sectionRefs[1]} className="w-full h-screen">
        {/* Content for the second section */}
        <h2>Second Section Heading</h2>
        {/* ... Your content ... */}
      </section>
      <section ref={sectionRefs[2]} className="w-full h-screen">
        {/* Content for the third section */}
        <h3>Third Section Heading</h3>
        {/* ... Your content ... */}
      </section>
      <section ref={sectionRefs[3]} className="w-full h-screen">
        {/* Content for the fourth section */}
        <h4>Fourth Section Heading</h4>
        {/* ... Your content ... */}
      </section>
    </div>
  );
};

export default ScrollToNextSection;
