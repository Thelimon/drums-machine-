import {useState, useEffect} from 'react';

export const UseBankOne = (url) =>{

    const [bankOne, setbankOne] = useState({
        dataBankOne: [],
        error: null
    });

    useEffect(() => {
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            setbankOne({
                error: null,
                dataBankOne: data
            });
        });
    }, [url]);
    return bankOne;
}