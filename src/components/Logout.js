import React, { useContext, useEffect } from "react";
import Loading from "./Loading";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

function Logout() {
  const { state, dispatch } = useContext(UserContext);

  const history = useHistory();
  const handleLogout = async () => {
    const response = await axios
      .post(
        // `https://cors-anywhere.herokuapp.com/https://eunncjkkls.herokuapp.com/auth/login`,
        "https://eunncjkkls.herokuapp.com/auth/logout"
      )
      .catch((error) => console.log(error));
    if (response.status === 200 && response.data) {
      console.log(response.data);
      dispatch({ type: "USER", payload: false });
      alert("Logout Successful");
      history.push("/");
    } else {
      alert("Logout failed");
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);
  return (
    <>
      <Loading />
    </>
  );
}

export default Logout;
