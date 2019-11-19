import React, { useState }from 'react';
import FormInput from './components/FormInput';
import BtnDarkMode from './components/BtnDarkMode';
import MainContext from './components/MainContext';
import MainSection from './components/MainSection';

function App() {

  const [state, setState] = useState({
    darkMode: true,
    rain: '',
    show: false,
    rainProbability: 0,
  });

  const changeDark = (state) => 
  {
    console.log('click');
    setState({
      ...state,
      darkMode: !state.darkMode
    });
  };

  const updateRain = (state, data) => {
    if(data > 0.5) {
      setState({
        ...state,
        show: true,
        rain: true,
        rainProbability: data});
    } else {
    setState({
      ...state,
      show: true,
      rain: false,
      rainProbability: data});
    }
  };

  const value = {
    state, changeDark, updateRain
  };

  return (
    <div className="App">
        <MainContext.Provider value={value}>
          <BtnDarkMode/>
          <MainSection/>
          <FormInput/>
        </MainContext.Provider>
    </div>
  );
}

export default App;
