import './App.css';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Ventures from './components/Ventures.jsx';
import ReachOut from './components/ReachOut.jsx';

function App() {
  return (
  <div>
    <Intro />
    <div className="b-example-divider"></div>
    <Projects />
    <div className="b-example-divider"></div>
    <Ventures />
    <div className="b-example-divider"></div>
    <ReachOut />
  </div>
  );
}

export default App;
