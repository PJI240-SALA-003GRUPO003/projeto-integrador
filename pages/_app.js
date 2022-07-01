import { useState } from "react";
import AppContext from "../AppContext";

import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

function MyApp({ Component, pageProps }) {
  
  const [showResultado, setShowResultado] = useState(false)

  const context = {
    showResultado,
    setShowResultado
  }

  return (
    <AppContext.Provider value={ context }>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
