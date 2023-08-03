import './App.css';
import CircleNavBox from './components/CircleNavBox';
import NavBar from './components/NavBar';
import SlideTextBox from './components/SlideTextBox';

function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="content">
        <SlideTextBox />
        <CircleNavBox />
      </div>
    </div>
  );
}

export default App;