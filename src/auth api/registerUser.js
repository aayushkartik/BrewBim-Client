import axios from "axios";

// import setupUser from "./setupUser";
async function registerUser({ name, email, password }) {
  const response = await axios
    .post(`https://eunncjkkls.herokuapp.com/auth/signup`, {
      name,
      email,
      password,
    })
    .catch((error) => console.log(error));
  return response;
}

export default registerUser;
