import React, { useContext } from 'react';
import MainContext from './MainContext';


const BtnSumit = () => {

    const {state} = useContext(MainContext);

    return(
    <div>
        <button className={state.darkMode ? 'btn-submit btn-submit-light' : 'btn-submit btn-submit-dark'}>TELL ME</button>
    </div>
)};

export default BtnSumit;