import Keyboard from "../assets/icons/Keyboard";

const GetInTouchBox = ({bg, tc, title, body}) => {
    return (     
        <div className="bubbleContainer gitbContainer" style={{
            backgroundColor: bg,
            color: tc
        }}>
            <div className="gitbChild gitbTop">
                <h3>{title}</h3>
            </div>
            <div className="gitbChild gitbMiddle">
                <h3>{body}</h3>
            </div>
            <div className="gitbChild gitbBottom">
                <Keyboard p={tc} s={bg} w="24" h="32" />
                <Keyboard p={tc} s={bg} w="24" h="32" />
                <Keyboard p={tc} s={bg} w="24" h="32" />
            </div>
        </div>
    );
}
 
export default GetInTouchBox;