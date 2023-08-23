import { useState, useEffect, useContext } from "react";
import requestPost from "../../data/utils/requestPost";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";

export default function CriminosoPage() {
    const [criminosos, setCriminosos] = useState([]);
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
            navigate("/login")
        }
    }, [pagina]);

    return (
        <div>
            <h1>Criminoso</h1>
        </div>
    );
}
