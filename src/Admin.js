import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="admin-grid">
      <aside className="admin-sidebar">
        <Link to="me">Profile</Link>
        <Link to="my-sales">Sales overview</Link>
      </aside>
      <Outlet />
    </div>
  );
}
