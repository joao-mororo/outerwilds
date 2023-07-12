import React from 'react'
import Section from '../../components/Section'
import P from './P'
import styles from './Requirements.module.css'

const Requirements = () => {
  return (
    <Section flexDirection='row' alignItems='flex-start'>
        <div className={styles.wrapper}>
            <h1>Mínimo</h1>
            <P>Requer um processador e sistema operacional de 64 bits</P>
            <P label="SO:">Windows 7</P>
            <P label="Processador:">Intel Core i5-2300 | AMD FX-4350</P>
            <P label="Memória:">6 GB de RAM</P>
            <P label="Placa de vídeo:">Nvidia GeForce GTX 660, 2 GB | AMD Radeon HD 7870, 2 GB</P>
            <P label="Armazenamento:">8 GB de espaço disponível</P>
            <P label="Outras observações:">Gamepad or Controller Recommended (Xbox and PS4 Natively Supported)</P>
        </div>
        <div className={styles.wrapper}>
            <h1>Recomendado</h1>
            <P>Requer um processador e sistema operacional de 64 bits</P>
            <P label="SO:">Windows 11</P>
            <P label="Processador:">Intel Core i5-8400 | AMD Ryzen 5 2600X</P>
            <P label="Memória:">8 GB de RAM</P>
            <P label="Placa de vídeo:">Nvidia GeForce GTX 1060 | AMD Radeon RX 580</P>
            <P label="Armazenamento:">8 GB de espaço disponível</P>
            <P label="Outras observações:">Gamepad or Controller Recommended (Xbox and PS4 Natively Supported)</P>
        </div>
    </Section>
  )
}

export default Requirements