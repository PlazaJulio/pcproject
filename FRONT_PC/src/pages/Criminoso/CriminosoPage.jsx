import { useState, useEffect, useContext } from "react";
import requestPost from "../../data/utils/requestPost";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import Menu from "../../ui/components/Menu/Menu";

export default function CriminosoPage() {
    const [criminosos, setCriminosos] = useState(null);
    const [pagina, setPagina] = useState(0);
    const { tokenReact } = useContext(TokenContext)
    const navigate = useNavigate()
    useEffect(() => async () => {
        try {
            const response = await requestPost("/criminoso/filtro", null, { "limite": 8 }, tokenReact);
            const responseData = response.data;
            setCriminosos(responseData);
        } catch (error) {
            setCriminosos({});
            if(error.response.status == 401){
                navigate("/login")
            }
        }
    }, [pagina]);

    return (
        <div className="columns">
            <Menu/>
            <div className="column">
                <p>Criminoso</p>
            </div>
        </div>
    );
}
