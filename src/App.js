// import logo from './logo.svg';
import './App.css';
import "./customstyle.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path={"/"}>
            <About/>
          </Route>
          <Route path={"/portfolio"}>
            <Portfolio/>
          </Route>
          {/* <Route path={"/contact"}>
            <Contact/>
          </Route> */}
        </Switch>
        <Footer/>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
