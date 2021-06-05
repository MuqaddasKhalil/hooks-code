import "./App.css";
import About from "./About";
import Form from "./form";
import Home from "./home";
import Contact from "./contact";
import Login from "./login";
import Sign from "./sign";
import Todolist from "./Todolist"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { act } from "@testing-library/react";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/sign">
          <Sign />
        </Route>
       <Route exact path="/Todolist">
         <Todolist /> 
       </Route>
      

      </Switch>
    </Router>
  );
};

export default App;
