import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Home/Navfolder/Navigation.js';
import Profile from './components/Home/Profile/Profile.js';
import AboutMe from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import ContactMe from './components/Contact/ContactMe';
import Projects from './components/projects/Projects.js';
import Experience from './components/Education/Experience';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;

