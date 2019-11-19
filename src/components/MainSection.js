import React, { useContext } from 'react';
import MainContext from './MainContext';

const MainSection = () => {
    const {state} = useContext(MainContext);

    return(
    <div className='main-section'>
        {state.darkMode ? <img className='main-img' src={require('../images/weather-home-light.svg')}/> : <img className='main-img' src={require('../images/weather-home-dark.svg')}/>}
        <h1 id='headline' className='headline headline-light'>Will it rain today?</h1>
    </div>
    )};

export default MainSection;