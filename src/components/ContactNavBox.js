import { motion } from "framer-motion";

const ContactNavBox = ({ bg, tc, to, text, icon }) => {
    return ( 
        <a href={to} className="contactNavBox">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}>
                <div className="bubbleContainer conContainer" style={{
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
 
export default ContactNavBox;