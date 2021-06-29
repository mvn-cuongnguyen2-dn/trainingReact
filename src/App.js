
import Header from './component/header.js'
import Footer from './component/footer.js'
import About from './pages/about.js'
import Home from './pages/home.js'
import {Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
