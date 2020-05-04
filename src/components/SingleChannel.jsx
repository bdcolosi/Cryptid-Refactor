import React from "react";
import styled from "styled-components";
import user from "./user.png";

const SingleChannel = (props) => {
  return (
    <UserWapper>
      {/* <ImageWrapper>
        <UserImage src={user} atl="user image" className="channelImage" />
      </ImageWrapper> */}
      <InfoWrapper>
        <UserName>{props.eachChannel}</UserName>
      </InfoWrapper>
    </UserWapper>
  );
};

const UserWapper = styled.a`
  align-items: center;
  display:inline-block;
  /* padding:0.35em 1.2em; */
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
// const ImageWrapper = styled.div``;

// const UserImage = styled.img`
//   float: left;
//   max-width: 60px;
//   width: 100%;
//   margin-right: 20px;
//   margin-top: 10px;
//   border-radius: 50%;
//   @media only screen and (min-width: 50px) and (max-width: 530px) {
//     height: 100%;
//     margin: 0px;
//   }
// `;
const InfoWrapper = styled.div``;
const UserName = styled.p`
  margin: 3px;
`;
// const LastMessage = styled.p`
//     font-size: 12px;
//     margin-top: 4px;
//     @media only screen and (min-width : 50px) and (max-width : 530px){
//         display: none;
//     }
// `
// const Time = styled.p`
//     font-size: 10px;
//     margin: 0px;
//     margin-bottom: 5px;
//     @media only screen and (min-width : 50px) and (max-width : 530px){
//         display: none;
//     }
// `

export default SingleChannel;
