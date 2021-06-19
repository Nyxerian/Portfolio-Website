import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Home from './Pages/1. Home Page/Home'
import About from './Pages/2. About Page/About'
import CV from './Pages/3. CV Page/CV'
import Projects from './Pages/4. Projects Page/Projects'
import Contact from './Pages/5. Contact Page/Contact';


function App() {
 
  
  return (
    <Router>
      <Switch>              
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/CV" exact component={CV} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Contact" exact component={Contact} />        
      </Switch> 
    </Router>
  );
}

export default App;
