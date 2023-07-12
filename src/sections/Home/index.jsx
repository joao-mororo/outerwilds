import React from 'react'
import Section from '../../components/Section'
import Logo from '../../assets/logo.png'
import Button from '../../components/Button'
import { BsSteam } from 'react-icons/bs'
import styles from './Home.module.css'

const Home = () => {
    return (
        <Section className={styles.section} padding='0' margin='0' height='100vh' alignItems='flex-start'>
            <div className={styles.card}>
                <img className={styles.image} src={Logo} alt="" />
                <Button>JOGUE AGORA <BsSteam /></Button>
            </div>
        </Section>
    )
}

export default Home