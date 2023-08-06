import { motion } from "framer-motion";

const BigTextBox = ({bg, tc, fs, head, body}) => {
    return ( 
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}>
            <div className="bubbleContainer btbContainer" style={{
                backgroundColor: bg,
                color: tc
            }}>
                <div className="btbChild btbTop">
                    <h3>{head}</h3>
                </div>
                <div className="btbChild btbBottom">
                    <h2 style={{
                        fontSize: fs
                    }}>{body}</h2> 
                </div>
            </div>
        </motion.div>
    );
}
 
export default BigTextBox;