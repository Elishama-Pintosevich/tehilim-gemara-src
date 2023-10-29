import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Names.module.css'

const Note = (props) => {
  return (
    <div onClick={props.setLink.bind(this, false)} className={styles.bgLink}>
        <div className={styles.bgNote}>
            <a className={styles.link} target={'_blank'} href={`https://silatehilim.com/teilim/теилим-перек-${props.index+1}/`}>Перейти к Псалму</a>
            <div onClick={props.setLink.bind(this, false)} className={styles.noteLink} >Вернуться назад</div>
        </div>
    </div>
  )
}

export default Note