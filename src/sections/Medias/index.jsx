import React from 'react'
import Section from '../../components/Section'
import YoutubeEmbed from '../../components/YoutubeEmbed'
import HomeIMG from '../../assets/bg-home.jpg'
import Skeleton from '../../assets/medias/skeleton.jpg'
import Translator from '../../assets/medias/translator.jpg'
import Shipinterior from '../../assets/medias/shipinterior.jpg'
import Moon from '../../assets/medias/moon.jpg'

import styles from './Medias.module.css'

const Medias = () => {
    return (
        <Section flexDirection='row'>
            <div className={styles.wrapper}>
                {/* <YoutubeEmbed embedId='2EnIpUkQ__M' /> */}
                <img className={styles.video} src={HomeIMG} alt="" />
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