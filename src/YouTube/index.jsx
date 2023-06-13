import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Body from "./Body/index";
import { Container, Wrapper, Category, Icons, Input, User } from "./style";
import logo from '../assets/imgs/logo.png';
import user from '../assets/imgs/abbos.png';
import connect from '../assets/imgs/connect.png';
import { data } from "../utils/body";

export default class YouTube extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
  }
  render() {
    const onFilter = (e) => {
      let filtered = data.filter((value) =>
         value.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({
        data: filtered,
      });
    };
    const onDelete = (id) => {
      let deleted = data.filter((value) => value.id !== id)
      this.setState({data: deleted})
    }
    return (
      <Container>
        <Wrapper>
          <Category>
            <Icons.Burger />
            <Icons.Logo src={logo} alt='Logo img' />
          </Category>
          <Category>
            <Input onChange={onFilter} type="text" placeholder="search" />
            <Icons.Search />
          </Category>
          <Category end="true">
            <Icons.Video />
            <Icons.Menu />
            <Icons.Connect src={connect} alt="" />
            <Icons.Bell />
            <Icons.Search none="true" />
            <User src={user} />
          </Category>
        </Wrapper>
        <Container flex="true">
          <Sidebar />
          <Body onDelete={onDelete} data={this.state.data} />
        </Container>
      </Container>
    );
  }
}
