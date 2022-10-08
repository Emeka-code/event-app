import React, { useState } from "react";
import styled from "styled-components";
import Menu1 from "../AllMenu/Menu1";
import Menu2 from "../AllMenu/Menu2";
import Menu3 from "../AllMenu/Menu3";
import Menu4 from "../AllMenu/Menu4";
import { GoThreeBars } from "react-icons/go";
import Sider from "./Sider";
import { BiCaretDown } from "react-icons/bi";

const Header = () => {
  const [close, setClose] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  // console.log(close);
  return (
    <>
      <Container>
        <Wrapper>
          <Logo src="codelab1.png" alt="loading" />
          <NavHold>
            <Nav
              onMouseOver={() => {
                setOpen(true);
              }}
              onMouseLeave={() => {
                setOpen(false);
              }}
            >
              <div>
                Menu <BiCaretDown />
              </div>
              {open ? (
                <div>
                  <Menu1 />
                </div>
              ) : null}
            </Nav>
            <Nav
              onMouseOver={() => {
                setOpen2(true);
              }}
              onMouseLeave={() => {
                setOpen2(false);
              }}
            >
              <div>
                service <BiCaretDown />
              </div>
              {open2 ? (
                <div>
                  <Menu2 />
                </div>
              ) : null}
            </Nav>
            <Nav
              onMouseOver={() => {
                setOpen3(true);
              }}
              onMouseLeave={() => {
                setOpen3(false);
              }}
            >
              <div>
                service <BiCaretDown />
              </div>
              {open3 ? (
                <div>
                  <Menu3 />
                </div>
              ) : null}
            </Nav>
            <Nav
              onMouseOver={() => {
                setOpen4(true);
              }}
              onMouseLeave={() => {
                setOpen4(false);
              }}
            >
              <div>
                service <BiCaretDown />
              </div>
              {open4 ? (
                <div>
                  <Menu4 />
                </div>
              ) : null}
            </Nav>
          </NavHold>
          <BtnHold>
            <SignInBtn>Sign In</SignInBtn>
            <SignUpBtn>Sign Up</SignUpBtn>
          </BtnHold>
          {close ? (
            <BoggerMenu
              onClick={() => {
                setClose(false);
              }}
            />
          ) : (
            <BoggerMenu
              onClick={() => {
                setClose(true);
              }}
            />
          )}
        </Wrapper>
      </Container>
      {close ? <Sider /> : null}
    </>
  );
};

export default Header;

const BoggerMenu = styled(GoThreeBars)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
const Nav = styled.div`
  height: 40px;
  cursor: pointer;
  margin-left: 12px;
  font-size: 17px;
  /* background: red; */
  font-weight: 700;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  :hover {
    color: blue;
  }
`;

const SignUpBtn = styled.div`
  width: 70px;
  height: 30px;
  color: white;
  cursor: pointer;
  background: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 13px;
`;
const SignInBtn = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 70px;
  height: 30px;
  font-size: 13px;
  color: white;
  background: purple;
  border-right: 0.5px solid red;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

const BtnHold = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const NavHold = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: center;
  /* background: red; */
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: poppins;
  /* background: red; */
`;
