import { useEffect, useState, useContext } from 'react';
import { faker } from '@faker-js/faker/locale/pt_BR';
import AppContext from "../AppContext";

import styles from '../styles/resultado.module.css'

import { faL, faCheck, faCancel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const vacinas = [
    {
        primeiraDose: true,
        segundaDose: true,
        terceiraDose: true
    },
    {
        primeiraDose: true,
        segundaDose: true,
        terceiraDose: false
    },
    {
        primeiraDose: true,
        segundaDose: false,
        terceiraDose: false
    },
    {
        primeiraDose: false,
        segundaDose: false,
        terceiraDose: false
    }
]


function Vacina({ doses }) {
    const iconCheck = <FontAwesomeIcon icon={faCheck} className={styles.iconCheck} />
    const iconCancel = <FontAwesomeIcon icon={faCancel} className={styles.iconCancel} />

    return (
        <>
        <div className={styles.boxVacina}>
            <div className={styles.vacinaIcone}>{doses.primeiraDose ? iconCheck : iconCancel}</div>
            <div className={styles.vacinaDose}>Primeira Dose</div>
        </div>
        |
        <div className={styles.boxVacina}>
            <div className={styles.vacinaIcone}>{doses.segundaDose ? iconCheck : iconCancel}</div>
            <div className={styles.vacinaDose}>Segunda Dose</div>
        </div>
        |
        <div className={styles.boxVacina}>
            <div className={styles.vacinaIcone}>{doses.terceiraDose ? iconCheck : iconCancel}</div>
            <div className={styles.vacinaDose}>Terceira Dose</div>
        </div>
        </>
    )
}

export default function Resultado() {
    const [nome, setNome] = useState("")
    const [doses, setDoses] = useState({})

    const { showResultado, setShowResultado } = useContext(AppContext)

    useEffect(() => {
        const nomeCompleto = `${faker.name.firstName()} ${faker.name.middleName()} ${faker.name.lastName()}`
        setNome(nomeCompleto)
        setDoses(vacinas[Math.floor(Math.random() * 3)])
    }, [])

    function handleFechar() {
        setShowResultado(false)
    }

    return (
        <div className={styles.resultado}>
            <div className={styles.boxResultado}>
                <div className={styles.image}>
                    <img src="/assets/images/carteirinha.png" alt="" />
                </div>
                <div className={styles.nome}>
                    <span>{nome}</span>
                </div>
                <div className={styles.vacinas}>
                    <Vacina doses={doses} />
                </div>
                <button onClick={handleFechar} className={styles.fechar}>Fechar</button>
            </div>
        </div>
    )
}