import React, { useReducer, useState } from "react";
import { reducer } from "../reducer/reducer";
import { DELETE, SEARCH, UPDATE, GETNAME, SAVE } from "../reducer/types";
import { Container, Table, Tbody, Button1, Button2 } from "./crudStyle";

const CRUD = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [
      { id: 1, name: "Firdavs" },
      { id: 2, name: "Abbos" },
      { id: 3, name: "Azizbek" },
      { id: 4, name: "Sirojiddin" },
      { id: 5, name: "Sardor" },
      { id: 6, name: "Shaxboz" },
    ],
    select: null,
    title: "",
  });

  return (
    <Container>
      <input
        onChange={(e) => dispatch({ type: SEARCH, payload: e.target.value })}
        type="text"
        placeholder="search..."
      />
      <Table border={2}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <Tbody>
          {state.data.length ? (
            state.data.map((value) => {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>
                    {state.select === value.id ? (
                      <input onChange={(e) => dispatch({type: GETNAME, payload: {titleEvent: e.target.value}})} value={state.title} type="text" />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td>
                    {state.select === value.id ? (
                      <Button1 onClick={() => dispatch({type: SAVE})}>Save</Button1>
                    ) : (
                      <Button1
                        onClick={() =>
                          dispatch({ type: UPDATE, payload: { mock: value } })
                        }
                      >
                        Edit
                      </Button1>
                    )}
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
              <th colSpan={3}>
                <h1>No data</h1>
              </th>
            </tr>
          )}
        </Tbody>
      </Table>
    </Container>
  );
};

export default CRUD;
