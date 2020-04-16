// Toggle.js
import React from 'react'
import { func, string } from 'prop-types';

import {ToggleContainer} from "./toggle.styled"
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import  MoonIcon  from './icon/moon.svg';
import SunIcon  from './icon/sun.svg';

const Toggle = ({ theme,toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    
    <ToggleContainer lightTheme= {isLight} onClick={toggleTheme}>
       <MoonIcon />
        <SunIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;