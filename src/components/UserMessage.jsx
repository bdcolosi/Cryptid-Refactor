import React from 'react'
import styled from "styled-components";
import { Store, CTX } from './Store'
import Emoji from "react-emoji-render";
const UserMessage = () => {
    const { state, } = React.useContext(CTX);
    return (
        <div>
            <div>
                {
                    state.allChats[state.selectedChannel].map((chat, i) => (
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
`

const UserMessageWrapper = styled.div`
display: flex;
height: 40px;
width: 500px;
color: white;
`

const UserMessageStyle = styled.div`
color: white;


`
export default UserMessage;