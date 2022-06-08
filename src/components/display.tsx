import { h } from 'preact'
import styles from '../styles.css'

function display({ screenMode, color, fontSet }: any) {
  const {backgroundColor, textColor, stroke} = screenMode

  const buttonStyle = {
    backgroundColor: color,
    color: textColor
  }
  return (
    <div className={styles['display-container']} style={{ fontFamily: fontSet["heading"], backgroundColor:backgroundColor, borderColor:stroke}}>
      <h2 style={{ fontFamily: fontSet["heading"]["family"], fontWeight: fontSet["heading"]["style"], color:textColor, fontSize:"16px", lineHeight:"180%" }}>Share Your Best Ideas</h2>
        <p style={{ width: '60%', color:textColor, fontSize:"8px", margin:"0px", lineHeight:"150%", marginBottom:"8px" }}>Turning your creative ideas into working prototypes</p>
      <button className={styles['display-button']} style={buttonStyle}>Let's squiggle</button>
    </div>
  )
}

export default display