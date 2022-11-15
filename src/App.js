import Title from './components/Title';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <Title color="red"/>
      <Bio />
      <Skills color="blue"/>
      <Projects color="blue"/>
      <Experience color="blue"/>
      <Education color="blue"/>
    </div>
  );
}

export default App;
