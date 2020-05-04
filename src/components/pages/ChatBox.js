import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import UserMessage from "../UserMessage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import InputAddon from '../InputAddon'




import { CTX } from '../Store'


const ChatBox = () => {
  const [textValue, changeTextValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');


  const { state, dispatch } = React.useContext(CTX);
  console.log(state.user)
  React.useEffect(() => {
    console.log(state.user)

    state.socket.on('message', function (msg) {
      console.log("chat message recieved")
      dispatch('RECEIVE_MESSAGE', msg);
    })
  }, [])
  
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
      dispatch('SET_USER_VALID')
    }
    setPasswordValue('');
    
    console.log('response',response)
  }



  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log("PRESSED")
      state.socket.emit('sent message', { from: state.user, msg: textValue, channel: state.selectedChannel });
      dispatch('RECEIVE_MESSAGE', { from: state.user, msg: textValue, channel: state.selectedChannel });
      changeTextValue('')
    }
  }

  const onChangeHandler = e => {
    changeTextValue(e.target.value);
  }
  
  const {isVerified, selectedChannel} = state;
  console.log(state)

  return (

    <Layout>
      <Sidebar />
      <Wrapper>
      {isVerified ?
        <InnerBoxWrapper>
          <InnerBox>
            <UserMessage />
            <InputWrapper>
              <InputAddons id="InputAddon">
                <FontAwesomeIcon icon={faPlus} onClick={InputAddon}></FontAwesomeIcon>
              </InputAddons>
              <input
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
          <PleaseLogin> Please login to channel: {selectedChannel}</PleaseLogin>
          <PleaseLoginInput
            value={passwordValue} 
            onChange={(e)=>{
              setPasswordValue(e.target.value)
            }}
          />
          <PleaseLoginButton
            onClick={submitPasswordHandler}
          >Submit</PleaseLoginButton>
          <SetUsernameLabel> Want to set your username for channel {selectedChannel}?</SetUsernameLabel>
          <SetUsernameInput 
            onChange={userNameChanger}
            
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

const MyDiv = styled.div`
  height: 100%;
  width: 100%;
  background: purple;
  display: flex;
  justify-content: center;
`;

const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 30%;
  margin-top: 100px;
`;

const PleaseLogin = styled.div`
`;

const PleaseLoginInput = styled.input`
`;

const PleaseLoginButton = styled.button`
`;

const SetUsernameLabel = styled.div`
`;

const SetUsernameInput = styled.input`
`;

const SetUsernameButton = styled.button`
`;

const Layout = styled.section`
      height: 100vh;
      margin: 0;
      background: #7f7fd5;
      background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
      background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
      border-radius: 15px !important;
      background-color: rgba(0, 0, 0, 0.4) !important;
      display: flex;
    `;

const Wrapper = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  height:100%;
  /* padding: 0.75rem 0 !important; */
  overflow-y: auto;
  white-space: nowrap;
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
  width: 100%;
  margin-left: 1vw;
  margin-right: 15vw;
`;

const InnerBox = styled.section`
    text-align: center;
    width: 100%;
    align-self: flex-end;
    `;

const InnerBoxWrapper = styled.section`
      display: flex;
      height: 90vh;
      background: black;
      opacity: 0.5;
    
    `;

const InputWrapper = styled.div`
display: flex;
justify-content: center;
    `

const InputAddons = styled.div`
margin-right: 3px;

height: 16px;
width: 14px;
color: white;
    `


const MessageBox = styled.input``;
export default ChatBox;