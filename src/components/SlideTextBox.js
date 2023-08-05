import Arrow from "../assets/icons/Arrow"
import FadeInContainer from "./FadeInContainer";

const SlideTextBox = ({bg, tc, to}) => {
    return ( 
        <a href={to} className="slideTextBox">
            <FadeInContainer children= {
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
            } />
        </a>
    );
}
 
export default SlideTextBox;