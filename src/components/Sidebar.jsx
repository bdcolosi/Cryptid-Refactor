import React from "react";
import SingleChannel from "./SingleChannel";
import styled from "styled-components";
import { CTX } from "./Store";

const Sidebar = () => {

  const { state, dispatch } = React.useContext(CTX);

  React.useEffect(() => {
    console.log('SIDEBAR')
    state.socket.on('channels', function (channels) {
      console.log("channels recieved")
      dispatch('RECEIVE_CHANNELS', channels);
  })
  }, [])

  const channel = Object.keys(state.allChats);
  const changeActiveChannel = (eaChannel) => {
    dispatch("SET_SELECTED_CHANNEL", eaChannel );
  };
  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }
  let newChannelName = "";
  const channelNameChanger = e => {
    newChannelName = e.target.value;
    console.log(newChannelName);
  }
  let createPass = "";
  const passwordHandler = e => {
    createPass = e.target.value;
    console.log(createPass);
  }
  const createChannel = (newChannelName) => {
    dispatch("SET_CHANNEL_NAME", newChannelName )
  };
  return (
    <SideNav>
      <AddChannelWrapper>
        <ChannelInputForm>
          <Label>Channel name:</Label><br></br>
          <input type="text"
            onKeyPress={onKeyPressHandler}
            onChange={channelNameChanger}
            /><br></br>
          <Label>Channel password:</Label><br></br>
          <input type="text"
            onKeyPress={onKeyPressHandler}
            onChange={passwordHandler}
          /><br></br>
        </ChannelInputForm>
        <button onClick={() => {createChannel(newChannelName)}}>Add channel</button> 
      </AddChannelWrapper>

      {channel.map((eaChannel, i) => (
        <SingleChannelWrapper
          key={i}
          onClick={() => {
            changeActiveChannel(eaChannel);
          }}
        >
          <SingleChannel eachChannel={eaChannel} key={i} />
        </SingleChannelWrapper>
      ))}
    </SideNav>
  );
};

const AddChannelWrapper = styled.div``;

const ChannelInputForm = styled.form``;

const Label = styled.label`
  color: white
`;

const SingleChannelWrapper = styled.button``;

const SideNav = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  background: black;
  opacity: 0.5;
  border-radius: 15px !important;
  @media only screen and (min-width: 50px) and (max-width: 530px) {
    margin: 0px;
    align-items: center;
  }
`;

export default Sidebar;
