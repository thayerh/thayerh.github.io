import { motion } from "framer-motion";
import Insta from "../assets/icons/Insta";
import LinkedIn from "../assets/icons/LinkedIn";
import Facebook from "../assets/icons/Facebook";

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
                    <Insta p={tc} s={bg} w="60px" />
                    <LinkedIn p={tc} s={bg} w="60px" />
                    <Facebook p={tc} s={bg} w="60px" />
                </div>
            </div>
        </motion.div>
    );
}
 
export default GetInTouchBox;