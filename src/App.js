import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Home/Navfolder/Navigation.js';
import Profile from './components/Home/Profile/Profile.js';
import AboutMe from './components/About/About.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <AboutMe />
    </div>
  );
}

export default App;
