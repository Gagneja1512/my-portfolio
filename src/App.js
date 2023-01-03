import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Home from "./components/Intro/Home";
import { Redirect, Route, Switch } from 'react-router-dom'
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>

        <Route path="/home" exact>
          <Home></Home>
        </Route>

        <Route path="/about" exact>
          <About></About>
        </Route>

        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
