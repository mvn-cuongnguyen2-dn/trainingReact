import logo from './logo.svg';
import Nav from './compunent/heard.js'
import Fotter from './compunent/fotter.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Fotter />
    </div>
  );
}

export default App;
