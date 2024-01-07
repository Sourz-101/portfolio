// about.jsx
// import { useRef } from "react";
// import "./about.scss";
// import { motion, useInView } from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const about = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="about"
//       variants={variants}
//       initial="initial"
//       // animate="animate"
//       // whileInView="animate"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="textContainer" variants={variants}>
//         <p>
//           I focus on helping your brand grow
//           <br /> and move forward
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="titleContainer" variants={variants}>
//         <div className="title">
//           <img src="/people.webp" alt="" />
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
//           </h1>
//         </div>
//         <div className="title">
//           <h1>
//             <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
//           </h1>
//           <button>WHAT WE DO?</button>
//         </div>
//       </motion.div>
//       <motion.div className="listContainer" variants={variants}>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//         <motion.div
//           className="box"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Branding</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//             libero enim nisi aliquam consectetur expedita magni eius ex corrupti
//             animi! Ad nam pariatur assumenda quae mollitia libero repellat
//             explicabo maiores?
//           </p>
//           <button>Go</button>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default about;


















// about.scss

// @import "../../app.scss";
// .about {
//   background: linear-gradient(180deg, #0c0c1d, #111132);
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   .textContainer {
//     flex: 1;
//     align-self: flex-end;
//     display: flex;
//     align-items: center;
//     gap: 20px;

//     @include mobile {
//       align-self: center;
//       text-align: center;
//       flex-direction: column;
//     }

//     p {
//       font-weight: 200;
//       font-size: 20px;
//       color: gray;
//       text-align: right;
//     }

//     hr {
//       width: 500px;
//       border: none;
//       border-top: 0.5px solid gray;

//       @include mobile {
//         width: 300px;
//       }
//     }
//   }
//   .titleContainer {
//     flex: 2;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     @include mobile {
//       width: 100%;
//     }

//     .title {
//       display: flex;
//       align-items: center;
//       gap: 50px;

//       @include mobile {
//         flex-direction: column;
//         text-align: center;
//         gap: 20px;
//       }

//       img {
//         width: 300px;
//         height: 100px;
//         border-radius: 50px;
//         object-fit: cover;

//         @include mobile {
//           width: 200px;
//           height: 50px;
//         }
//       }

//       h1 {
//         font-size: 96px;
//         font-weight: 100;

//         @include mobile {
//           font-size: 36px;
//         }
//       }

//       button {
//         width: 300px;
//         height: 100px;
//         border-radius: 50px;
//         background-color: orange;
//         border: none;
//         font-size: 24px;
//         cursor: pointer;

//         @include mobile {
//           font-size: 16px;
//           width: 150px;
//           height: 50px;
//         }
//       }
//     }
//   }
//   .listContainer {
//     flex: 2;
//     display: flex;
//     max-width: 1366px;
//     margin: auto;

//     @include mobile {
//       flex-direction: column;
//       width: 100%;
//     }

//     .box {
//       padding: 50px;
//       border: 0.5px solid gray;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;

//       @include mobile {
//         border: none;
//         align-items: center;
//         gap: 20px;
//         padding: 10px;
//       }

//       p {
//         @include mobile {
//           display: none;
//         }
//       }

//       button {
//         padding: 10px;
//         background-color: orange;
//         border: none;
//         cursor: pointer;

//         @include mobile {
//           background-color: transparent;
//           border: 1px solid orange;
//           border-radius: 5px;
//           color: orange;
//           width: 50%;
//           padding: 5px;
//         }
//       }
//     }
//   }
// }
