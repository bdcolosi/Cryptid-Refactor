import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { login } from "./userFunctions";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      channel: "",
      password: "",
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    };

    login(user).then((res) => {
    });
  }

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <LoginTitle>Login</LoginTitle>
        </TitleWrapper>
        <FormWrapper>
          <form onSubmit={this.onSubmit}>
            <HThree>Username:</HThree>
            <UsernameInput
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></UsernameInput>
            <br></br>
            <HThree>Password:</HThree>
            <PasswordInput
              type="text"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></PasswordInput>
            <br></br>
            <LoginButton
              type="submit"
              value="Login"
              className="login-button"
            ></LoginButton>
          </form>
          <br></br>
          <SignUp href="/signup">Sign up!</SignUp>
          <HSix>Can't access your account?</HSix>
        </FormWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-size: 45px;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  margin: 0 auto;
  max-width: 500px;
  border-radius: 15px;
`;
const LoginTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 300%;
  @media only screen and (min-width: 150px) and (max-width: 530px) {
    font-size: 200%;
    margin: 0;
  }
`;

const TitleWrapper = styled.div``;

const FormWrapper = styled.div`
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 10%;
  margin: 5% auto;
  text-align: center;
`;

const HThree = styled.h6`
  margin: 0;
  padding: 0;
  text-align: left;
  margin-left: 40px;
  color: white;
  font-size: 24px;
`;
const UsernameInput = styled.input`
  max-width: 400px;
  width: 80%;
  line-height: 3em;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  outline: none;
  padding-left: 10px;
`;
const PasswordInput = styled.input`
  max-width: 400px;
  width: 80%;
  line-height: 3em;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  outline: none;
  padding-left: 10px;
`;
const LoginButton = styled.input`
  height: 30px;
  width: 100px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 20px;
  color: slategrey;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  cursor: pointer;
`;
const SignUp = styled.a`
  color: #f2f2f2;
  cursor: pointer;
  text-align: center;
  font-size: 24px;
`;
const HSix = styled.h6`
  margin: 0;
  padding: 0;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  font-size: 18px;
`;

export default Login;
