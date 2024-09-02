import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../animation/dev.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            layout
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 50 }}
            className="avatar"
            src="./images/ilyess-modified.png"
            alt="img"
          />
          <div className="icon-verified" />
        </div>
        <motion.h1
          layout
          initial={{ opacity:0 }}
          animate={{ opacity:1}}
          transition={{ duration:6}}
          className="title"
        >
          Software designer, founder, and amateur astronaut
        </motion.h1>
        <p className="subtitle">
          I’m Amamria ILyess, a software designer and entrepreneur based in New
          York City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>
        <div className="allicons flex">
          <div className="icon icon-twitter" />
          <div className="icon icon-instagram" />
          <div className="icon icon-github" />
          <div className="icon icon-linkedin" />
        </div>
      </div>
      <div className="right-section">
        <Lottie animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Hero;
