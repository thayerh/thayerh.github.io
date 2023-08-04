const CircleNavBox = ({ bg, tc, text, icon, to }) => {
    return ( 
        <a href={to} className="circleNavBox">
            <div className="bubbleContainer cnbContainer" style={{
                backgroundColor: bg,
                color: tc,
            }}>
                <div className="cnbSub">
                    {icon}
                    <h2>{text}</h2>
                </div>
            </div>
        </a>
    );
}
 
export default CircleNavBox;