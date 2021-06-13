import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import "bootstrap/dist/js/bootstrap.min.js";
//React Routing
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";

//Components
import Home from './components/home';
import Project from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import PageNotFound from './components/pagenotfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/project' component={Project} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
