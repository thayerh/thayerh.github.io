import NavIcon from "../assets/icons/NavIcon";
import { motion } from "framer-motion";

const NavBar = () => {
    return ( 
        <div className="nav">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, marginTop: "200px" }}
                whileInView={{ opacity: 1, scale: 1, marginTop: "0px" }}
                transition={{ duration: .5 }} >
                <NavIcon />
            </motion.div>
        </div>
    );
}
 
export default NavBar;