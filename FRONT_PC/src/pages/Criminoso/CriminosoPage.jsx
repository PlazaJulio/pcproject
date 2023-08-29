import { useState, useEffect, useContext } from "react";
import requestPost from "../../data/utils/requestPost";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import Paginacao from "../../ui/components/Paginacao/Paginacao";
import Menu from "../../ui/components/Menu/Menu";

export default function CriminosoPage() {
    const [criminosos, setCriminosos] = useState(null);
    const [limiteDeValoresPorRequisicao, setLimiteDeValoresPorRequisicao] = useState(1)
    const [offset, setOffset] = useState(0);
    const { tokenReact } = useContext(TokenContext)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await requestPost("/criminoso/filtro", null, { "limite": limiteDeValoresPorRequisicao, "deslocar": offset }, tokenReact);
                const responseData = response.data;
                setCriminosos(responseData);
                console.log(responseData);
            } catch (error) {
                setCriminosos({});
                if (error.response && error.response.status === 401) {
                    navigate("/login");
                }
            }
        };

        fetchData();
    }, [offset, limiteDeValoresPorRequisicao, tokenReact, navigate]);


    return (
        <div className="columns">
            <Menu />
            <div className="column">
                <p>Criminoso</p>
                {
                    criminosos &&
                    <Paginacao count={criminosos.numero_de_dados_totais} limit={limiteDeValoresPorRequisicao} alterOffset={setOffset} />
                }
                {
                    criminosos &&
                    criminosos.resultado.map((criminoso) => {
                        return <p>{criminoso.nome}</p>
                    })
                }
            </div>
        </div>
    );
}
