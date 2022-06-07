import { h } from 'preact'
import styles from '../styles.css'
import { ScreenMode } from '../lib/preferences';
import { FontTypes } from '../lib/fonts';
import { useState } from 'preact/hooks'
import React from 'react';

function display({screenMode, setScreenMode, color, setColor, fontType, setFontType}) {

  const buttonStyle = {
    backgroundColor: color
  }

  return (
    <div className={styles['display-container']} style={{fontFamily: fontType}}>
      <h2 style={{fontWeight: '800'}}>Share Your Best Ideas</h2>
      <span style={{width: '80%'}}>
        <p>Turning your creative ideas into working prototypes</p>
      </span>
      <button className={styles['display-button']} style={buttonStyle}>Let's squiggle</button>
    </div>
  )
}

export default display