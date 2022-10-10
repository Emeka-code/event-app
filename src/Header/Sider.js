import React from "react";
import styled from "styled-components";

const Sider = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Holder>home</Holder>
          <span></span>
          <Holder>home</Holder>
          <span></span>
          <Holder>home</Holder>
          <span></span>
          <Holder>home</Holder>
          <span></span>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Sider;
const Holder = styled.div`
  width: 80%;
  height: 50px;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: poppins;
  cursor: pointer;
  @media screen and (max-width: 375px) {
    margin-left: 10px;
  }
  /* background: red; */
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  /* background: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    border-bottom: 1px solid lightgrey;
    width: 80%;
  }
  @media screen and (max-width: 375px) {
    align-items: flex-start;
  }
`;
const Container = styled.div`
  width: 250px;
  height: auto;
  /* background: red; */
  position: fixed;
  left: 0px;
`;
