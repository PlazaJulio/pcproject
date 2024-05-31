import { useState, useContext } from "react"
import Input from "../../partials/Input"
import Button from "../../partials/Button"
import requestPost from "../../../data/utils/requestPost";
import { TokenContext } from "../../../data/context/TokenContext";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import PopupGenerico from "../PopupGenerico/PopupGenerico";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function FormLogin(){
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const { setTokenReact }= useContext(TokenContext);

    const navigate = useNavigate()
     
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try{   
            const resultado = await requestPost("/autorizacao/login", {"usuario": usuario, "password": senha});
            setTokenReact(resultado.data["access_token"]);
            navigate("/")
        }catch(Exception){
            setLoading(false);
            setShowErrorPopup(true);
        }
    }
    
    return <div className="grid sm:grid-cols-2 gap-8 md:w-1/2">        
        <figure className="">
            <img width="256" height="331" className="w-64 h-[331px]" src="src/assets/Images/Logo.png" alt="Polícia Civil - SP" title="Polícia Civil - SP"/>
        </figure>
        <form 
            action="/"
            method="POST"
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4 w-full justify-center"
        >
            <Input placeholder="usuario" type="text" valor={usuario} onChange={(event)=>setUsuario(event.target.value)} required={true}/>
            <Input placeholder="senha" type="password" valor={senha} onChange={(event)=>setSenha(event.target.value)} required={true}/>
            <Button type="submit" disabled={loading?true:false}>Entrar</Button>
        </form>
        {
            loading &&
            <Loading />
        }
        {
            showErrorPopup &&
            <PopupGenerico
                color="red"
                setVariavelDeEstado={setShowErrorPopup}
            >
                <h3 className="text-lg font-semibold text-red-800">Usuário não autorizado!</h3>
                <p className="text-sm text-red-700">Algo deu errado! Tente novamente</p>
            </PopupGenerico>
        }
    </div>
}