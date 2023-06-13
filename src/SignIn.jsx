import React from "react";
import { Container, Title, Wrapper, Input, Btn, Button, Paragraph, Items, Txt} from "./styled";

const SignIn = ({ click }) => {
  return (
    <Container>
      <Title>SIGN IN</Title>
      <Input type="email" placeholder="Enter your email" />
      <Input type="password" placeholder="Enter your password" />
      <Wrapper>
        <input type="checkbox" />
        <Wrapper.Paragraph>Remember Me</Wrapper.Paragraph>
        <Wrapper.Anchor href="#">Forgot password?</Wrapper.Anchor>
      </Wrapper>
      <Btn>SignIn</Btn>
      <Paragraph>or</Paragraph>

      <Items>
      <i className="fa fa-facebook" style={{fontSize:"24px", width: "35px", height: '35px', borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "blue", color: "white"}}></i>
      <i className="fa fa-google-plus" style={{fontSize: "20px", width: "35px", height: '35px', borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "red", color: "white"}}></i>
      <i className="fa fa-twitter" style={{fontSize:"24px", width: "35px", height: '35px', borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "aqua", color: "white"}}></i>
      </Items>

      <Txt>
        Don't have an account? <Button onClick={click}>Create new one</Button>{" "}
      </Txt>
    </Container>
  );
};

export default SignIn;
