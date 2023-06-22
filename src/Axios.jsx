import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Axios = () => {
  const [users, setUsers] = useState([]);

  // getting data from API

  const gettingData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUsers(data.data));
  };

  useEffect(() => {
    gettingData();
  }, []);

  console.log(users);

  return (
    <div>
      {users.map((value) => {
        return (
          <div key={value.id}>
            <h3> Id: {value.id} Name: {value.name} Email:  {value.email} </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Axios;
