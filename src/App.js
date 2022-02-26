import React, { createContext } from "react";
import { useReducer } from "react";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import { Route, Switch } from "react-router-dom";
import { PricingPage } from "./components/PricingPage.js";
import { Prospect } from "./components/Prospect.js";
import { List_master } from "./components/List_master.js";
import { Prospect_master } from "./components/Prospect_master.js";
import { BrewBimApp } from "./components/BrewBimApp.js";
import { CheckedonLinkedin } from "./components/CheckedonLinkedin.js";

import { initialState, reducer } from "./context/UseReducer";
import Logout from "./components/Logout.js";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/logout" component={Logout}></Route>
      <Route exact path="/pricing" component={PricingPage}></Route>

      <Route exact path="/app" component={BrewBimApp}></Route>
      <Route exact path="/prospect" component={Prospect}></Route>
      <Route exact path="/list-master" component={List_master}></Route>
      <Route exact path="/prospect-master" component={Prospect_master}></Route>
      <Route
        exact
        path="/checked-on-linkedin"
        component={CheckedonLinkedin}
      ></Route>
    </Switch>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar></Navbar>
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
