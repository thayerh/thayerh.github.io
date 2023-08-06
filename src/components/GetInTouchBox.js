import Keyboard from "../assets/icons/Keyboard";
import { motion } from "framer-motion";

const GetInTouchBox = ({bg, tc, title, body}) => {
    return (  
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}>   
            <div className="bubbleContainer gitbContainer" style={{
                backgroundColor: bg,
                color: tc
            }}>
                <div className="gitbChild gitbTop">
                    <h3>{title}</h3>
                </div>
                <div className="gitbChild gitbMiddle">
                    <h3>{body}</h3>
                </div>
                <div className="gitbChild gitbBottom">
                    <Keyboard p={tc} s={bg} w="24" h="32" />
                    <Keyboard p={tc} s={bg} w="24" h="32" />
                    <Keyboard p={tc} s={bg} w="24" h="32" />
                </div>
            </div>
        </motion.div>
    );
}
 
export default GetInTouchBox;