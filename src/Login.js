import React from "react";

export default function () {
  return (
    <div>
      <form
        style={{ width: 400, margin: "auto", marginTop: 100, padding: 30 }}
        className="card"
      >
        <div className="form-group">
          <h3 style={{ textAlign: "center" }}>Login</h3>
          <input
            type="email"
            className="form-control"
            id="exampleDropdownFormEmail2"
            placeholder="email@example.com"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="exampleDropdownFormPassword2"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="dropdownCheck2"
            />
            <label className="form-check-label">Remember me</label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Logar no sistema
        </button>
      </form>
    </div>
  );
}
