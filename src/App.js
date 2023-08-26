import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import './App.css';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" ><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/skill"><Skill/></Route>
          {/* <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
