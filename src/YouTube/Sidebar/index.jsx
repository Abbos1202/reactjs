import React, { Component } from "react";
import { Container, Wrapper, Title, Flexing } from "./style";
import { sidebar } from "../../utils/sidebar";

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        {sidebar.map((value) => (
          <Wrapper key={value.id}>
            {value.title && <Title title="true">{value.title}</Title>}
            {value.data.map((item, index) => (
              <Flexing key={index}>
                <Flexing.Icon src={item.icon} alt="" />
                <Title>{item.title}</Title>
              </Flexing>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
