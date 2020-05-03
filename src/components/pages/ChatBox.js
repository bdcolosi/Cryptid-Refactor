import React from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";
import UserMessage from "../UserMessage";

import { CTX } from '../Store'

const ChatBox = () => {
  const [textValue, changeTextValue] = React.useState('');

  const { state, dispatch } = React.useContext(CTX);
  console.log(state.user)
  React.useEffect(() => {
    console.log(state.user)

    state.socket.on('message', function (msg) {
      console.log("chat message recieved")
      dispatch('RECEIVE_MESSAGE', msg);
  })
  }, [])



  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log("PRESSED")
      state.socket.emit('sent message', { from: state.user, msg: textValue, channel:state.selectedChannel });
      dispatch('RECEIVE_MESSAGE',{ from: state.user, msg: textValue, channel:state.selectedChannel });
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
      <Sidebar/>
      <Wrapper>
      {isVerified ?
        <InnerBoxWrapper>
          <InnerBox>
            <UserMessage />
            <input
              label="Send a chat"
              onChange={onChangeHandler}
              value={textValue}
              onKeyPress={onKeyPressHandler}
            />
          </InnerBox>
        </InnerBoxWrapper>
      :
        selectedChannel ?
        <MyDiv>
          <div> Please login to channel: {selectedChannel}</div>

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

const MessageBox = styled.input``;
export default ChatBox;