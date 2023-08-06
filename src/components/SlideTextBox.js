import Arrow from "../assets/icons/Arrow"
import { motion } from "framer-motion";

const SlideTextBox = ({bg, tc, to}) => {
    return ( 
        <a href={to} className="slideTextBox">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}>
                <div className="bubbleContainer stbContainer" style={{
                    backgroundColor: bg,
                    color: tc
                }}>
                    <div className="stbChild stbTop">
                        <h3>My Tech Stack</h3>
                    </div>
                    <div className="stbChild stbMiddle">
                        <h1>{"Python"}</h1>
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