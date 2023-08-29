import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" ><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path="/skill"><Skills/></Route>
          <Route path="/projects"><Projects/></Route>
          <Route path="/contact" ><Contact/></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
