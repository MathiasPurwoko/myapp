import React, { useState, useContext } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import { CartContext } from '../../CartContext';

const NavbarComp = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {value, setValue} = useContext(CartContext)

    return (
      
        <div>

       
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Selamat Berbelanja</CardTitle>
        <CardText>Anda Puas Kami Senang. Terimakasih.</CardText>
        
      </Card>
            <marquee direction="right" scrollamount="10">
            <img src="https://i.ya-webdesign.com/images/sprite-gif-png-2.gif" />
            <img src="https://i.ya-webdesign.com/images/sprite-gif-png-2.gif" />
            <img src="https://i.ya-webdesign.com/images/sprite-gif-png-2.gif" />
            <img src="https://i.ya-webdesign.com/images/sprite-gif-png-2.gif" /> </marquee>
            
            <p class="bg-primary text-green"><marquee>CEGAH COVID-19. Patuhi Protokol Kesehatan</marquee></p>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/">Mr. Books Store</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about" className="nav-link">Tentang Kami</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink to="/useeffects" className="nav-link">Daftar Buku</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/produk" className="nav-link">Produk Buku</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/reducer" className="nav-link">Pesan</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/register" className="nav-link">Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/login" className="nav-link">login</NavLink>
                        </NavItem>
                    </Nav>
                    <NavbarText>
                        <Button color="danger">
                            <i className=" fa fa-shopping-cart"></i>
                            <span className="badge badge-light">{value}</span>
                        </Button>
                    </NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComp 