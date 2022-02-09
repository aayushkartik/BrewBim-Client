import React from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Register from './components/Register.js'
import Login from './components/Login.js'
import{ Route, Switch } from 'react-router-dom'
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Switch>
      <Route  exact path="/" component={Home}></Route>
      <Route  exact path="/register" component={Register}></Route>
      <Route  exact path="/login" component={Login}></Route>
    </Switch>
    </>
  );
}

export default App;
