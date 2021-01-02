import React, { useEffect, useState } from "react";

import api from "./services/Api";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .get()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function handleDelete(id) {
    if (window.confirm("Quer mesmo apaga este dado?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  }

  return (
    <main>
      <h3>Banco de horas - Cleionesio</h3>
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
