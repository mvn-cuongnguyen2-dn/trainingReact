
function Head() {
  return (
    <header className="head">
      <img src="https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png"/>
      <ul className="mid-item">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div className="right-item">
        Login/Register
      </div>
    </header>
  );
}

export default Head;
