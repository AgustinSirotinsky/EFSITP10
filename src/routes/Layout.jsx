//React
import React from 'react';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {

    return (
        <React.Fragment>
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Container>
        </Navbar>
      </React.Fragment>
    )
}

export default Layout