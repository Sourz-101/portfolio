import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Muscle Bro",
    img: "muscleBro.png",
    desc: "I successfully developed \"Muscle Bro,\" a React application tailored for fitness enthusiasts. In the development process, I strategically employed Rapid API to dynamically retrieve exercise data, GIFs, and videos, enriching the user interface. Furthermore, I enhanced the overall user experience by seamlessly integrating information on related equipment, exercises, and pertinent YouTube videos. ",
    link: "https://muscle-bro.netlify.app/",
  },
  {
    id: 2,
    title: "Youtube Playlist Length",
    img: "ytlength.png",
    desc: "I designed and developed a Chrome extension with the purpose of calculating YouTube playlist durations. Focused on optimizing user experience, the extension provides a lightweight and efficient solution. Notably, it displays both the average video duration and the total time for playlists, accommodating various playback speeds for added convenience.",
    link: "https://github.com/Sourz-101/Youtube-Playlist-Length",
  },
  {
    id: 3,
    title: "Dancing Finger",
    img: "df.png",
    desc: "I developed a typing test website using a combination of HTML, CSS, and JavaScript. To enhance the visual appeal, I incorporated particle-js, creating a captivating floating web animation effect. The primary objective of the website is to assess and enhance users' typing speed, demonstrating a practical application of my web development skills with a focus on user engagement and functionality.",
    link: "https://sourz-101.github.io/Dancing-Fingers/",
  },
  {
    id: 4,
    title: "Portfolio Website",
    img: "portfolio.png",
    desc: "I crafted a portfolio website to showcase my professional details, employing React.js to ensure a modular and responsive design. To elevate the visual appeal, I integrated framer motion for stunning animations. This combination of technologies results in an engaging and visually appealing platform, reflecting both my proficiency in web development and a commitment to presenting professional information in an aesthetically pleasing manner.",
    link: "#",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={`${item.link}`} target="__blank"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
