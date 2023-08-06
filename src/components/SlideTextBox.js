import Arrow from "../assets/icons/Arrow"
import { motion } from "framer-motion";

const SlideTextBox = ({bg, tc, to}) => {
    const containerVariants = {
        animate: {
            x: ["50%", "-50%"], // Animates from 0% to -100% and back to 0%
            transition: {
              duration: 16,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop" // To make it go back and forth
            }
        }
    };

    const text = "Python JavaScript C React Java HTML CSS MatLab"

    return ( 
        <a href={to} className="slideTextBox">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}>
                <div className="bubbleContainer stbContainer" style={{
                    backgroundColor: bg,
                    color: tc,
                }}>
                    <div className="stbChild stbTop">
                        <h3>My Tech Stack</h3>
                    </div>
                    <div className="stbChild stbMiddle">
                        <motion.h1
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            style={{
                            // Double the width to cover the loop distance
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                            }}>
                            {text}&nbsp; 
                        </motion.h1>
                        <motion.h1
                            variants={containerVariants}
                            initial="initial"
                            animate="animate"
                            transition="transition"
                            style={{
                            // Double the width to cover the loop distance
                            display: "flex",
                            alignItems: "center",
                            whiteSpace: "nowrap",
                            }}>
                            {text}&nbsp;
                        </motion.h1>
                    </div>
                    <div className="stbChild stbBottom">
                        <h3>See it in action</h3>
                        <Arrow p={tc} w="24" h="32" /> 
                    </div>
                </div>
            </motion.div>
        </a>
    );
}
 
export default SlideTextBox;