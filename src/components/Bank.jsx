import React from 'react'
import { UseBankOne } from '../hooks/UseBankOne'
import { UseBankTwo } from '../hooks/UseBankTwo'

const Bank = () => {

    const keysBankOne = UseBankOne("https://data-caja-ritmo.herokuapp.com/bankOne");
    const keysBankTwo = UseBankTwo("https://data-caja-ritmo.herokuapp.com/bankTwo");

    const {dataBankOne} = keysBankOne;
    const {dataBankTwo} = keysBankTwo;

    return (
        <>
            <main>
                {dataBankOne.map(key =>{
                    return (
                        <div className="test">
                            <audio className="clip" id={key.keyTrigger} src={key.url}/>
                            {key.keyTrigger}
                        </div>
                    )
                })}
            </main>
        </>
    )
}

export default Bank
