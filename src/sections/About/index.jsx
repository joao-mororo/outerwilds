import React from 'react'
import Section from '../../components/Section'
import P from './P'
import Li from './Li'
import ESRB from '../../assets/E10+.svg'
import { BsSteam, BsPlaystation, BsXbox, BsNintendoSwitch } from 'react-icons/bs'
import { SiEpicgames } from 'react-icons/si'

import styles from './About.module.css'

const About = () => {
    return (
        <Section id="about" className={styles.section} flexDirection='row' alignItems='flex-start'>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Outer Wilds</h1>
                <h3 className={styles.subtitle}>Desvende os mistérios do cosmos.</h3>
                <P>Outer Wilds é um mistério de mundo aberto premiado e aclamado pela crítica sobre um sistema solar preso em um loop temporal sem fim.</P>
                <P>Os planetas de Outer Wilds estão repletos de locais ocultos que mudam com o passar do tempo. Visite uma cidade subterrânea antes de ser engolida pela areia ou explore a superfície de um planeta enquanto ele desmorona sob seus pés. Cada segredo é guardado por ambientes perigosos e catástrofes naturais.</P>
                <P>Calce suas botas de caminhada, verifique seus níveis de oxigênio e prepare-se para se aventurar no espaço. Use uma variedade de dispositivos exclusivos para sondar seus arredores, rastrear sinais misteriosos, decifrar a antiga escrita alienígena e assar o marshmallow perfeito.</P>
                <div className={styles.infos}>
                    <div className={styles.rating}>
                        <img className={styles.rating_icon} src={ESRB} alt="" />
                        <p className={styles.rating_text}>Fantasia Violenta <br /> Referência de Álcool</p>
                    </div>
                    <div className={styles.released}>
                        <h2>Lançado</h2>
                        <h3>2019</h3>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <ul className={styles.ul}>
                    <Li icon={<BsSteam />} href="https://store.steampowered.com/app/753640?utm_source=aiwebsite&utm_campaign=sitevisit&utm_medium=web">Steam</Li>
                    <Li icon={<BsPlaystation />} href="https://store.playstation.com/en-us/product/UP2470-PPSA08101_00-OUTERWILDSSIEA00">PlayStation Store</Li>
                    <Li icon={<BsXbox />} href="https://www.microsoft.com/en-us/p/outer-wilds/c596fkdkmqn7">Xbox</Li>
                    <Li icon={<BsNintendoSwitch />} href="https://www.nintendo.com/games/detail/outer-wilds-switch/">Switch</Li>
                    <Li icon={<SiEpicgames />} href="https://www.epicgames.com/store/en-US/product/outerwilds/home">Epic Games Store</Li>
                </ul>
            </div>
        </Section>
    )
}

export default About