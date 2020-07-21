import React from 'react';

//import BoostrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import BoostrapComp from './Comonent/Class/BootstrapComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import { Form } from 'reactstrap';
//import Home from './Comonent/Fungsional/Home';
//import Beranda from './Comonent/Class/Beranda';
//import './App.css';


const App = () => {
  return (
    
    <BrowserRouter>
    <NavbarComp />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
    </Switch>

  </BrowserRouter>
  );
}

export default App;