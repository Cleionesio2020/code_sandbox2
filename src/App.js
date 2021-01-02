import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Sobre from "./Sobre";
import Admin from "./Admin";
import Login from "./Login";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container" style={{ marginTop: 20 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/Login" element={<Login />} />
            <Route path="admin" element={<Admin />}>
              <Route path="/" element={<p>Admin</p>} />
              <Route path="me" element={<p>My profile</p>} />
              <Route path="my-sales" element={<p>Sales overview</p>} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
