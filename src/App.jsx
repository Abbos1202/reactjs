import React, { Component } from "react";
import { users } from "./mock.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: users,
    };
  }

  render() {
    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };

    const onSearch = (e) => {
      const { value } = e.target;
      let filtered = users.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({
        dataList: filtered,
      });
    };

    return (
      <div>
          <select onChange={onSelect} name="" id="">
            <option value="id">ID</option>
            <option value="name">NAME</option>
            <option value="status">STATUS</option>
          </select>
          <input onChange={onSearch} type="text" placeholder="search..." />
          {this.state.dataList.map(({ id, name, status }) => {
            return (
              <div key={id}>
                <h2>
                  {id} {name} {status}
                </h2>
              </div>
            );
          })}
      </div>
    );
  }
}
