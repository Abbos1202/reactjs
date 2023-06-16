import React from "react";
import { Container, Link } from "./style";

const Navbar = () => {
  return (
    <Container>
        <Link activeStyle={{color: 'grey'}} to={'/'} exact>Logo</Link>
        <Link activeStyle={{color: 'grey'}} to={'/home'}>Home</Link>
        <Link activeStyle={{color: 'grey'}} to={'/about'}>About</Link>
        <Link activeStyle={{color: 'grey'}} to={'/projects'}>Projects</Link>
        <Link activeStyle={{color: 'grey'}} to={'/contacts'}>Contacts</Link>
    </Container>
  );
};

export default Navbar;
