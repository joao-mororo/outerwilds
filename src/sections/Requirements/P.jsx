import React from 'react'
import styles from './Requirements.module.css'

const P = ({children, label}) => {
  return (
    <p className={styles.p}>
        <span>{label}</span> {children}
    </p>
  )
}

export default P