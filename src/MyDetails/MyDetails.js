import React, { useState } from "react";
import styled from "styled-components";
import { GoThreeBars, GoLocation } from "react-icons/go";
import { BsCreditCard } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoIosRibbon } from "react-icons/io";
import DetailMenu from "./DetailMenu";
import DetailMenu2 from "./DetailMenu2";
const MyDetails = () => {
  const [phone, setPhone] = useState(false);
  const [phone1, setPhone1] = useState(false);
  return (
    <Container>
      <Wrapper>
        <TopHold>
          <Up1>Game</Up1>
          <Up2>Food</Up2>
          <Up3>Sport</Up3>
          <Up4>Tech</Up4>
          <Up5>Phone</Up5>
          <Up6
            onMouseOver={() => {
              setPhone1(true);
            }}
            onMouseLeave={() => {
              setPhone1(false);
            }}
          >
            More
            {phone1 ? <DetailMenu2 /> : null}
          </Up6>
          <Up7
            onMouseOver={() => {
              setPhone(true);
            }}
            onMouseLeave={() => {
              setPhone(false);
            }}
          >
            Menu
            {phone ? <DetailMenu /> : null}
          </Up7>
        </TopHold>
        <AllHoldDown>
          <BottomHold>
            <ImageCov>
              <img src="art.jpg" alt="loading" />
            </ImageCov>
            <TextHold>
              <Info>
                <One>Technovation Conference</One>
                <Two>
                  <Twos>
                    <Btn>Technology</Btn>
                    <Date>
                      <FaRegCalendarAlt
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <Time> July 17,2022</Time>
                    </Date>
                  </Twos>
                </Two>
                <Three>
                  Lorem ipsum dolor sit amet, quodsi conceptam adversarium te
                  nec, vis te zril urbanitas scribentur. In utamur impedit
                  feugait nec, ex putent alienum est. Nam tantas latine admodum
                  at, ea etiam nobis pri.
                </Three>
                <Four>
                  <Fours>
                    {" "}
                    <SDate>
                      <GiSandsOfTime
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <STime>Expired</STime>
                    </SDate>
                    <SDate>
                      <GoLocation
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Lagos</STime>
                    </SDate>
                    <SDate>
                      <BsCreditCard
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Free</STime>
                    </SDate>
                  </Fours>
                </Four>
              </Info>
            </TextHold>
          </BottomHold>
          <BottomHold>
            <ImageCov>
              <img src="art.jpg" alt="loading" />
            </ImageCov>
            <TextHold>
              <Info>
                <One>Technovation Conference</One>
                <Two>
                  <Twos>
                    <Btn>Technology</Btn>
                    <Date>
                      <FaRegCalendarAlt
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <Time> July 17,2022</Time>
                    </Date>
                  </Twos>
                </Two>
                <Three>
                  Lorem ipsum dolor sit amet, quodsi conceptam adversarium te
                  nec, vis te zril urbanitas scribentur. In utamur impedit
                  feugait nec, ex putent alienum est. Nam tantas latine admodum
                  at, ea etiam nobis pri.
                </Three>
                <Four>
                  <Fours>
                    {" "}
                    <SDate>
                      <GiSandsOfTime
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <STime>Expired</STime>
                    </SDate>
                    <SDate>
                      <GoLocation
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Lagos</STime>
                    </SDate>
                    <SDate>
                      <BsCreditCard
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Free</STime>
                    </SDate>
                  </Fours>
                </Four>
              </Info>
            </TextHold>
          </BottomHold>
          <BottomHold>
            <ImageCov>
              <img src="art.jpg" alt="loading" />
            </ImageCov>
            <TextHold>
              <Info>
                <One>Technovation Conference</One>
                <Two>
                  <Twos>
                    <Btn>Technology</Btn>
                    <Date>
                      <FaRegCalendarAlt
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <Time> July 17,2022</Time>
                    </Date>
                  </Twos>
                </Two>
                <Three>
                  Lorem ipsum dolor sit amet, quodsi conceptam adversarium te
                  nec, vis te zril urbanitas scribentur. In utamur impedit
                  feugait nec, ex putent alienum est. Nam tantas latine admodum
                  at, ea etiam nobis pri.
                </Three>
                <Four>
                  <Fours>
                    {" "}
                    <SDate>
                      <GiSandsOfTime
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <STime>Expired</STime>
                    </SDate>
                    <SDate>
                      <GoLocation
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Lagos</STime>
                    </SDate>
                    <SDate>
                      <BsCreditCard
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Free</STime>
                    </SDate>
                  </Fours>
                </Four>
              </Info>
            </TextHold>
          </BottomHold>
          <BottomHold>
            <ImageCov>
              <img src="art.jpg" alt="loading" />
            </ImageCov>
            <TextHold>
              <Info>
                <One>Technovation Conference</One>
                <Two>
                  <Twos>
                    <Btn>Technology</Btn>
                    <Date>
                      <FaRegCalendarAlt
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <Time> July 17,2022</Time>
                    </Date>
                  </Twos>
                </Two>
                <Three>
                  Lorem ipsum dolor sit amet, quodsi conceptam adversarium te
                  nec, vis te zril urbanitas scribentur. In utamur impedit
                  feugait nec, ex putent alienum est. Nam tantas latine admodum
                  at, ea etiam nobis pri.
                </Three>
                <Four>
                  <Fours>
                    {" "}
                    <SDate>
                      <GiSandsOfTime
                        color="orange"
                        fontSize="17px"
                        cursor="pointer"
                      />
                      <STime>Expired</STime>
                    </SDate>
                    <SDate>
                      <GoLocation
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Lagos</STime>
                    </SDate>
                    <SDate>
                      <BsCreditCard
                        fontSize="15px"
                        cursor="pointer"
                        color="orange"
                      />
                      <STime>Free</STime>
                    </SDate>
                  </Fours>
                </Four>
              </Info>
            </TextHold>
          </BottomHold>
        </AllHoldDown>
      </Wrapper>
    </Container>
  );
};

export default MyDetails;
const Info = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  border-top: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
const One = styled.div`
  font-size: 17px;
  font-family: poppins;
  font-weight: bold;
  text-align: start;
  width: 95%;
  margin-top: 7px;
`;
const Twos = styled.div`
  display: flex;
  /* background-color: rebeccapurple; */
  width: 260px;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button`
  padding: 7px 16px;
  border: none;
  outline: none;
  background-color: orange;
  cursor: pointer;
  border-radius: 20px;
  font-size: 14px;
  color: white;
`;
const Date = styled.div`
  /* background-color: rebeccapurple; */
  min-width: 130px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SDate = styled.div`
  /* background-color: rebeccapurple; */
  min-width: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Time = styled.div`
  font-size: 15px;
  font-family: poppins;
  font-weight: lighter;
  min-width: 100px;
  /* background-color: red; */
`;
const STime = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: lighter;
  min-width: 70px;
  margin-left: 5px;
  /* background-color: red; */
`;
const Three = styled.div`
  font-size: 16px;
  font-family: poppins;
  font-weight: 500;
  text-align: start;
  width: 95%;
  /* background: red; */
  margin-top: 7px;
`;
const Four = styled.div`
  display: flex;
  /* background: red; */
  width: 95%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 7px;
`;
const Fours = styled.div`
  display: flex;
  width: 285px;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;

const Two = styled.div`
  display: flex;
  /* background-color: red; */
  width: 95%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 6px;
`;

const AllHoldDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 1200px auto;
  /* background: green; */
`;
const TextHold = styled.div`
  width: 340px;
  height: auto;
  margin-top: -65px;
  /* background: red; */

  @media screen and (max-width: 768px) {
    width: 270px;
  }
  @media screen and (max-width: 425px) {
    width: 350px;
    height: 260px;
  }
  @media screen and (max-width: 375px) {
    width: 340px;
    height: 250px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
    height: 230px;
  }
`;
const ImageCov = styled.div`
  width: 380px;
  height: 300px;
  /* background: red; */
  border-radius: 10px;
  /* position: relative; */
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    height: 240px;
  }
  @media screen and (max-width: 425px) {
    width: 350px;
    height: 260px;
  }
  @media screen and (max-width: 375px) {
    width: 340px;
    height: 250px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
    height: 230px;
  }
`;
const BottomHold = styled.div`
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: green; */
  width: auto;
`;

const Up7 = styled.div`
  width: 80px;
  margin: 0 15px;
  height: 35px;
  background: orange;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: white;
    border: 0.7px solid orange;
    color: orange;
    transition: all 350ms;
  }
  .active {
    background: white;
    border: 0.7px solid orange;
    color: orange;
  }
  @media screen and (max-width: 375px) {
    display: flex;
  }
`;
const Up6 = styled.div`
  width: 80px;
  margin: 0 15px;
  height: 35px;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: white;
    border: 0.7px solid orange;
    color: orange;
    transition: all 350ms;
  }
  .active {
    background: white;
    border: 0.7px solid orange;
    color: orange;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
const Up5 = styled.div`
  width: 80px;
  margin: 0 15px;
  height: 35px;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: white;
    border: 0.7px solid orange;
    color: orange;
    transition: all 350ms;
  }
  .active {
    background: white;
    border: 0.7px solid orange;
    color: orange;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const Up4 = styled.div`
  width: 80px;
  margin: 0 15px;
  height: 35px;
  background: orange;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  :hover {
    background: white;
    border: 0.7px solid orange;
    color: orange;
    transition: all 350ms;
  }
  .active {
    background: white;
    border: 0.7px solid orange;
    color: orange;
  }

  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const Up3 = styled.div`
  width: 80px;
  height: 35px;
  margin: 0 15px;
  cursor: pointer;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  :hover {
    background: white;
    border: 0.7px solid orange;
    color: orange;
    transition: all 350ms;
  }
  .active {
    background: white;
    border: 0.7px solid orange;
    color: orange;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
const Up2 = styled.div`
  width: 80px;
  margin: 0 15px;
  cursor: pointer;
  height: 35px;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  :hover {
    background: white;
    border: 0.7px solid orange;
    color: orange;
    transition: all 350ms;
  }
  .active {
    background: white;
    border: 0.7px solid orange;
    color: orange;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
const Up1 = styled.div`
  width: 80px;
  height: 35px;
  cursor: pointer;
  margin: 0 15px;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  font-weight: 600;
  :hover {
    background: white;
    border: 0.7px solid orange;
    color: orange;
    transition: all 350ms;
  }
  .active {
    background: white;
    border: 0.7px solid orange;
    color: orange;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
`;
const TopHold = styled.div`
  width: 600px;
  height: 70px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding: 5px 0;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  height: 100vh;
  /* background: blue; */
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: poppins;
`;
