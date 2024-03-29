import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import linkedin from "../assets/linkedIn.svg";
import envelope from "../assets/envelope.svg";
import twitter from "../assets/twitter.svg";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <div
          className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#bf61ff]" />
            <div className="w-1 sm:h-80 h-40 blue-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#bf61ff]">Augustine</span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100`}>
              A frontend developer with over 3 years of working experience.
              <br className="sm:block hidden" /> I design and develop
              user-friendly, interactive, and visually appealing
              <br className="sm:block hidden" />
              websites and applications using the latest and most efficient
              technologies.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              <img src={github} alt="github icon" width={35} />
              <img src={linkedin} alt="github icon" width={30} />
              <img src={twitter} alt="github icon" width={30} />
              <img src={envelope} alt="github icon" width={30} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-28 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
