import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SOURABH KUMAR SINGH</motion.h2>

          <motion.h1 variants={textVariants}>
            Web developer and Software Engineer
          </motion.h1>

          <motion.div variants={textVariants} className="buttons">
            <a href="#Portfolio">
              <motion.button variants={textVariants}>Portfolio</motion.button>
            </a>
            <a href="#Contact">
              <motion.button
                variants={textVariants}
                onClick={() => console.log("Clicked")}
              >
                Contact
              </motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        WEB DEVELOPER AND SOFTWARE ENGINEER
      </motion.div>
      <div className="imageContainer">
        <img src="/hero1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
