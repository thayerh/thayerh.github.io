import Arrow from "../assets/icons/Arrow"

const BigProjectBox = ({bg, tc, title, num, to}) => {
    return ( 
        <a href={to} className="bigProjectBox">
            <div className="bubbleContainer bpbContainer" style={{
                backgroundColor: bg,
                color: tc
            }}>
                <div className="pbChild pbTop">
                    <h3>{num}</h3>
                </div>
                <div className="pbChild pbMiddle">
                    <h2>{title}</h2>
                </div>
                <div className="pbChild pbBottom">
                    <Arrow p={tc} w="24" h="32" /> 
                </div>
            </div>
        </a>
    );
}
 
export default BigProjectBox;