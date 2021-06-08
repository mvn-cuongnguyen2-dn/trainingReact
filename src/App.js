import logo from './logo.svg';
import Header from './component/header.js'
import Footer from './component/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
