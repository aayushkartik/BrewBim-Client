import React, { useContext, useState } from "react";
import "./css/Modal.css";
import LoginUser from "../auth api/loginUser";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const LoginPage = (props) => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  function updateHandler(event) {
    const Name = event.target.name;
    const val = event.target.value;
    setuserData({ ...userData, [Name]: val });
  }
  if (!props.display) {
    return null;
  }
  async function submitHandler(e) {
    try {
      e.preventDefault();
      const response = await LoginUser(userData);
      console.log(response);
      if (response.status === 200) {
        dispatch({ type: "USER", payload: true });
        props.modalClose();
        alert("Login Successful");
        history.push("/app");
      } else {
        alert("Invalid email and password");
      }
      // setuserData({ email: "", password: "" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="modals">
      <div className="modals-content">
        <div className="modals-header">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={props.modalClose}
          >
            X
          </button>
        </div>
        <h4 className="modals-title">Welcome back !</h4>

        <div className="modals-body">
          <form onSubmit={submitHandler} autocomplete="off">
            {/* <input className="Question-Input" onChange={(e)=> setQues(e.target.value)} value={ques} ></input> */}
            <input
              required
              className="inputs-fields"
              label="email"
              type="email"
              onChange={updateHandler}
              value={userData.email}
              autoComplete="off"
              placeholder="your email"
              name="email"
            />{" "}
            <br />
            <input
              required
              className="inputs-fields"
              label="Password"
              type="password"
              onChange={updateHandler}
              value={userData.password}
              autoComplete="off"
              placeholder="Password"
              name="password"
            />{" "}
            <br />
            <button className="Log" type="submit">
              Login
            </button>
            <br />
            <a href="#">forgot password</a>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
