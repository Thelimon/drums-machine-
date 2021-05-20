import {useState, useEffect} from 'react';

export const UseBankTwo = (url) =>{

    const [bankTwo, setbankTwo] = useState({
        dataBankTwo: [],
        error: null
    });

    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            setbankTwo({
                error: null,
                dataBankTwo: data
            })
        })
    }, [url])
    
    return bankTwo;
}