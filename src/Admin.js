import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="admin-grid">
      <aside className="admin-sidebar">
        <Link to="me">Profile</Link>
        <Link to="my-sales">Sales overview</Link>
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<p>Admin</p>} />
          <Route path="me" element={<p>My profile</p>} />
          <Route path="my-sales" element={<p>Sales overview</p>} />
        </Routes>
      </main>
    </div>
  );
}
