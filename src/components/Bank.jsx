import React, {useState} from 'react'
import { UseBankOne } from '../hooks/UseBankOne'
import { UseBankTwo } from '../hooks/UseBankTwo'
import {Key, KeyContainer} from "../styles/KeypadStyled";

const Bank = () => {

    const keysBankOne = UseBankOne("https://data-caja-ritmo.herokuapp.com/bankOne");
    const keysBankTwo = UseBankTwo("https://data-caja-ritmo.herokuapp.com/bankTwo");

    const {dataBankOne} = keysBankOne;
    const {dataBankTwo} = keysBankTwo;

    const [soundHook, setsoundHook] = useState({
        power : true,
        name: null,
    });

    const {power, display} = soundHook;
    
    return (
        <>
            <KeyContainer>
                {dataBankOne.map(key =>{
                    return (
                        <Key key={ key.id } id={ key.id } 
                            onClick={ (event) => this.handleClickSound(event, key.id, key.keyTrigger)}>
                                <audio id={ key.keyTrigger } src={ key.url } />
                                {key.keyTrigger}
                        </Key>
                    )
                })}
            </KeyContainer>
        </>
    )
}

export default Bank
