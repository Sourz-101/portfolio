import { motion } from "framer-motion";


const Cards = ({card}) => {
  return (
    
        <motion.div
          className="container"
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: "100%",
          }}
        >
          <img src={`${card}`}/>
        </motion.div>

  )
}

export default Cards