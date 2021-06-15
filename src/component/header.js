import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="head">
      <img src="https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png" alt="logo"/>
      <nav>
        <ul className="mid-item">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </nav>
      <div className="right-item">
        Login/Register
      </div>
    </header>
  );
}

export default Header;
