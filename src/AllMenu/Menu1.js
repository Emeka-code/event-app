import React from "react";
import styled from "styled-components";

const Menu1 = () => {
  return (
    <Container>
      <Hold>boy11</Hold>
      <span></span>
      <Hold>boy1</Hold>
      <span></span>
      <Hold>boy2</Hold>
      <span></span>
    </Container>
  );
};

export default Menu1;

const Container = styled.div`
  width: 150px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: white;
  border-radius: 5px;
  border-top: 1px solid blue;
  z-index: 100px;
  position: absolute;
  font-size: poppins;
  /* right: -5px; */
  top: 50px;
  span {
    width: 100%;
    border-bottom: 0.3px solid lightgray;
  }
`;
const Hold = styled.div`
  font-size: 15px;
  /* background: red; */
  height: 20px;
  margin: 10px 20px;
  color: black;

  :hover {
    color: blue;
  }
`;
