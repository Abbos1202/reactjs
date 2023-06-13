import React, { Component } from "react";
import { Container , Wrapper} from "./style";
import shorts from '../../../assets/imgs/shorts.png';
import plus from '../../../assets/imgs/plus.png';

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Wrapper.House /> 
          <Wrapper.Shorts src={shorts} alt="" />
          <Wrapper.Plus src={plus} alt="" />
          <Wrapper.Subscribers />
          <Wrapper.Library />
        </Wrapper>
      </Container>
    );
  }
}
