import React from "react";
import io from "socket.io-client";
export const CTX = React.createContext();

const initState = {
  selectedChannel: "general",
  socket: io(":3001"),
  user: "RandomUser",
  allChats: {
    general: [
      { from: "user1", msg: "hello" },
      { from: "user2", msg: "u stink" },
      { from: "user3", msg: "some other words" },
    ],
    channel2: [{ from: "user1", msg: "hello" }],
  },
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
          newChannel: [ {from: "chatbot", msg: "Welcome to a new chatroom! Type away!"}]
        }
      };
    case "SET_USER_NAME":
      return {
        ...state,
        user: action.payload,
      };
    case "SET_SELECTED_CHANNEL":
      return {
        ...state,
        selectedChannel: action.payload,
      };
    case "RECEIVE_MESSAGE":
      const { from, msg, channel } = action.payload;
      return {
        ...state,
        allChats: {
          ...state.allChats,
          [channel]: [...state.allChats[state.selectedChannel], { from, msg }],
        },
      };
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
    if (typeof type === "object" && type !== null) {
      dispatch(type);
    }
    dispatch({ type, payload });
  };

  return (
    <CTX.Provider value={{ state, dispatch: myDispatch }}>
      {props.children}
    </CTX.Provider>
  );
};
