import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { signup } from "./userFunctions";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    signup(newUser).then((res) => {
      console.log("Signed in");
    });
  };

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <SignUpTitle>Signup</SignUpTitle>
        </TitleWrapper>
        <FormWrapper>
          <form onSubmit={this.onSumbit}>
            <HThree>E-mail:</HThree>
            <EmailInput
              type="text"
              placeholder="E-mail"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></EmailInput>
            <HThree>Username:</HThree>
            <UsernameInput
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></UsernameInput>
            <br></br>
            <HThree>Password:</HThree>
            <PasswordInput
              type="text"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></PasswordInput>
            <br></br>
            <br></br>
            <SignUpButton
              type="submit"
              value="Signup"
              className="signup-button"
            ></SignUpButton>
          </form>
          <br></br>
          <LoginPage href="/login">Looking for login?</LoginPage>
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
const SignUpTitle = styled.h1`
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

const HThree = styled.h3`
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
const EmailInput = styled.input`
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
// const PasswordMatchInput = styled.input`
//   max-width: 400px;
//   width: 80%;
//   line-height: 3em;
//   margin: 1em 2em;
//   border-radius: 5px;
//   border: 2px solid #f2f2f2;
//   outline: none;
//   padding-left: 10px;
// `;
const SignUpButton = styled.input`
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
const LoginPage = styled.a`
  color: #f2f2f2;
  cursor: pointer;
  text-decoration: underline;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
`;

export default Signup;
