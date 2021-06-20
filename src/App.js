import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


import Home from './Pages/1. Home Page/Home'
import About from './Pages/2. About Page/About'
import CV from './Pages/3. CV Page/CV'
import Projects from './Pages/4. Projects Page/Projects'
import Contact from './Pages/5. Contact Page/Contact';
import FeedbackForm from './Pages/Feedback/FeedbackForm'
import SuccessMsg from './Components/Sucess Message/SuccessMsg'


function App() {
 
  
  return (
    <Router>
      <Switch>              
        <Route path="/" exact component={Home} />
        <Route path="/About" exact component={About} />
        <Route path="/CV" exact component={CV} />
        <Route path="/Projects" exact component={Projects} />
        <Route path="/Contact" exact component={Contact} />
        <Route path="/FeedbackForm" exact component={FeedbackForm} />
        <Route path="/SuccessMsg" exact component={SuccessMsg} />        
      </Switch> 
    </Router>
  );
}

export default App;
