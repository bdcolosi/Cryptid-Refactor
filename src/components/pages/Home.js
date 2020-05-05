import React from 'react'
import styled from "styled-components";
import Background from './images/Cryptid.png'
import { createGlobalStyle } from 'styled-components'


const Home = () => {

    return (

        <Container>
            <GlobalStyle />
            <OutterContainer>
                <CryptidInfo><p>test</p></CryptidInfo>
            </OutterContainer>
            <InnerContainer>
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
height: 100%;
width: 100%;
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
`;

const Logo = styled.div`

border: 1px solid red;
/* margin: auto;
padding: auto; */
height: 100px;
width: 400px;
background-image: url(${ Background});
`

const CryptidInfo = styled.section`
color: white;
`
export default Home;