import React, { useEffect, useState } from 'react';
import sun from '../../images/sun.png'
import moon from '../../images/moon.png'

import style from './Theme.scss';

function Theme() {
    
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  
    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }
    
    useEffect(()=>{
    localStorage.setItem('theme', theme)
    const backgroundColor = `var(--background-color-${theme})`
    const color = `var(--color-${theme})`

    document.body.style.setProperty('--background-color', backgroundColor)
    document.body.style.setProperty('--color', color)
      }, [theme])

    return (  
        <button onClick={changeTheme} className="theme"><img src={theme === 'dark' ? sun : moon} alt="" /></button>
    );
}

export default Theme;