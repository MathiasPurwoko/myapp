import React from 'react';


import NavbarComp from './Component/Fungsional/NavbarComp';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './Component/Fungsional/HomePage';
//import BoostrapComp from './Component/Class/BootstrapComp';
import About from './Component/Fungsional/AboutComp';
import { Form } from 'reactstrap';
import DetailComp from './Component/Fungsional/DetailComp';
//import DetailComp from './Comonent/Fungsional/DetailComp';
import LisComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/Tambah';
import EditComp from './Component/Class/EditComp';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';

const App = () => {
  return (
    
    <BrowserRouter>
    <NavbarComp />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/detail/:id" component={DetailComp} />
      <Route exact path="/mahasiswa" component={LisComp} />
      <Route exact path="/mahasiswa/tambah" component={TambahComp} />
      <Route exact path="/mahasiswa/edit" component={EditComp} />
       {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
    </Switch>

  </BrowserRouter>
  );
}

export default App;