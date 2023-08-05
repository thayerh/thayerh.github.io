import FadeInContainer from "./FadeInContainer";

const CircleNavBox = ({ bg, tc, text, icon, to }) => {
    return ( 
        <a href={to} className="circleNavBox">
            <FadeInContainer children={
                <div className="bubbleContainer cnbContainer" style={{
                    backgroundColor: String(bg),
                    color: String(tc),
                }}>
                    <div className="cnbSub">
                        {icon}
                        <h2>{text}</h2>
                    </div>
                </div>
            } />
        </a>
    );
}
 
export default CircleNavBox;