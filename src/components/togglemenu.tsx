import { h } from 'preact'
import styles from '../styles.css'
import { screenModeColor } from '../lib/preferences';
import { FontSets, FontTypes } from '../lib/fonts';
import { useState } from 'preact/hooks'
import React from 'react';

function togglemenu({screenMode, setScreenMode, color, setColor, fontSet, setFontSet}:any) {
  const [coreColor, setCoreColor] = useState('#88e0af');

  const selectDarkMode = () => {
    setScreenMode(screenModeColor.dark)
    console.log("selected dark screen mode")
  }

  const selectLightMode = () => {
    setScreenMode(screenModeColor.light)
    console.log("selected light screen mode")
  }

  const changeColor = (e: any) => {
    setCoreColor(e.target.value)
    setColor(e.target.value)
    console.log(`changed color to ${e.target.value}`)
  }

  const setSanSerifFont = () => {
    setFontSet(FontSets.sanSerif)
    console.log("set font to sans serif")
  }

  const setSerifFont = () => {
    setFontSet(FontSets.serif)
    console.log("set font to serif")
  }

  const setMonoFont = () => {
    setFontSet(FontSets.mono)
    console.log("set font to mono")
  }

  const selected = {
    border: '1.5px solid black'
  }
  const screenModeName = screenMode.name;
  const fontSetName = fontSet.name;
  return (
    <div className={styles['menu-container']}>
      <div className={styles['menu-row']}>
        <span>Mode</span>
        <div className={styles['button-container']}>
          <button className={`${styles['square-button']} ${styles.black}`} style={screenModeName === 'dark'  && selected} onClick={selectDarkMode}>D</button>
          <button className={`${styles['square-button']} ${styles.white}`} style={screenModeName === 'light' && selected} onClick={selectLightMode}>W</button>
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
          <button className={`${styles['square-button']} ${styles['light-grey']} ${styles.sansserif}`} style={fontSetName === "sanSerif" && selected} onClick={setSanSerifFont}>A</button>
          <button className={`${styles['square-button']} ${styles['light-grey']} ${styles.serif}`} style={fontSetName  === 'serif' && selected} onClick={setSerifFont}>A</button>
          <button className={`${styles['square-button']} ${styles['light-grey']} ${styles.mono}`} style={fontSetName  === 'ß' && selected} onClick={setMonoFont}>A</button>
        </div>
      </div>
    </div>
  )
}

export default togglemenu