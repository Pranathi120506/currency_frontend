import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [Login, setLogin] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/Signup") {
      setLogin(true);
    } else if (window.location.pathname === "/Login") {
      setLogin(false);
    }
  });
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Currency
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                features
              </Link>
            </li>
            <li className="nav-item">
              {Login && (
                <Link className="nav-link" to="/Login">
                  <button type="button" className="btn btn-dark">
                    Login
                  </button>
                </Link>
              )}
              {!Login && (
                <Link className="nav-link" to="/Signup">
                  <button type="button" className="btn btn-dark">
                    Signup
                  </button>
                </Link>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
