import './App.css';
import Navbar from './components/Navbar.jsx';
import Intro from './components/Intro.jsx';
import Projects from './components/Projects.jsx';
import Ventures from './components/Ventures.jsx';
import ReachOut from './components/ReachOut.jsx';

function App() {
  return (
  <div>
    <header>
      <Navbar />
    </header>
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
