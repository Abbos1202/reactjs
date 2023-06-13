import React, { useState } from "react";
import { users } from "./mock.js";
import { Container, Table } from "./crudStyle.js";

const CRUD = () => {
  const [values, setValues] = useState({
    name: "",
    status: "",
  });
  const [data, setData] = useState(users);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState(null);
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSearch = (e) => {
    let filtered = users.filter((value) =>
      `${value[search]}`.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filtered);
  };

  const onSelect = (e) => {
    setSearch(e.target.value);
  };

  const onDelete = (ids) => {
    let filtered = data.filter((value) => value.id !== ids);
    setData(filtered);
  };

  const onCreate = () => {
    let newUser = [
      ...data,
      {
        id: data.length + 1,
        name: values.name,
        status: values.status,
      },
    ];
    setData(newUser);
  };

  const onUpdate = ({ id, name, status }, isActive) => {
    if (isActive) {
      let updated = data.map((value) =>
        value.id === select?.id
          ? { ...value, name: values.name, status: values.status }
          : value
      );
      setData(updated);
      setSelect(null);
    } else {
      setValues({
        name: name,
        status: status,
      });
      setSelect({ id, name, status });
    }
  };
  return (
    <Container>
      <input onChange={onSearch} type="text" placeholder="search..." />
      <select onChange={onSelect}>
        <option value="id">ID</option>
        <option value="name">Name</option>
        <option value="status">Status</option>
      </select>
      <br />
      <br />
      <h1>Name: {values.name}</h1>
      <h1>Status: {values.status}</h1>
      <input onChange={onChange} name="name" type="text" placeholder="name" />
      <input
        onChange={onChange}
        name="status"
        type="text"
        placeholder="status"
      />
      <Container.Create onClick={onCreate}>Create</Container.Create>
      <br />
      <br />
      <Table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <Table.Tbody>
          {data.length ? (
            data.map(({ id, name, status }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    {select?.id === id ? (
                      <input
                        onChange={onChange}
                        name="name"
                        value={values.name}
                        type="text"
                      />
                    ) : (
                      name
                    )}
                  </td>
                  <td>
                    {select?.id === id ? (
                      <input
                        onChange={onChange}
                        name="status"
                        value={values.status}
                        type="text"
                      />
                    ) : (
                      status
                    )}
                  </td>
                  <td>
                    <Table.Edit
                      onClick={() =>
                        onUpdate({ id, name, status }, select?.id === id)
                      }
                    >
                      {select?.id === id ? "Save" : "Edit"}
                    </Table.Edit>
                    <Table.Delete onClick={() => onDelete(id)}>
                      Delete
                    </Table.Delete>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th colSpan={4}>
                <h1>No data available</h1>
              </th>
            </tr>
          )}
        </Table.Tbody>
      </Table>
    </Container>
  );
};

export default CRUD;
