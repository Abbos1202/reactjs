import React from "react";
import { useState, useEffect } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]);

  // getting data from API

  const gettingData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
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

export default Fetch;
