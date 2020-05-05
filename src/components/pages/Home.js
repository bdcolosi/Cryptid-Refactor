import React from 'react'
import styled from "styled-components";
import Background from './images/Cryptid.png'
import { createGlobalStyle } from 'styled-components'


const Home = () => {

    return (

        <Container>
            <GlobalStyle />
            <InnerContainer>
                <OutterContainer>
                    <CryptidInfo><p> Cryptid chat is great for quick conversations, in a secure location
        between clients.</p></CryptidInfo>
                </OutterContainer>
                <Logo />
            </InnerContainer>
        </Container>
    )


}

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
  }`


const OutterContainer = styled.div`
display: flex;
justify-content: center;
height: 40vh;
`;

const Container = styled.div`
height: 100%;
width: 100%;
`;

const InnerContainer = styled.div`
display: flex;
justify-content:center;
align-items:center;
height: 100%;
width: 100%;

position: absolute;
`;

const Logo = styled.div`

/* border: 1px solid red; */
/* margin: auto;
padding: auto; */
height: 100px;
width: 500px;
background-image: url(${ Background});
margin-right: 30vw;
`

const CryptidInfo = styled.h3`
color: white;
font-family: 'Montserrat', sans-serif;
`
export default Home;