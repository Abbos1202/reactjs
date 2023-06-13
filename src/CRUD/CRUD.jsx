import React, { useReducer, useState } from "react";
import { abbosReducer } from "../reducer/reducer";
import { DELETE, SEARCH, CREATE} from "../reducer/types";
import {Container, Table, Tbody, Btn, Button1, Button2 } from "./crudStyle";

const CRUD = () => {
  const [state, dispatch] = useReducer(abbosReducer, [
    { id: 1, name: "Firdavs" },
    { id: 2, name: "Abbos" },
    { id: 3, name: "Azizbek" },
    { id: 4, name: "Sirojiddin" },
    { id: 5, name: "Sardor" },
    { id: 6, name: "Shaxboz" },
  ]);

  const [title, setTitle] = useState('')
  return (
    <Container>
      <input onChange={(e) => dispatch({type: SEARCH, payload:  e.target.value})} type="text" placeholder="search..." />
      <br />
      <input onChange={(e) => setTitle(e.target.value)} name="name" type="text" placeholder="name" />
      <Btn onClick={() => dispatch({type: CREATE, payload: {name: title}})} >Create</Btn>
      <Table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <Tbody>
          {state.length ? (
            state.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>
                    <Button1>
                    Edit
                    </Button1>
                    ||
                    <Button2
                      onClick={() =>
                        dispatch({ type: DELETE, payload: { ids: value.id } })
                      }
                    >
                      Delete
                    </Button2>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th colSpan={4}>
                <h1>Not found</h1>
              </th>
            </tr>
          )}
        </Tbody>
      </Table>
    </Container>
  );
};

export default CRUD;
