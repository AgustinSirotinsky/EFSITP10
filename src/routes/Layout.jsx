import React from "react";
import { Link, Outlet } from "react-router-dom";

//Bootsrap
import { Navbar } from 'react-bootstrap';

//Other

const Layout = () => {
    return (
    <React.Fragment>
        <Navbar className="bg-body-tertiary">
          <Navbar.Brand href="/">
            <h1>hola</h1>
          </Navbar.Brand>
      </Navbar>
        <Outlet />
    </React.Fragment>)
}

export default Layout