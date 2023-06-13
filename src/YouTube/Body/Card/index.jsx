import React, { Component } from "react";
import { Container, Video, Wrapper, Flexing } from "./style";

export default class Card extends Component {
  render() {
    const { videos, title, view, time, user, id } = this.props.value;
    const {onDelete} = this.props
    return (
      <Container>
        <Video src={videos} alt="Video content" />
        <Wrapper>
          <Wrapper.User src={user.img} alt="User content" />
          <div>
            <Wrapper.Title>{title}</Wrapper.Title>
            <Wrapper.Title desc="true"> {id} | {user.name}</Wrapper.Title>
            <Flexing>
              <Flexing.Text>{view}</Flexing.Text>
              <Flexing.Text>{time}</Flexing.Text>
              <button onClick={() => onDelete(id)}>Delete</button>
            </Flexing>
          </div>
        </Wrapper>
      </Container>
    );
  }
}
