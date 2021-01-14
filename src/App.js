import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Blog from './components/Blog';
import Error from './components/Error';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/blog" exact component={Blog}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route component={Error}></Route>
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
