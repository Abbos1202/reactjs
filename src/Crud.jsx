import React, { Component } from "react";
import { users } from "./mock.js";

export default class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: users,
      name: "",
      status: "",
      select: null,
    };
  }
  render() {
    const onChange = (e) => {
      console.log(e.target.value);
      this.setState({ [e.target.name]: e.target.value });
    };

    const filteredInfo = (e) => {
      const { value } = e.target;
      let filtered = users.filter((item) =>
        `${item[this.state.search]}`.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({
        dataList: filtered,
      });
    };

    const onSelect = (e) => {
      this.setState({ search: e.target.value });
    };

    const onDelete = (id) => {
      let filtered = this.state.dataList.filter((value) => value.id !== id);

      this.setState({
        dataList: filtered,
      });
    };

    const onAdd = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        status: this.state.status,
      };
      this.setState({
        dataList: [...this.state.dataList, user],
        name: "",
        status: "",
      });
    };

    const onUpdate = ({ id, name, status }, isActive) => {
      if (isActive) {
        let updated = this.state.dataList.map((value) =>
          value.id === this.state.select.id
            ? { ...value, name: this.state.name, status: this.state.status }
            : value
        );
        this.setState({ select: null, dataList: updated });
      } else {
        this.setState({
          name: name,
          status: status,
          select: { id, name, status },
        });
      }
    };

    return (
      <div>
        <input onChange={filteredInfo} type="text" placeholder="search..." />
        <select onChange={onSelect}>
          <option value="id">ID</option>
          <option value="name">NAME</option>
          <option value="status">STATUS</option>
        </select>
        <hr />
        <input
          value={this.state.name}
          name="name"
          onChange={onChange}
          type="text"
          placeholder="name"
        />
        <input
          value={this.state.status}
          name="status"
          onChange={onChange}
          type="text"
          placeholder="status"
        />
        <button className="add" onClick={onAdd}>
          Add
        </button>
        <table className="table" border={1}>
          <thead>
            <tr className="head">
              <th>ID</th>
              <th>NAME</th>
              <th>STATUS</th>
              <th colSpan={2}>ACTION</th>
            </tr>
          </thead>
          {this.state.dataList.length ? (
            this.state.dataList.map(({ id, name, status }) => {
              return (
                <tbody key={id}>
                  <tr>
                    <td>{id}</td>
                    <td>
                      {this.state.select?.id === id ? (
                        <input
                          onChange={onChange}
                          name="name"
                          value={this.state.name}
                          type="text"
                        />
                      ) : (
                        name
                      )}
                    </td>
                    <td>
                      {this.state.select?.id === id ? (
                        <input
                          onChange={onChange}
                          name="status"
                          value={this.state.status}
                          type="text"
                        />
                      ) : (
                        status
                      )}
                    </td>
                    <td className="button">
                      <button
                        onClick={() =>
                          onUpdate(
                            { id, name, status },
                            this.state.select?.id === id
                          )
                        }
                        className="btn_1"
                      >
                        {this.state.select?.id === id ? "save" : "edit"}
                      </button>
                      ||
                      <button onClick={() => onDelete(id)} className="btn_2">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })
          ) : (
            <tbody>
              <tr>
                <th colSpan={4}>
                  <h1>No data available</h1>
                </th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
}
