

import { Navbar }  from 'react-bootstrap';

function Nav() {
  return (
    <div className="nav">
      <img src="https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png"/>
      <div class="mid-item">
        <Navbar bg="light">
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Navbar>
        <br />
        <Navbar bg="light">
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Navbar>
        <Navbar bg="light">
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Navbar>
      </div>
      <div class="icon">
      </div>
    </div>
  );
}

export default Nav;
