import React from 'react';
import {Container} from './style.js'
// import { H1, Paragraph, Button } from './style.js';

const Navbar = () => {
  return (
    <Container>
        <Container.H1>Styled Components</Container.H1>
        <Container.H1 hey>Styled Components</Container.H1>
        <Container.Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, exercitationem.</Container.Paragraph>
        <Container.Button qizil>Click me!</Container.Button>
        <Container.Button>Click me!</Container.Button>
    </Container>
  )
}

export default Navbar;