const BigTextBox = ({bg, tc, fs, head, body}) => {
    return ( 
        <div className="bubbleContainer btbContainer" style={{
            backgroundColor: bg,
            color: tc
        }}>
            <div className="btbChild btbTop">
                <h3>{head}</h3>
            </div>
            <div className="btbChild btbBottom">
                <h2 style={{
                    fontSize: fs
                }}>{body}</h2> 
            </div>
        </div>
    );
}
 
export default BigTextBox;