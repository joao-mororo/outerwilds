import React from 'react'
import Logo from '../../assets/logo-annapurna.webp'
import { BsTwitter, BsFacebook, BsInstagram, BsDiscord, BsYoutube, BsTwitch } from 'react-icons/bs'
import styles from './Footer.module.css'

const Link = ({ href, children, style }) => (
    <a className={styles.link} style={style} target='_blank' rel='noreferrer' href={href}>{children}</a>
)

const Footer = () => {
    return (
        <footer className={styles.section}>
            <div className={styles.wrapper} style={{ alignItems: 'center' }}>
                <Link style={{fontSize: 'auto', textAlign: 'center'}} href="https://annapurnainteractive.com/en">
                    <img src={Logo} alt="annapurna" className={styles.image} />
                </Link>

                <div className={styles.socials}>
                    <Link href="http://twitter.com/a_i"><BsTwitter /></Link>
                    <Link href="https://www.facebook.com/AnnapurnaInteractive/"><BsFacebook /></Link>
                    <Link href="https://www.instagram.com/annapurnainteractive/"><BsInstagram /></Link>
                    <Link href="https://discord.com/invite/annapurnainteractive"><BsDiscord /></Link>
                    <Link href="https://www.youtube.com/annapurnainteractive"><BsYoutube /></Link>
                    <Link href="https://www.twitch.tv/annapurnainteractive"><BsTwitch /></Link>
                </div>
            </div>
            <div className={styles.wrapper}>
                <h2>Developer</h2>
                <h2><Link href="https://www.mobiusdigitalgames.com/">Mobius Games</Link></h2>
            </div>
            <div className={styles.wrapper}>
                <Link href="https://annapurnapics.com/">Annapurna Pictures</Link>
                <Link href="https://annapurnainteractive.com/en/legal/privacy-policy">Privacy Policy</Link>
                <Link href="https://annapurnainteractive.com/en/legal/apple-arcade-privacy-policy">Apple Arcade Privacy Policy</Link>
            </div>
        </footer>
    )
}

export default Footer