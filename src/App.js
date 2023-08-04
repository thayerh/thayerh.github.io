import './App.css';
import BigTextBox from './components/BigTextBox';
import CircleNavBox from './components/CircleNavBox';
import ContactNavBox from './components/ContactNavBox';
import NavBar from './components/NavBar';
import SlideTextBox from './components/SlideTextBox';

const Colors = {
  white: "#ffffff",
  smokyBlack: "#14110f",
  spaceCadet: "#282a3e",
  marianBlue: "#2a4494",
  persianGreen: "#1b998b",
  icterine: "#fffd82",
  atomicTangerine: "#ff9b71",
  frenchGray: "#ced3dc",
  periwinkle: "#b2abf2",
}

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <SlideTextBox bg={Colors.atomicTangerine} tc={Colors.smokyBlack} to="#"/>
        <div className="circleContainer">
          <CircleNavBox bg={Colors.frenchGray} tc={Colors.spaceCadet} text="Work" icon={
            <svg width="50px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.02 26.78">
              <g>
                <rect x=".5" y="11.47" width="37.02" height="14.81" rx="2.82" ry="2.82" style={{fill: Colors.frenchGray}}/>
                <path style={{fill: Colors.spaceCadet}} d="m34.71,26.78H3.32c-1.83,0-3.32-1.49-3.32-3.32v-9.18c0-1.83,1.49-3.32,3.32-3.32h31.39c1.83,0,3.32,1.49,3.32,3.32v9.18c0,1.83-1.49,3.32-3.32,3.32ZM3.32,11.97c-1.28,0-2.32,1.04-2.32,2.32v9.18c0,1.28,1.04,2.32,2.32,2.32h31.39c1.28,0,2.32-1.04,2.32-2.32v-9.18c0-1.28-1.04-2.32-2.32-2.32H3.32Z"/>
              </g>
              <rect style={{fill: Colors.spaceCadet}} x="9.57" y="21.52" width="18.87" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="2.55" y="21.52" width="5.43" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="29.65" y="21.52" width="5.43" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="7.1" y="18.13" width="5.58" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="2.55" y="18.13" width="3.55" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="28.57" y="18.13" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="9.32" y="14.56" width="7.72" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="2.55" y="14.56" width="5.43" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="32.37" y="14.56" width="2.72" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="21.01" y="18.13" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="13.65" y="18.13" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="17.83" y="14.56" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="24.93" y="14.56" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <path style={{fill: Colors.spaceCadet}} d="m32.98,11.05l-2-.06c.07-2.43-.5-3.91-1.69-4.4-.84-.35-1.62-.09-3.05.43-1.38.5-3.09,1.13-5.41,1.04-1.92-.08-4.03-1.74-4.62-3.62-.44-1.41-.44-2.36-.44-4.43h2c0,1.98,0,2.72.35,3.84.33,1.08,1.71,2.17,2.79,2.22,1.92.07,3.37-.45,4.64-.92,1.49-.54,2.9-1.06,4.5-.4,2.04.84,3.03,2.96,2.93,6.31Z"/>
            </svg>} to="#"/>
          <CircleNavBox bg={Colors.spaceCadet} tc={Colors.frenchGray} text="About Me" icon={
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97919 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 0L10.5 30H13.5L13.5 0L10.5 0Z" fill="black"/>
            </svg>} to="#"/>
        </div>
        <ContactNavBox bg={Colors.icterine} tc={Colors.smokyBlack} text="Contact Me" icon={
          <svg width="50px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.02 26.78">
              <g>
                <rect x=".5" y="11.47" width="37.02" height="14.81" rx="2.82" ry="2.82" style={{fill: Colors.frenchGray}}/>
                <path style={{fill: Colors.spaceCadet}} d="m34.71,26.78H3.32c-1.83,0-3.32-1.49-3.32-3.32v-9.18c0-1.83,1.49-3.32,3.32-3.32h31.39c1.83,0,3.32,1.49,3.32,3.32v9.18c0,1.83-1.49,3.32-3.32,3.32ZM3.32,11.97c-1.28,0-2.32,1.04-2.32,2.32v9.18c0,1.28,1.04,2.32,2.32,2.32h31.39c1.28,0,2.32-1.04,2.32-2.32v-9.18c0-1.28-1.04-2.32-2.32-2.32H3.32Z"/>
              </g>
              <rect style={{fill: Colors.spaceCadet}} x="9.57" y="21.52" width="18.87" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="2.55" y="21.52" width="5.43" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="29.65" y="21.52" width="5.43" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="7.1" y="18.13" width="5.58" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="2.55" y="18.13" width="3.55" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="28.57" y="18.13" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="9.32" y="14.56" width="7.72" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="2.55" y="14.56" width="5.43" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="32.37" y="14.56" width="2.72" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="21.01" y="18.13" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="13.65" y="18.13" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="17.83" y="14.56" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <rect style={{fill: Colors.spaceCadet}} x="24.93" y="14.56" width="6.51" height="2.63" rx=".37" ry=".37"/>
              <path style={{fill: Colors.spaceCadet}} d="m32.98,11.05l-2-.06c.07-2.43-.5-3.91-1.69-4.4-.84-.35-1.62-.09-3.05.43-1.38.5-3.09,1.13-5.41,1.04-1.92-.08-4.03-1.74-4.62-3.62-.44-1.41-.44-2.36-.44-4.43h2c0,1.98,0,2.72.35,3.84.33,1.08,1.71,2.17,2.79,2.22,1.92.07,3.37-.45,4.64-.92,1.49-.54,2.9-1.06,4.5-.4,2.04.84,3.03,2.96,2.93,6.31Z"/>
            </svg>
        } to="#"/>
        <BigTextBox bg={Colors.persianGreen} tc={Colors.white} head="What I do Well" body="I craft elegant code solutions with a passion for continuous learning and improvement."/>
        
      </div>
    </div>
  );
}

export default App;