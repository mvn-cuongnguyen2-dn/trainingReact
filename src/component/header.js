
function Header() {
  return (
    <header className="head">
      <img src="https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png" alt="logo"/>
      <nav>
        <ul className="mid-item">
          <li className="nav-item active">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link</a>
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
