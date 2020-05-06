import React from 'react'
import styled from "styled-components";
import { CTX } from './Store'
import Emoji from "react-emoji-render";
const UserMessage = () => {
    const { state, } = React.useContext(CTX);
    return (
        <div>
            <div>
                {
                    state.allChats && state.allChats[state.selectedChannel].map((chat, i) => (
                        <UserMessageWrapper key={i}> <UserName><p>{chat.from}</p></UserName><UserMessageStyle><p><Emoji text={chat.msg} /></p></UserMessageStyle></UserMessageWrapper>
                    ))
                }
            </div>
        </div>
    )
}

const UserName = styled.div`
color: white;
height: 50px;
width: 50px;
margin-right: 50px;
font-size: 18px;
`

const UserMessageWrapper = styled.div`
display: flex;
height: 40px;
width: 100%;
color: white;
background-color: (155, 155, 155, 0.95);

`

const UserMessageStyle = styled.div`
color: white;
font-size: 18px;


`
export default UserMessage;