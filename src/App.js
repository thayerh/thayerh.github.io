// https://www.thecraftsmen.tech

import './App.css';
import AboutIcon from './assets/icons/AboutIcon';
import Keyboard from './assets/icons/Keyboard';
import BigProjectBox from './components/BigProjectBox';
import BigTextBox from './components/BigTextBox';
import CircleNavBox from './components/CircleNavBox';
import ContactNavBox from './components/ContactNavBox';
import GetInTouchBox from './components/GetInTouchBox';
import NavBar from './components/NavBar';
import SkillDescBox from './components/SkillDescBox';
import SlideTextBox from './components/SlideTextBox';
import SmallProjectBox from './components/SmallProjectBox';
import Contact from './assets/icons/Contact';
import CurlyBraces from './assets/icons/CurlyBraces';
import Book from './assets/icons/Book';

const Colors = {
  white: "#ffffff",
  smokyBlack: "#14110f",
  spaceCadet: "#282a3e",
  marianBlue: "#2a4494",
  persianGreen: "#1b998b",
  icterine: "#fffd70",
  atomicTangerine: "#ff8d5c",
  frenchGray: "#ced3dc",
  periwinkle: "#b2abf2",
  emerald: "#57cc99",
  verdigris: "#38a3a5",
  celadon: "#a1e8af",   
  unc: "#7BAFD4",
}

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
};

  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <div className="group">

        <SlideTextBox bg={Colors.atomicTangerine} tc={Colors.icterine} to="" onClick={() => scrollToSection("#bpb")}/>
        <div className="circleContainer">
          <CircleNavBox bg={Colors.frenchGray} tc={Colors.spaceCadet} text="Work" icon={
            <Keyboard p={Colors.spaceCadet} s={Colors.frenchGray}/>} to="#"/>
          <CircleNavBox bg={Colors.spaceCadet} tc={Colors.frenchGray} text="About Me" icon={
            <AboutIcon p={Colors.spaceCadet} s={Colors.frenchGray} />} to="#"/>
        </div>
        <ContactNavBox bg={Colors.icterine} tc={Colors.spaceCadet} text="Contact Me" icon={
          <Contact p={Colors.spaceCadet} /> } />
        </div>
        
        <div className="group">
        <BigTextBox bg={Colors.celadon} tc={Colors.marianBlue} fs="26pt" head="What I do well" body="I craft elegant code solutions with a passion for continuous learning and improvement."/>
        <SkillDescBox bg={Colors.spaceCadet} tc={Colors.white} head="Elegant Code" text="I have experience in modernizing legacy code, ensuring it's easily comprehensible for streamlined teamwork and smooth future updates."
          icon={<CurlyBraces p={Colors.white} w="40px" />} />
        <SkillDescBox bg={Colors.spaceCadet} tc={Colors.white} head="Learning" text="Embarking on a self-taught coding journey ignited my passion for continuous learning, driving me to constantly evolve and embrace new challenges in software development."
          icon={<Book p={Colors.white} w="40px" />} />
        </div>

        <div className="group">
        <BigProjectBox bg={Colors.unc} tc={Colors.white} title="CDS Nutrition Calculator" num="00." to="/cds-calculator" id="bpb" />
        <div className="projRow">
          <SmallProjectBox bg={Colors.frenchGray} tc={Colors.marianBlue} title="NIOFE Mortgage Calculators" num="01." to="/mortgage-calculators" />
          <SmallProjectBox bg={Colors.marianBlue} tc={Colors.white} title="TetraShell" num="02." to="https://github.com/thayerh/TetraShell" />
        </div>
        <div className="projRow">
          <SmallProjectBox bg={Colors.atomicTangerine} tc={Colors.icterine} title="New Hope" num="03." to="https://github.com/New-Hope-App/newhopeapp" />
          <SmallProjectBox bg={Colors.periwinkle} tc={Colors.white} title="Sustainable Termite Housing" num="04." to="https://github.com/thayerh/sustainable-termite-housing" />
        </div>
        </div>
        
        <div className="group">
        <BigTextBox bg={Colors.icterine} tc={Colors.persianGreen} fc="17pt" head="About me" body="I got my first taste of the thrilling atmosphere of software development a third grade Lego robotics competiton. As a native Oregonian, being outside is in my blood."/>
        <GetInTouchBox bg={Colors.persianGreen} tc={Colors.frenchGray} title="Get in touch" body="I’m always looking for new opportunities and projects, so feel free to reach out!" />
        </div>
        
        <h3 style={{color: Colors.white, textAlign: "center", marginTop: "50px"}}>© 2023 Thayer Hicks</h3>
      </div>
    </div>
  );
}

export default App;