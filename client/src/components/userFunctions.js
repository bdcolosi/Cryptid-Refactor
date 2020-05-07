import axios from "axios";

export const signup = (newUser) => {
  return axios
    .post("http://localhost:3001/users/signup", {
      username: newUser.username,
      email: newUser.email,
      password: newUser.password,
    })

    .then((response) => {
      console.log("User is now registered");
    });
};

export const login = (user) => {
  return axios
    .post("http://localhost:3001/users/login", {
      username: user.username,
      password: user.password,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};
