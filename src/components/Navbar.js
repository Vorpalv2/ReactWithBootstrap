import React, { useState } from "react";

const Navbar = (props) => {
  const [Title, SetTitle] = useState(``);
  const [Theme, SetTheme] = useState({
    backgroundColor: `black`,
    color: `white`,
  });

  const Themeing = (props) => {
    if (Theme.backgroundColor === `white`) {
      SetTheme({
        backgroundColor: `black`,
        color: `white`,
      });
      SetTitle("Dark Theme");
    } else {
      SetTheme({
        backgroundColor: `white`,
        color: `black`,
      });
      SetTitle("Light Theme");
    }
  };

  return (
    <>
      <nav
        style={Theme}
        onChange={Themeing}
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.Title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav"></div>
          </div>
          <div className="form-check form-switch">
            <input
              style={Theme}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              style={Theme}
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              onChange={Themeing}
            >
              {Title}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
