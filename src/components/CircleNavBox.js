const CircleNavBox = ({ to }) => {
    return ( 
        <a href={to} width="60px" className="circle-nav-box">
            <div className="stb-container">
                <div className="stb-top">
                    <h3>My Tech Stack</h3>
                </div>
                <div className="stb-bottom">
                    <h3>See it in Action</h3>
                    <svg className="stb-arrow" width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97919 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 0L10.5 30H13.5L13.5 0L10.5 0Z" fill="black"/>
                    </svg> 
                </div>
            </div>
        </a>
    );
}
 
export default CircleNavBox;