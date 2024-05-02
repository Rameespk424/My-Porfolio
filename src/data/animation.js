import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        " Crafting Dynamic Interfaces: A Showcase of Five Years as a React Engineer",
      ],
      typeSpeed: 40, // typing speed in milliseconds
      loop: false, // loop the animation
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <span
      ref={typedTextRef}
      style={{
        fontSize: "24px",
        color: "#8892b0",
        paddingTop: '1rem',
        paddingBottom: '1rem',
        maxWidth: '700px'
      }}
    />
  );
};

export default TypingAnimation;
