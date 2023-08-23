import Rotas from "./pages/Rotas"
import { TokenContext } from "./data/context/TokenContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function App() {
  const [tokenReact, setTokenReact] = useState("");
  return (
    <TokenContext.Provider value={{tokenReact, setTokenReact}}>
      <Rotas/>
    </TokenContext.Provider>
  )
}

export default App

