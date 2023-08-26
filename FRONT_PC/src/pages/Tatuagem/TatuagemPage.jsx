import { useState, useEffect, useContext } from "react";
import requestGet from "../../data/utils/requestGet";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import Menu from "../../ui/components/Menu/Menu";
import TableTatuagem from "../../ui/components/TableTatuagem/TableTatuagem";

export default function TatuagemPage() {
    const [tatuagens, setTatuagens] = useState([]);
    const { tokenReact } = useContext(TokenContext)
    const navigate = useNavigate()

    useEffect(() => async () => {
        try {
            const response = await requestGet("/tipo-de-tatuagem", { "limite": 10 }, tokenReact);
            const responseData = response.data;
            setTatuagens(responseData);
        } catch (error) {
            if(error.response.status == 401){
                navigate("/login")
            }
        }
    }, []);

    return (
        <div className="columns">
            <Menu />
            <div className="column">
                <TableTatuagem valores={tatuagens.resultado}/>
            </div>
        </div>
    );
}
