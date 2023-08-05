import NavIcon from "../assets/icons/NavIcon";
import FadeInContainer from "./FadeInContainer";

const NavBar = () => {
    return ( 
        <FadeInContainer children={
            <div className="nav">
                <NavIcon />
            </div>
        } /> 
    );
}
 
export default NavBar;