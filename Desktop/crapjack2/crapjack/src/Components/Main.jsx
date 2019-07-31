import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Button from "./Button";  

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #4caf50;  
`;

const Main = () => {
  return (
    <MainContainer>
      <Nav>
        <Button >New Game</Button>
      </Nav>
    </MainContainer>
  );
};

export default Main;