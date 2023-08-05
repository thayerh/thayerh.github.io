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
  unc: "#7BAFD4",
}

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <SlideTextBox bg={Colors.atomicTangerine} tc={Colors.smokyBlack} to="#"/>
        <div className="circleContainer">
          <CircleNavBox bg={Colors.frenchGray} tc={Colors.spaceCadet} text="Work" icon={
            <Keyboard p={Colors.spaceCadet} s={Colors.frenchGray}/>} to="#"/>
          <CircleNavBox bg={Colors.spaceCadet} tc={Colors.frenchGray} text="About Me" icon={
            <AboutIcon p={Colors.spaceCadet} s={Colors.frenchGray} />} to="#"/>
        </div>
        <ContactNavBox bg={Colors.icterine} tc={Colors.smokyBlack} text="Contact Me" icon={
          <Keyboard p={Colors.spaceCadet} s={Colors.icterine} /> } to="#"/>
        <BigTextBox bg={Colors.persianGreen} tc={Colors.white} fs="26pt" head="What I do well" body="I craft elegant code solutions with a passion for continuous learning and improvement."/>
        <SkillDescBox bg={Colors.spaceCadet} tc={Colors.white} head="Elegant Code" text="I have experience in modernizing legacy code, ensuring it's easily comprehensible for streamlined teamwork and smooth future updates."
          icon={<Keyboard p={Colors.white} s={Colors.spaceCadet}/>} />
        <SkillDescBox bg={Colors.spaceCadet} tc={Colors.white} head="Learning" text="Embarking on a self-taught coding journey ignited my passion for continuous learning, driving me to constantly evolve and embrace new challenges in software development."
          icon={<Keyboard p={Colors.white} s={Colors.spaceCadet}/>} />
        <BigProjectBox bg={Colors.unc} tc={Colors.white} title="CDS Nutrition Calculator" num="00." to="/cds-calculator" />
        <div className="projRow">
          <SmallProjectBox bg={Colors.frenchGray} tc={Colors.smokyBlack} title="NIOFE Mortgage Calculators" num="01." to="/mortgage-calculators" />
          <SmallProjectBox bg={Colors.marianBlue} tc={Colors.white} title="TetraShell" num="02." to="https://github.com/thayerh/TetraShell" />
        </div>
        <div className="projRow">
          <SmallProjectBox bg={Colors.atomicTangerine} tc={Colors.smokyBlack} title="New Hope" num="03." to="https://github.com/New-Hope-App/newhopeapp" />
          <SmallProjectBox bg={Colors.periwinkle} tc={Colors.smokyBlack} title="Sustainable Termite Housing" num="04." to="https://github.com/thayerh/sustainable-termite-housing" />
        </div>
        <BigTextBox bg={Colors.icterine} tc={Colors.smokyBlack} fc="17pt" head="I'm a Software Developer" body="I got my first taste of the thrilling atmosphere of software development a third grade Lego robotics competiton. As a native Oregonian, being outside is in my blood."/>
        <GetInTouchBox bg={Colors.persianGreen} tc={Colors.white} title="Get in touch" body="I’m always looking for new opportunities and projects, so feel free to reach out!" />
        <h3 style={{color: Colors.white, textAlign: "center", marginTop: "50px"}}>© 2023 Thayer Hicks</h3>
      </div>
    </div>
  );
}

export default App;