import "./navbar.scss"
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
        <div className="wrapper">
          <motion.span initial={{opacity:0, scale: 0.5}}
          animate={{opacity:1, scale: 1}}
          transition={{duration: 0.5}}
          >Sourabh</motion.span>
          <div className="social">
            <a href="https://github.com/Sourz-101" target="__blank"><ImGithub size={32} /></a>
            <a href="https://twitter.com/Sourz_0 " target="__blank"><BsTwitterX size={32} /></a>
            <a href="https://www.linkedin.com/in/sourabh-ks/" target="__blank"><BsLinkedin size={32} /></a>
            <a href="https://www.instagram.com/sourz_ks/" target="__blank"><FaInstagram size={32} /></a>
          </div>
        </div>
    </div>
  )
}

export default Navbar