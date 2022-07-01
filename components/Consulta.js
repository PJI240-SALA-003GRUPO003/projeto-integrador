import { useState, useContext } from 'react'
import AppContext from "../AppContext";

import styles from '../styles/consulta.module.css'

// Bibliotecas auxiliares
import { cpf as verificaCPF } from 'cpf-cnpj-validator';
import { faL, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Componentes
import { cpfMask } from './mask'


export default function Consulta() {
    const [cpf, setCpf] = useState("")
    const [cpfValido, setCpfValido] = useState(true)

    const { showResultado, setShowResultado } = useContext(AppContext)

    function validateCPF(cpf) {
        if (!verificaCPF.isValid(cpf)) {
        return false
        } 
        return true
    }

    function handlechange(event) {
        setCpf(cpfMask(event.target.value))
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!validateCPF(cpf.replace(".", ""))) {
            console.log("Digite um CPF válido.")
        } else {
            setShowResultado(true)
            setCpf("")
        }
        
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
          <div className={styles.boxInput}>
              <FontAwesomeIcon icon={faSearch} className={styles.iconInput} />
              <input 
                maxLength='14'
                name='cpf'
                value={cpf}
                onChange={handlechange}
                type="text" 
                className={styles.cpfInput}
                placeholder="Digite um CPF" />
              <button className={styles.buttonInput} type="submit">Buscar</button>
          </div>
        </form>
        </>
    )
}