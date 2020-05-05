import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { CTX } from './Store';

const Channels = () => {
    const { state, dispatch } = React.useContext(CTX);



    const { sideBarToggle } = state;
    return (
        <div>
            {sideBarToggle ?
                <Sidebar/>
            :
            <ClosedSideBar/>
            }
        </div>
    )
}

const ClosedSideBar = styled.div`
    display: none;
`;

export default Channels;