import { BrowserRouter, Route, Routes} from "react-router-dom"
import TatuagemPage from "./Tatuagem/TatuagemPage"
import CriminosoPage from "./Criminoso/CriminosoPage"
import AcusacaoPage from "./Acusacao/AcusacaoPage"
import LoginPage from "./Login/LoginPage"

export default function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<CriminosoPage/>}/>
            <Route path="/tatuagem" element={<TatuagemPage/>}/>
            <Route path="/acusacao" element={<AcusacaoPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </BrowserRouter>
}