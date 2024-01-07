import { motion } from "framer-motion";
import "./about.scss";
import Cards from "./Cards";

const About = () => {

  const image = [
    "html.png",
    "css.png",
    "js.png",
    "node.png",
    "cpp.png"
  ];

  const h1Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="outerBox">
      <motion.h1 variants={h1Variants} initial="initial" animate="animate">ABOUT</motion.h1>
      <p>
        Hi, My name is Sourabh Kumar Singh, I am a final year Bachelor of
        Technology student majoring in Computer Science and Engineering at
        Kalinga Institute of Industrial Technology. I bring expertise in web
        development, encompassing HTML, CSS, Bootstrap, JavaScript, React.js,
        Redux and many more technologies. I am also good with languages like
        C/C++, have exceptional skills in SQL and have deeper understanding of
        Object Oriented Programming concepts.
        <br />
        <br />I am actively seeking internship or full-time opportunities to
        further enhance my skills and gain valuable experience.
      </p>

      <div className="cardContainer">
      {image.map((card) => (
        <Cards card={card} key={card} />
      ))}
      </div>

      
    </div>
  );
};

export default About;
