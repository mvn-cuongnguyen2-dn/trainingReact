
function Head() {
  return (
    <header className="head">
      <img src="https://thietkelogo.vn/wp-content/uploads/2016/02/logo-dep.png"/>
      <ul class="mid-item">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
      <div class="right-item">
        Login/Register
      </div>
    </header>
  );
}

export default Head;
