import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import NavbarComp from './Component/Fungsional/NavbarComp';

import HomePage from './Component/Fungsional/HomePage';
//import BoostrapComp from './Component/Class/BootstrapComp';
import About from './Component/Fungsional/AboutComp';
import { Form } from 'reactstrap';
import DetailComp from './Component/Fungsional/DetailComp';
//import DetailComp from './Comonent/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/Tambah';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContext';
import ProductComp from './Component/Hooks/Functional/ProductComp';
// import BootstrapComp from './Component/Class/BootstrapComp';
//import Parent from './Component/Class/Parent';
// import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';

const App = () => {
  const [value, setValue] = useState(0)
  return (
    
    <BrowserRouter>
    
    <CartContext.Provider value={{value, setValue}}>
        <NavbarComp />
        <switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mahasiswa" component={ListComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffects} />
          <Route exact path="/produk" component={ProductComp} />

           {/*<Route exact path="/detail/:id" component={DetailComp} />*/}
        </switch>
      </CartContext.Provider>


  </BrowserRouter>
  );
}

export default App;