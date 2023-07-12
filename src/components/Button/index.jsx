import React from 'react'
import styles from './Button.module.css'

const Button = ({ className, onClick, href, as='button', children }) => {
    const As = as
    return (
        <As 
            className={`${className} ${styles.button}`}
            onClick={onClick}
            href={href}
            target="_blank"
        >
            {children}
        </As>
    )
}

export default Button