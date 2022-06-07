import { h } from 'preact'
import styles from '../styles.css'
import { screenModeColor } from '../lib/preferences';
import { FontTypes } from '../lib/fonts';
import { useState } from 'preact/hooks'
import React from 'react';

function display({ screenMode, color, fontSet }: any) {
  const {backgroundColor, textColor, stroke} = screenMode

  const buttonStyle = {
    backgroundColor: color,
    color: textColor
  }
  return (
    <div className={styles['display-container']} style={{ fontFamily: fontSet["heading"], backgroundColor:backgroundColor, borderColor:stroke }}>
      <h2 style={{ fontFamily: fontSet["heading"]["family"], fontWeight: fontSet["heading"]["style"], color:textColor }}>Share Your Best Ideas</h2>
      <span style={{ width: '80%', color:textColor  }}>
        <p>Turning your creative ideas into working prototypes</p>
      </span>
      <button className={styles['display-button']} style={buttonStyle}>Let's squiggle</button>
    </div>
  )
}

export default display