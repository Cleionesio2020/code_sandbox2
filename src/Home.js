import React from "react";

export default function Home() {
  return (
    <main>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <button type="button" className="btn btn-danger btn-sm">
                Excluir
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <button type="button" className="btn btn-danger btn-sm">
                Excluir
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <button type="button" className="btn btn-danger btn-sm">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
