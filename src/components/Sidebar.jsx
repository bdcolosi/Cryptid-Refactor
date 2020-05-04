import React from "react";
import SingleChannel from "./SingleChannel";
import styled from "styled-components";
import { CTX } from "./Store";

const Sidebar = () => {
  const { state, dispatch } = React.useContext(CTX);
  const [channelValue, setChannelValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  React.useEffect(() => {
    console.log('SIDEBAR')
    state.socket.on('channels', function (channels) {
      console.log("channels recieved")
      dispatch('RECEIVE_CHANNELS', channels);
    })
  }, [])

  let channel;

  if (state.allChats) {
    channel = Object.keys(state.allChats);
  }
  const changeActiveChannel = (eaChannel) => {
    dispatch("SET_SELECTED_CHANNEL", eaChannel);
  };
  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }
  const channelNameChanger = e => {
    setChannelValue(e.target.value);
  }
  const passwordHandler = e => {
    setPasswordValue(e.target.value)
  }

  const createChannel = async () => {

    const requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ channel: channelValue, password: passwordValue })
    }

    const response = await fetch('http://localhost:3001/putchannel', requestOptions)
    if (response.status === 200) {

      dispatch("SET_CHANNEL_NAME", channelValue)
    }
    setChannelValue('')
    console.log(response)
  }
  return (
    <SideNav>
      <AddChannelWrapper>
        <ChannelInputForm>
          <Label>Add a channel?</Label><br></br>
          <input type="text"
            value={channelValue}
            onKeyPress={onKeyPressHandler}
            onChange={channelNameChanger}
            placeholder="Channel name"
          /><br></br>
          <input type="password"
            value={passwordValue}
            onKeyPress={onKeyPressHandler}
            onChange={passwordHandler}
            placeholder="Password"
          /><br></br>
        </ChannelInputForm>
        <ButtonWrapper onClick={createChannel}>
          Add channel
        </ButtonWrapper>

      </AddChannelWrapper>
      <AllSingleChannels>
      {channel && channel.map((eaChannel, i) => (
        <SingleChannelWrapper
          key={i}
          onClick={() => {
            changeActiveChannel(eaChannel);
          }}
        >
          <SingleChannel eachChannel={eaChannel} key={i} />
        </SingleChannelWrapper>
      ))}
      </AllSingleChannels>
    </SideNav>
  );
};

const AllSingleChannels = styled.div`
  overflow-y: scroll;
  text-align: center;
`;


const AddChannelWrapper = styled.div`
align-self: center;
padding-bottom: 10px;
padding-top: 5px;
`;

const ChannelInputForm = styled.form`
font-family:'Roboto',sans-serif;
`;

const Label = styled.label`
  color: white;
  font-family: 'Creepster', cursive;
`;

const SingleChannelWrapper = styled.button`
  width: 80%;
`;

const ButtonWrapper = styled.button`
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
  `


const SideNav = styled.div`
  /* overflow-y:scroll;
  height: 4000px; */
  display: flex;
  width: 240px;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 15px !important;
  @media only screen and (min-width: 50px) and (max-width: 530px) {
    margin: 0px;
    align-items: center;
  }
`;


export default Sidebar;
