import React from 'react';


import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import { Form } from 'reactstrap';
import DetailComp from './Component/Fungsional/DetailComp';


const App = () => {
  return (
    
    <BrowserRouter>
    <NavbarComp />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/detail/:id" component={DetailComp} />
    </Switch>

  </BrowserRouter>
  );
}

export default App;