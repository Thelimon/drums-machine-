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
  width: 660px;
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


export {KeyPad, KeyContainer, Key, PadContainer}