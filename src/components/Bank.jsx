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
  PadControlContainer
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
    display : true,
    name: "",
  });

const {display, name  } = soundHook;

const handleClickSound = (event, id,  idSound) =>{
  setsoundHook({name:id});
  const sound = document.getElementById(idSound);
  sound.currentTime = 0;
  sound.play();
}

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
        <p>Power</p>
        <PadButtonContainer>
          <SwitchStyled />
        </PadButtonContainer>
        <DisplayStyled> {`${name}`} </DisplayStyled>
        <PadButtonContainer>
          <SwitchStyled />
        </PadButtonContainer>
      </ControlsContainer>
    </PadControlContainer>
  );
};

export default Bank;
