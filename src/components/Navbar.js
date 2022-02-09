import React,{useState} from 'react'
import LoginPage from './LoginPage.js'
import {Link} from 'react-router-dom'
import './css/navbar.css'

const Navbar = () => {
  const [show,setShow] = useState(false);

  function toggle(){
    setShow(!show);
    console.log('clicked');
  }
    return (
        <>
    <nav className="navbar navbar-expand-md navbar-light bgwhite fixed-top">
  <Link className="navbar-brand" to='/'>
  <img src="./brebim.jpeg" width="40" height="40" class="d-inline-block align-bottom brewbim" alt=""/>
  Brewbim</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto ">
      <Link className="nav-item nav-link active" to='/'>Pricing</Link>
      <Link className="nav-item nav-link active" to='/'>Contact Sales</Link>
      <Link className="nav-item nav-link active" to='/register'>Register</Link>
      <Link className="nav-item nav-link active" onClick={toggle}>Login</Link>
    </div>
  </div>
  <LoginPage display={show} modalClose={toggle}></LoginPage>
</nav>
            
        </>
    )
}

export default Navbar
