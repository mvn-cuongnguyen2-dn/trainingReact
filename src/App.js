import logo from './logo.svg';
import Head from './compunent/head.js'
import Footer from './compunent/footer.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Head />
      <main className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
