import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
      <div className="flex-row d-flex">
        <button
          type="button"
          className="navbar-toggler mr-2 "
          data-toggle="offcanvas"
          title="Toggle responsive left sidebar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <a
          className="navbar-brand nav-item "
          href="#"
          title="Free Bootstrap 4 Admin Template"
        >
          Unity
        </a>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav"></ul>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fab fa-google"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-bell"></i>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#myAlert" data-toggle="collapse">
              Eng/USD
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link waves-effect waves-light text-white">
              <i className="fas fa-angle-down"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href=""
              data-target="#myModal"
              data-toggle="modal"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
