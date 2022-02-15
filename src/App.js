import React from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { Route, Switch } from "react-router-dom";
import { PricingPage } from "./components/PricingPage.js";
import { Prospect } from "./components/Prospect.js";
import { List_master } from "./components/List_master.js";
import { Prospect_master } from "./components/Prospect_master.js";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/pricing" component={PricingPage}></Route>
        <Route exact path="/prospect" component={Prospect}></Route>
        <Route exact path="/list-master" component={List_master}></Route>
        <Route
          exact
          path="/prospect-master"
          component={Prospect_master}
        ></Route>
      </Switch>
    </>
  );
}

export default App;
