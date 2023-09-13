import { useState, useEffect, useContext } from "react";
import requestPost from "../../data/utils/requestPost";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import CardCriminoso from "../../ui/components/CardCriminoso/CardCriminoso";
import Paginacao from "../../ui/components/Paginacao/Paginacao";
import Menu from "../../ui/components/Menu/Menu";
import Loading from "../../ui/components/Loading/Loading";

export default function CriminosoPage() {
    const [criminosos, setCriminosos] = useState(null);
    const [limiteDeValoresPorRequisicao, setLimiteDeValoresPorRequisicao] = useState(8)
    const [offset, setOffset] = useState(0);
    const { tokenReact } = useContext(TokenContext)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await requestPost("/criminoso/filtro", null, { "limite": limiteDeValoresPorRequisicao, "deslocar": offset }, tokenReact);
                const responseData = response.data;
                setCriminosos(responseData);
                setLoading(false);
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
            {
                loading &&
                <Loading />
            }

            <div className="column">
                <h1> Criminosos: </h1>
                <div className="columns is-multiline">
                    {
                        criminosos &&
                        criminosos.resultado.map((criminoso) => {
                            return <div className="column is-one-quarter"><CardCriminoso nomeCriminoso={criminoso.nome} dataNasc={criminoso.data_de_nascimento} imagem="" /></div>
                        })
                    }
                </div>
                {
                    criminosos &&
                    <Paginacao count={criminosos.numero_de_dados_totais} limit={limiteDeValoresPorRequisicao} alterOffset={setOffset} />
                }
            </div>
        </div>
    );
}
