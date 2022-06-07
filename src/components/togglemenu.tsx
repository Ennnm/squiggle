import { h } from 'preact'
import styles from '../styles.css'
import { ScreenMode } from '../lib/preferences';
import { FontTypes } from '../lib/fonts';
import { useState } from 'preact/hooks'
import React from 'react';

function togglemenu({screenMode, setScreenMode, color, setColor, fontType, setFontType}) {
  const [coreColor, setCoreColor] = useState('#88e0af');

  const selectDarkMode = () => {
    setScreenMode(ScreenMode.dark)
    console.log("selected dark screen mode")
  }

  const selectLightMode = () => {
    setScreenMode(ScreenMode.light)
    console.log("selected light screen mode")
  }

  const changeColor = (e: any) => {
    setCoreColor(e.target.value)
    setColor(e.target.value)
    console.log(`changed color to ${e.target.value}`)
  }

  const setSanSerifFont = () => {
    setFontType(FontTypes.sanSerif)
    console.log("set font to sans serif")
  }

  const setSerifFont = () => {
    setFontType(FontTypes.serif)
    console.log("set font to serif")
  }

  const setMonoFont = () => {
    setFontType(FontTypes.mono)
    console.log("set font to mono")
  }

  const selected = {
    border: '1.5px solid black'
  }

  return (
    <div className={styles['menu-container']}>
      <div className={styles['menu-row']}>
        <span>Mode</span>
        <div className={styles['button-container']}>
          <button className={`${styles['square-button']} ${styles.black}`} style={screenMode === ScreenMode.dark && selected} onClick={selectDarkMode}>D</button>
          <button className={`${styles['square-button']} ${styles.white}`} style={screenMode === ScreenMode.light && selected} onClick={selectLightMode}>W</button>
        </div>
      </div>
      <div className={styles['menu-row']}>
        <span>Core Color</span>
        <div className={styles['button-container']}>
          <button style={{backgroundColor: coreColor, border: '1.5px solid black'}} className={`${styles['square-button']}`} />
          <input
            type="text"
            value={coreColor}
            className={styles.input}
            onChange={changeColor}
          />
        </div>
      </div>
      <div className={styles['menu-row']}>
        <span>Font Type</span>
        <div className={styles['button-container']}>
          <button className={`${styles['square-button']} ${styles['light-grey']} ${styles.sansserif}`} style={fontType === FontTypes.sanSerif && selected} onClick={setSanSerifFont}>A</button>
          <button className={`${styles['square-button']} ${styles['light-grey']} ${styles.serif}`} style={fontType === FontTypes.serif && selected} onClick={setSerifFont}>A</button>
          <button className={`${styles['square-button']} ${styles['light-grey']} ${styles.mono}`} style={fontType === FontTypes.mono && selected} onClick={setMonoFont}>A</button>
        </div>
      </div>
    </div>
  )
}

export default togglemenu