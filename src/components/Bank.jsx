import React, { useState } from "react";
import { UseBankOne } from "../hooks/UseBankOne";
import { UseBankTwo } from "../hooks/UseBankTwo";
import {
  ControlsContainer,
  Key,
  KeyContainer,
  PadButtonContainer,
  DisplayStyled,
  SwitchStyled,
  PadControlContainer,
  MainTitle,
} from "../styles/KeypadStyled";

const Bank = () => {
  const keysBankOne = UseBankOne(
    "https://data-caja-ritmo.herokuapp.com/bankOne"
  );

  const keysBankTwo = UseBankTwo(
    "https://data-caja-ritmo.herokuapp.com/bankTwo"
  );

  const { dataBankOne } = keysBankOne;

  const { dataBankTwo } = keysBankTwo;

  const [soundHook, setsoundHook] = useState({
    display: true,
    name: "",
    volume: 0.5,
    soundStyle: "dataBankOne"
  });

  const { display, name, volume, soundStyle } = soundHook;

  const handleClickSound = (event, id, idSound) => {
    setsoundHook((previousState) => {
      return { ...previousState, name: id };
    });
    const sound = document.getElementById(idSound);
    sound.currentTime = 0;
    sound.play();
  };

  const changeVolume = (e) => {
    setsoundHook((previousState) => {
      return {
        ...previousState,
        volume: Number(e.target.value),
        name: e.target.value,
      };
    });
  };

  const changePowerState = (e) => {
    e.preventDefault();
    if (display === true) {
      setsoundHook((previousState)=>{
        return {
          ...previousState, display: false, name: "" 
        }
      });
    }else{
      setsoundHook((previousState)=>{
        return {
          ...previousState, display: true, name: "" 
        }
      });
    }
  };

  const changeStyleSound = (e) =>{
    e.preventDefault();
    if(display === true){
    }
  }

  // const sounds = sounds1 ? dataBankOne : dataBankTwo;

  const powerButton =
    display === false
      ? {
          float: "left",
        }
      : {
          float: "right",
        };

  const soundStyleButton =
    display === "dataBankOne"
      ? {
          float: "right",
        }
      : {
          float: "left",
        };

  return (
    <PadControlContainer>
      <KeyContainer>
        {dataBankOne.map((item) => {
          return (
            <Key
              key={item.id}
              id={item.id}
              onClick={(event) =>
                handleClickSound(event, item.id, item.keyTrigger)
              }
            >
              <audio id={item.keyTrigger} src={item.url} />
              {item.keyTrigger}
            </Key>
          );
        })}
      </KeyContainer>

      <ControlsContainer>
        <MainTitle>Power</MainTitle>
        <PadButtonContainer>
          <SwitchStyled style={powerButton} onClick={changePowerState} />
        </PadButtonContainer>

        <input
          type="range"
          step="0.01"
          min="0"
          max="1"
          value={`${volume}`}
          onChange={changeVolume}
        />

        <DisplayStyled> {`${name}`} </DisplayStyled>
        <PadButtonContainer>
          <SwitchStyled style={soundStyleButton} onClick={changeStyleSound}/>
          {/* <input type="checkbox" value={sounds1} onChange={()=>{
            setsounds1(!sounds1)
          }}/> */}
        </PadButtonContainer>
      </ControlsContainer>
    </PadControlContainer>
  );
};

export default Bank;
