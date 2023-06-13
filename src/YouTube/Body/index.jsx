import React, { Component } from "react";
import Navbar from './Navbar';
import Card from "./Card";
import Footer from './Footer';
import { Container, Wrapper } from "./style";

export default class Body extends Component {
  render() {
    const { data, onDelete } = this.props;
    return (
      <Container>
        <Navbar />
        {data.length ? (
          data.map((value) => (
            <Wrapper key={value.id}>
              <Card onDelete={onDelete} value={value}/>
              <Footer />
            </Wrapper>
          ))
          ) : (
            <h1 style={{textAlign: "center", width: "100%"}}>Not found</h1>
            )}
      </Container>
    );
  }
}
