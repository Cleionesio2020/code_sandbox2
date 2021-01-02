import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
let Admin = lazy(() => import("./Admin.js"));

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="admin">Admin</Link>
        </nav>
        <Suspense fallback="Loading…">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="admin/*" element={<Admin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <main>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </main>
  );
}
