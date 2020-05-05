import React from "react";
import styled from "styled-components";

const SingleChannel = (props) => {
  return (
    <UserWapper>
      <InfoWrapper>
        <UserName>{props.eachChannel}</UserName>
      </InfoWrapper>
    </UserWapper>
  );
};

const UserWapper = styled.a`
  align-items: center;
  display:inline-block;
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
  width: 100%;

  &:hover {
    background-color: #b60a1c;
    color: white;
  }
`;

const InfoWrapper = styled.div``;

const UserName = styled.p`
  margin: 3px;
`;

export default SingleChannel;
