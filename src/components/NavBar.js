import NavIcon from "../assets/icons/NavIcon";
import { motion } from "framer-motion";
import { useRef } from "react";

const NavBar = () => {
    const constraintsRef = useRef(null);

    return ( 
        <div className="nav" ref={constraintsRef}>
            <motion.div
                initial={{ opacity: 0, scale: 0.8, marginTop: "200px" }}
                whileInView={{ opacity: 1, scale: 1, marginTop: "0px" }}
                transition={{ duration: .5 }}
                drag
                dragConstraints={ 
                    constraintsRef
                }
                whileTap={{ scale: 0.85 }}
                >
                <NavIcon />
            </motion.div>
        </div>
    );
}
 
export default NavBar;