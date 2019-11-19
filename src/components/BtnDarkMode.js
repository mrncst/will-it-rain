import React, { useContext } from 'react';
import MainContext from './MainContext';

const BtnDarkMode = () => {

    const {state, changeDark} = useContext(MainContext);

    const handleDark = (e) => {
        changeDark(state);
        const root = document.getElementById('root');
        const headline = document.getElementById('headline');

        if(state.darkMode) {
            root.className = 'body-bg-dark';
            headline.className = 'headline headline-dark';
        } else {
            root.className = 'body-bg-light';
            headline.className = 'headline headline-light';
        }
        console.log(root);

        
    };

    return(
    <div className='dark-mode-header'>
        {state.darkMode ? <img className='icon icon-night' src={require('../images/night.svg')} onClick={() => (handleDark())} /> : <img className='icon icon-sun' src={require('../images/sun.svg')} onClick={() => (handleDark())}/>}
    </div>
)};


export default BtnDarkMode;
