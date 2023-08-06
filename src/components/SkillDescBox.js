import { motion } from "framer-motion";

const SkillDescBox = ({ bg, tc, head, text, icon }) => {
    return ( 
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}>
            <div className="bubbleContainer sdbContainer" style={{
                backgroundColor: String(bg),
                color: String(tc),
            }}>
                <div className="sdbSub sdbLeft">
                    {icon}
                </div>
                <div className="sdbSub sdbRight">
                    <h2>{head}</h2>
                    <p>{text}</p>
                </div>
            </div>
        </motion.div>
    );
}
 
export default SkillDescBox;