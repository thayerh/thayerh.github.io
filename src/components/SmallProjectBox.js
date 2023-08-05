import Arrow from "../assets/icons/Arrow"

const SmallProjectBox = ({bg, tc, title, num, to}) => {
    return ( 
        <a href={to} className="smallProjectBox">
            <div className="bubbleContainer spbContainer" style={{
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
                    <Arrow p={tc} w="12" h="16" /> 
                </div>
            </div>
        </a>
    );
}
 
export default SmallProjectBox;