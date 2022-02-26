import axios from "axios";
// import url from "../utils/URL";

async function loginUser({ email, password }) {
  const response = await axios
    .post(
      // `https://cors-anywhere.herokuapp.com/https://eunncjkkls.herokuapp.com/auth/login`,
      "https://eunncjkkls.herokuapp.com/auth/login",
      {
        email,
        password,
      }
    )
    .catch((error) => console.log(error));
  return response;
}

export default loginUser;
