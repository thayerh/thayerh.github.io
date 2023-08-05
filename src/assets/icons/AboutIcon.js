const AboutIcon = ({p, s}) => {
    return ( 
        <svg height="35px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 38">
            <path d="m8.33,0h20.67c.55,0,1,.45,1,1v36c0,.55-.45,1-1,1H1c-.55,0-1-.45-1-1V7.41c0-.3.13-.59.36-.79L7.5.31c.23-.2.52-.31.83-.31Z" style={{fill: s}}/>
            <g>
            <rect x="2.77" y="18.85" width="24.46" height="2.54" rx="1.1" ry="1.1" style={{fill: p}}/>
            <rect x="2.77" y="32.8" width="20.12" height="2.54" rx="1" ry="1" style={{fill: p}}/>
            <rect x="2.77" y="27.98" width="24.46" height="2.54" rx="1.1" ry="1.1" style={{fill: p}}/>
            <rect x="2.77" y="23.32" width="24.46" height="2.54" rx="1.1" ry="1.1" style={{fill: p}}/>
            </g>
            <path d="m16.62,10.53h4.97c2.21,0,4,1.79,4,4v.71h-12.97v-.71c0-2.21,1.79-4,4-4Z" style={{fill: p}}/>
            <circle cx="19.22" cy="6.96" r="3.34" style={{fill: p}}/>
        </svg>
    );
}
 
export default AboutIcon;