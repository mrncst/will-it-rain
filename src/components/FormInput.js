import React, { useContext } from 'react';
import BtnSubmit from './BtnSubmit.js';
import MainContext from './MainContext';
import axios from 'axios';

const FormInput = () => {

    const {state, updateRain} = useContext(MainContext);
    const apiKeyDarkSky = process.env.REACT_APP_API_KEY;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${apiKeyDarkSky}/${lat},${long}`;

            axios.get(url)
            .then(res => (res.data.currently.precipProbability))
            .then(data => (updateRain(state, data)))
            .then(data => console.log('sa'))
            .catch(err => (console.log(err)));
        });
    };

    return (
    <div className='prediction'>
        <form className='prediction-form' onSubmit={handleSubmit}>
            <BtnSubmit/>
            { (state.rain === true && state.show === true) ? <p id='result'>You better prepare your umbrella! There is a probability of {state.rainProbability} of raining today.</p>  : '' }
            { (state.rain === false && state.show === true) ? <p id='result'>No need to worry, there is only a probability {state.rainProbability} of raining today!</p>  : '' }
        </form>
    </div>

    )}
    
export default FormInput;

        