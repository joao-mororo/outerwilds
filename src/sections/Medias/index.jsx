import React from 'react'
import Section from '../../components/Section'
import HomeIMG from '../../assets/bg-home.jpg'
import Skeleton from '../../assets/medias/skeleton.jpg'
import Translator from '../../assets/medias/translator.jpg'
import Shipinterior from '../../assets/medias/shipinterior.jpg'
import Moon from '../../assets/medias/moon.jpg'

import Trailler from '../../assets/Automaquiagem.mp4'

import { BsPlayFill } from 'react-icons/bs'

import styles from './Medias.module.css'

const Medias = () => {
    return (
        <Section flexDirection='row'>
            <div className={styles.wrapper}>
                <a href="https://youtu.be/2EnIpUkQ__M" target='_blank' rel='noreffer' style={{ position: 'relative' }}>
                    <img className={styles.video} src={HomeIMG} alt="" />
                    {/* <BsPlayFill /> */}
                </a>
                {/* <video 
                    className={styles.video} 
                    src={Trailler} 
                    controls
                    autoPlay
                    muted
                    controlList="nodownload"
                /> */}
            </div>
            <div className={styles.wrapper}>
                <img className={styles.image} src={Skeleton} alt="" />
                <img className={styles.image} src={Translator} alt="" />
                <img className={styles.image} src={Shipinterior} alt="" />
                <img className={styles.image} src={Moon} alt="" />
            </div>
        </Section>
    )
}

export default Medias