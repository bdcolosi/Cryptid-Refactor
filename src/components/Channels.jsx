import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { CTX } from './Store';

const Channels = () => {
    const { state } = React.useContext(CTX);



    const { sideBarToggle } = state;
    return (
        <Div>
            {sideBarToggle ?
                <Sidebar/>
            :
                <ClosedSideBar/>
            }
        </Div>
    )
}

const Div = styled.div`
    overflow-y: scroll;
    text-align: center;
    /* display: none; */
    overflow-x: hidden;
`

const ClosedSideBar = styled.div`
    display: none;
`;

export default Channels;