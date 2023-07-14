import React from 'react'
import styles from './About.module.css'

const Li = ({ href, icon, children }) => {
    return (
        <li className={styles.li}>
            <a href={href} target='_black'><span className={styles.icon}>{icon}</span>{children}</a>
        </li>
    )
}

export default Li