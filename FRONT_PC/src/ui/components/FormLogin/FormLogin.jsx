import { useState } from "react"
import Input from "../../partials/Input"
import Button from "../../partials/Button"
import requestPost from "../../../data/utils/requestPost";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setJwtToken } from "../../../data/utils/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function FormLogin(){
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState(false); 
    const [logado, setLogado] = useState(false);
    
    const dispatch = useDispatch()


    return <div className="mt-6 column is-4 has-text-centered">
        <div className="field mb-6">        
            <figure className="image is-128x128 mx-auto">
                <img src="src/assets/Images/Logo.png"/>
            </figure>
        </div>
        <div className="field">
            <Input placeholder="usuario" type="text" valor={usuario} onChange={(event)=>setUsuario(event.target.value)}/>
        </div>
        <div className="field">
            <Input placeholder="senha" type="password" valor={senha} onChange={(event)=>setSenha(event.target.value)}/>
        </div>
        <div className="field">
            <Button onHandle={async ()=> {
                try{
                    setErro(false);
                    const resultado = await requestPost("/autorizacao/login", {"usuario": usuario, "password": senha})
                    dispatch(setJwtToken(resultado.data["access_token"]));
                    setLogado(true);
                }catch(Exception){
                    setErro(true);
                }
            }
            }>Entrar</Button>
        </div>
        {
            logado && <Navigate to="/"/>
        }
        {
            erro && <div className="field">
                <p>Senha ou usuario invalido</p>
            </div>
        }
        
    </div>
}