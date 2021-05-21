import styled from "styled-components";

const KeyPad = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b3b3b3;
`

const PadContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
`

const KeyContainer = styled.section`
  display: grid;
  grid-template-columns: .1fr .1fr .1fr;
  place-items: center;
  justify-content: center;
  align-content: center;
  width: 20.6rem;
  height: 41vh;
`

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
`

const PadButtonContainer = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 20px;
  padding: 1px;
  background-color: black;
  
`

const ControlsContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0rem 2rem;
`

const SwitchStyled = styled.div`
  width: 23px;
  height: 19px;
  background: blue;
  border: 1px solid black;
  box-sizing: border-box;
  cursor: pointer;
`

const DisplayStyled = styled.p`
  width: 12.5rem;
  background-color: gray; 
  margin: 1rem auto;
  padding: 1rem;
  box-sizing: border-box;
`

export {KeyPad, KeyContainer, Key, PadContainer, PadButtonContainer, ControlsContainer, DisplayStyled, SwitchStyled}