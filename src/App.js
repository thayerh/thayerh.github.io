import './App.css';
import CircleNavBox from './components/CircleNavBox';
import NavBar from './components/NavBar';
import SlideTextBox from './components/SlideTextBox';

const Colors = {
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
        <SlideTextBox bg={Colors.atomicTangerine} to="#"/>
        <div className="circleContainer">
          <CircleNavBox bg={Colors.frenchGray} tc={Colors.spaceCadet} text="Work" icon={
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97919 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 0L10.5 30H13.5L13.5 0L10.5 0Z" fill="black"/>
            </svg>} to="#"/>
          <CircleNavBox bg={Colors.spaceCadet} tc={Colors.frenchGray} text="About Me" icon={
            <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.9393 31.0607C11.5251 31.6464 12.4749 31.6464 13.0607 31.0607L22.6066 21.5147C23.1924 20.9289 23.1924 19.9792 22.6066 19.3934C22.0208 18.8076 21.0711 18.8076 20.4853 19.3934L12 27.8787L3.51472 19.3934C2.92893 18.8076 1.97919 18.8076 1.3934 19.3934C0.807611 19.9792 0.807611 20.9289 1.3934 21.5147L10.9393 31.0607ZM10.5 0L10.5 30H13.5L13.5 0L10.5 0Z" fill="black"/>
            </svg>} to="#"/>
        </div>
        
      </div>
    </div>
  );
}

export default App;