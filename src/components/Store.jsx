import React from "react";
import io from "socket.io-client";
export const CTX = React.createContext();

const initState = {
  selectedChannel: null,
  isVerified: false,
  socket: io(":3001"),
  user: "Anonymous",
  allChats: null,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_CHANNEL_NAME":
      const newChannelName = action.payload;
      return {
        ...state,
        allChats: {
          ...state.allChats,
          [newChannelName]: [{from: "ChatBot", msg: "Welcome to a new chatroom!"}]
        }
      }
    case "CREATE_CHANNEL":
      return {
        ...state,
        allChats: {
          ...state.allChats,
          newChannel: [ {from: "chatbot", msg: "Welcome to a new chatroom! Type away!"}],
          newPassword: "",
        }
      };
    case "SET_USER_NAME":
      const newUserName = action.payload;
      return {
        ...state,
        user: [newUserName],
      };
    case "SET_SELECTED_CHANNEL":
      return {
        ...state,
        selectedChannel: action.payload,
        isVerified: false,
      };

    case "SET_USER_VALID":
      return {
        ...state,
        isVerified: true,
      }
    case "RECEIVE_MESSAGE":
      const { from, msg, channel } = action.payload;
      return {
        ...state,
        allChats: {
          ...state.allChats,
          [channel]: [...state.allChats[state.selectedChannel], { from, msg }],
        },
      };
    case "RECEIVE_CHANNELS":
      const channels = action.payload;
      const newObj = {};
      console.log(channels)
      channels.forEach(channel => {
        newObj[channel.channel] = [ {from: "chatbot", msg: "Welcome to a new chatroom! Type away!"}];
      })
      return {
        ...state,
        allChats: newObj,
        selectedChannel: channels[0].channel
      }
    default:
      return state;
  }
};

// const sendChatAction = (value) => {
//     socket.emit('chat message', value);
// }

export const Store = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  const myDispatch = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <CTX.Provider value={{ state, dispatch: myDispatch }}>
      {props.children}
    </CTX.Provider>
  );
};
