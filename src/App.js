import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Blog from './components/Blog';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route paht ="/" component={Home}/>
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
