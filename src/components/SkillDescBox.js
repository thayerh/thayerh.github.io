import FadeInContainer from "./FadeInContainer";

const SkillDescBox = ({ bg, tc, head, text, icon }) => {
    return ( 
        <FadeInContainer children={
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
        } />
    );
}
 
export default SkillDescBox;