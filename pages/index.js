import { useContext } from 'react'
import Head from 'next/head'
import AppContext from "../AppContext";
import styles from '../styles/Home.module.css'


// Componetes
import Logo from '../components/Logo'
import Consulta from '../components/Consulta'
import Resultado from '../components/Resultado';


export default function Home() {

  const { showResultado, setShowResultado } = useContext(AppContext)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Passaporte Caiçara - Projeto Integrador UNIVESP</title>
        <meta name="description" content="Projeto Ingrador UNIVESP" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      {showResultado ? <Resultado /> : (
        <main className={styles.main}>
          <Logo />
          <Consulta />          
        </main>
      )}
      
    </div>
  )
}
