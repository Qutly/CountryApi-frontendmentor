import React, { useEffect } from 'react';
import CountrySelect from './pages/CountrySelect';
import CountryDescription from './pages/CountryDescription';
import useTrackCountries from './hooks/useTrackCountries';
import useTrackTheme from './hooks/useTrackTheme';
import Navigation from './components/Navigation';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/Themes';
import { lightTheme } from './styles/Themes';
import './App.css';
import GlobalStyle from './styles/globalStyles';


const App = () => {

  const {
    index,
    country,
    goBack,
    goForward
} = useTrackCountries()

  const {
    mode,
    changeTheme
  } = useTrackTheme()

  useEffect(() => {
    const allElements = document.querySelectorAll("*");
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.transition = "all .3s";
    }
  },[index])
  
  return (
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
            <Navigation mode={mode} changeTheme={changeTheme}/>
            {index === 0 && (
              <div className="content">
                <CountrySelect goForward={goForward}/>
              </div> 
            )}
            <GlobalStyle>
            </GlobalStyle> 
            {index === 1 && (
              <div className="content-2">
                <CountryDescription country={country} goBack={goBack} />
              </div> 
            )} 
      </ThemeProvider> 
    )
  }

export default App
