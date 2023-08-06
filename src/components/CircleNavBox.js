import { motion } from "framer-motion";

const CircleNavBox = ({ bg, tc, text, icon, to }) => {
    return ( 
        <a href={to} className="circleNavBox">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}>
                <div className="bubbleContainer cnbContainer" style={{
                    backgroundColor: String(bg),
                    color: String(tc),
                }}>
                    <div className="cnbSub">
                        {icon}
                        <h2>{text}</h2>
                    </div>
                </div>
            </motion.div>
        </a>
    );
}
 
export default CircleNavBox;