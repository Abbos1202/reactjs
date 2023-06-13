import React, { Component } from "react";
import { navlink } from "../../../utils/navbar";
import { Container, Wrapper } from "./style";
import explore from "../../../assets/icons/compus.svg";
import arrow from "../../../assets/imgs/arrow.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlink: navlink,
    };
  }
  render() {
    return (
      <Container>
        <Container.Icon src={explore} alt="" />
        {navlink.map((value) => {
          return (
            <Wrapper key={value.id}>
              <Wrapper.Title>{value.title}</Wrapper.Title>
            </Wrapper>
          );
        })}
          <Container.Img src={arrow} alt="" />
    </Container>
    );
  }
}
