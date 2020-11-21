
import Home from './Home';
import About from './About';
import Services from './Services'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="fancy">Roto-React Router</h1>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </nav>
      </header>
      
    



      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
      </Switch>
      <footer>
        &#169;Copyright Roto-React Rooter. 
      </footer>
    </div>
  );
}

export default App;
