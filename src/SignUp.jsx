import React from 'react';
import { Container, Title, Flexing, Input, Btn, Button, Text } from './styled';

const SignUp = ({click}) => {
  return (
    <Container>
        <Title>SIGN UP</Title>
        <Input type="email" placeholder='Enter your email' />
        <Input type="email" placeholder='Retype email' />
        <Input type="password" placeholder='Enter your password' />
        <Input type="password" placeholder='Retype password' />
        <Flexing>
            <input type="checkbox" />
            <Flexing.Paragraph>By signing up accept the <Flexing.Anchor href="#">Terms of services</Flexing.Anchor> and <Flexing.Anchor href="#">Privacy Policy</Flexing.Anchor></Flexing.Paragraph>
        </Flexing>
        <Btn>SignUp</Btn>
        <Text>Already have an account? <Button onClick={click} >Sign In</Button></Text>
    </Container>
  )
}

export default SignUp;