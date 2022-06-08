import { h } from 'preact'
import styles from '../styles.css'
import { screenModeColor } from '../lib/preferences';
import { FontTypes } from '../lib/fonts';
import { useState } from 'preact/hooks'
import React from 'react';
import uploadFileGraphic from '../assets/uploadFileGraphic.png'


function FileUploadGraphic() {
  return (
      <div className={styles['file-upload-graphic']}>
          <img src={uploadFileGraphic} className={styles['graphics']} ></img>
          <p className={styles['openSans']}>Max size: 30mb</p>
      </div>
  )
}

export default FileUploadGraphic