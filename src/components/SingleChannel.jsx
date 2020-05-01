import React from "react";
import styled from "styled-components";
import user from "./user.png";

const SingleChannel = (props) => {
  return (
    <UserWapper>
      <ImageWrapper>
        <UserImage src={user} atl="user image" className="channelImage" />
      </ImageWrapper>
      <InfoWrapper>
        <UserName>{props.eachChannel}</UserName>
      </InfoWrapper>
    </UserWapper>
  );
};

const UserWapper = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  border: 2px solid blue;
  border-radius: 5px;
  @media only screen and (min-width: 50px) and (max-width: 530px) {
    display: flex;
    flex-direction: column;
  }
`;
const ImageWrapper = styled.div``;

const UserImage = styled.img`
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  margin-top: 10px;
  border-radius: 50%;
  @media only screen and (min-width: 50px) and (max-width: 530px) {
    height: 100%;
    margin: 0px;
  }
`;
const InfoWrapper = styled.div``;
const UserName = styled.p`
  margin: 3px;

  @media only screen and (min-width: 50px) and (max-width: 530px) {
    display: none;
  }
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
