const ContactNavBox = ({ bg, tc, to, text, icon }) => {
    return ( 
        <a href={to} className="contactNavBox">
            <div className="bubbleContainer conContainer" style={{
                backgroundColor: String(bg),
                color: String(tc),
            }}>
                <div className="cnbSub">
                    {icon}
                    <h2>{text}</h2>
                </div>
            </div>
        </a>
    );
}
 
export default ContactNavBox;