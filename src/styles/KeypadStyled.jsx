import styled from "styled-components";

const KeyPad = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #8d8d8d;
`;

const PadControlContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  background-color: #b3b3b3;
  outline: 5px solid orange;
`;
const PadContainer = styled.div`
  place-items: center;
  background-color: #8d8d8d;
`;

const MainTitle = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
`;

const KeyContainer = styled.section`
  display: grid;
  grid-template-columns: 0.1fr 0.1fr 0.1fr;
  place-items: center;
  justify-content: center;
  align-content: center;
  width: 28rem;
  height: 53vh;
`;

const Key = styled.div`
  background-color: grey;
  box-shadow: black 3px 3px 5px;
  padding: 2rem;
  position: relative;
  float: left;
  width: 100px;
  height: 80px;
  margin: 0 10px 10px 0;
  border-radius: 5px;
  padding-top: 35px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  font-weight: 700;
  &&:active{
    background-color:#ffa500;
  }
`;

const PadButtonContainer = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 20px;
  padding: 1px;
  background-color: black;
  margin-bottom: 1.7rem;
`;

const ControlsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
`;

const SwitchStyled = styled.div`
  width: 23px;
  height: 19px;
  background: blue;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
`;

const DisplayStyled = styled.p`
  width: 12.5rem;
  background-color: gray;
  margin: 1rem auto;
  padding: 1rem;
  box-sizing: border-box;
  font-weight: 600;
`;

export {
  KeyPad,
  KeyContainer,
  Key,
  PadContainer,
  PadButtonContainer,
  ControlsContainer,
  DisplayStyled,
  SwitchStyled,
  PadControlContainer,
  MainTitle,
  
};
