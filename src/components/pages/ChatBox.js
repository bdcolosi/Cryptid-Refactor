import React from "react";
import styled from "styled-components";
import Channels from "../Channels";
import UserMessage from "../UserMessage";
import monster from "../monster3.png"
import skel from "../skel.png"

import { CTX } from '../Store'

const ChatBox = () => {
  const [textValue, changeTextValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const { state, dispatch } = React.useContext(CTX);
  React.useEffect(() => {

    state.socket.on('message', function (msg) {
      console.log("chat message recieved")
      dispatch('RECEIVE_MESSAGE', msg);
    })
  },[])
  
  let newUserName = ""
  const userNameChanger = e => {
    newUserName = e.target.value;
    console.log(newUserName);
  }
  const usernameCreator = (newUserName) => {
    dispatch('SET_USER_NAME', newUserName)
  };

  const submitPasswordHandler = async () => {
    console.log("SELECTED CHANNEL", state.selectedChannel)
    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify({channel: state.selectedChannel, password: passwordValue})
    }
    const response = await fetch('http://localhost:3001/login', requestOptions)

    if(response.status === 200) {
      dispatch('SET_USER_VALID');
    } else {
      dispatch('SET_ERROR');
    }
    setPasswordValue('');
    
    console.log('response',response)
  }
  const hideChannels = e => {
    if (state.sideBarToggle === false) {
      dispatch("SET_SIDEBAR_TOGGLE_T")
    } else {
      dispatch("SET_SIDEBAR_TOGGLE_F")
    }
    console.log(state.sideBarToggle)
  }

  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      state.socket.emit('sent message', { from: state.user, msg: textValue, channel: state.selectedChannel });
      dispatch('RECEIVE_MESSAGE', { from: state.user, msg: textValue, channel: state.selectedChannel });
      changeTextValue('')
    }
  }

  const onChangeHandler = e => {
    changeTextValue(e.target.value);
  }
  
  const {isVerified, selectedChannel, showError} = state;

  return (
    <Layout>
      <NewChannels />
      <Wrapper>
      {isVerified ?
        <InnerBoxWrapper>
          <InnerBox>
            <AllUserMessages>
              <UserMessage/>
            </AllUserMessages>
            <InputWrapper>
              <TheInput
                label="Send a chat"
                onChange={onChangeHandler}
                value={textValue}
                onKeyPress={onKeyPressHandler}
              />
            </InputWrapper>
          </InnerBox>
        </InnerBoxWrapper>
      :
        selectedChannel ?
        <MyDiv>
          <WrapperLogin>
          <Title>Welcome to Cryptid!</Title>
          <MobileToggle
            onClick={() => {
            hideChannels()
            }}> Toggle Sidebar</MobileToggle>
          {showError ?
          <img src={skel} alt="monster logo"></img>
        :
          <img src={monster} alt="monster logo"></img>
        }
          <PleaseTitle>Please login to:</PleaseTitle>
          <PleaseLogin>{selectedChannel}</PleaseLogin>
          <PleaseLoginInput
            value={passwordValue} 
            type="password"
            placeholder="Enter the password"
            onChange={(e)=>{
              setPasswordValue(e.target.value)
            }}
          />
          <PleaseLoginButton
            onClick={submitPasswordHandler}
          >Submit</PleaseLoginButton>
          <SetUsernameLabel>You are: {state.user}</SetUsernameLabel>
          <SetUsernameInput 
            onChange={userNameChanger}
            placeholder="Change username"
          />
          <SetUsernameButton
            onClick={() => {
              usernameCreator(newUserName)}}
          >Submit</SetUsernameButton>
          </WrapperLogin>
        </MyDiv>
        
        :
        null
      }
      </Wrapper>
    </Layout>
  )
}

const NewChannels = styled(Channels)`
  overflow-x: none;
`

const MobileToggle = styled.button`
    align-items: center;
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color: black;
  text-align:center;
  transition: all 0.2s;
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 5px 32px;

  &:hover {
    background-color: #b60a1c;
    color: white;
  }
`;
const TheInput = styled.input`
  border:0.1em solid #FFFFFF;
  border-radius: 64px;
  width: 100%;
  height: 20px;
  margin-left: 3px;
  font-size: 20px;
`

const PleaseTitle = styled.div`
  font-size: 18px;
  padding-top: 5px;
  font-family: 'Creepster', cursive;
`;

const Title = styled.div`
  font-family: 'Creepster', cursive;
  padding-bottom: 5px;
  font-size: 64px;
`;

const AllUserMessages = styled.div`
  padding-bottom: 12px;
  padding-left: 6px;
`;

const MyDiv = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(0, 0, 0, 1);
  display: flex;
  justify-content: center;
`;

const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  margin-top: 60px;
  color: white;
  font-size:48px;
  width: 100%;
  align-items: center;
  font-family:'Roboto',sans-serif;
`;

const PleaseLogin = styled.div`
font-family: 'Creepster', cursive;
`;

const PleaseLoginInput = styled.input`
  width: 200px;
  height: 20px;
  font-size: 18px;
  text-align: center;
  font-family:'Roboto',sans-serif;
`;

const PleaseLoginButton = styled.button`
  align-items: center;
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color: black;
  text-align:center;
  transition: all 0.2s;
  margin-top: 2px;
  margin-bottom: 10px;
  padding: 5px 32px;
  width: 200px;

  &:hover {
    background-color: #b60a1c;
    color: white;
  }
`;

const SetUsernameLabel = styled.div`
  font-family: 'Creepster', cursive;
  font-size: 24px;
`;

const SetUsernameInput = styled.input`
  width: 200px;
  height: 20px;
  font-size: 18px;
  text-align: center;
`;

const SetUsernameButton = styled.button`
  align-items: center;
  display:inline-block;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color: black;
  text-align:center;
  transition: all 0.2s;
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 5px 32px;
  width: 200px;

  &:hover {
    background-color: #b60a1c;
    color: white;
  }
`;

const Layout = styled.section`
      height: 100vh;
      margin: 0;
      background-color: #b60a1c;
      display: flex;
    `;

const Wrapper = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  height:100%;
  overflow-y: auto;
  white-space: nowrap;
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
  width: 100%;
  margin-left: 1vw;
  margin-right: 1vw;
`;

const InnerBox = styled.section`
    text-align: center;
    width: 100%;
    align-self: flex-end;
    `;

const InnerBoxWrapper = styled.section`
      display: flex;
      height: 100vh;
      width: 100%;
      background: black;
      opacity: 0.5;
    
    `;

const InputWrapper = styled.div`
  width: 98%;
  padding-bottom: 2px;
    `

export default ChatBox;