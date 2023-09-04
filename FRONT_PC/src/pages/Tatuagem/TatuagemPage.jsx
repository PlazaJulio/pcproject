import { useState, useEffect, useContext } from "react";
import requestGet from "../../data/utils/requestGet";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import Menu from "../../ui/components/Menu/Menu";
import TableTatuagem from "../../ui/components/TableTatuagem/TableTatuagem";
import Paginacao from "../../ui/components/Paginacao/Paginacao";
import ModalGenerico from "../../ui/components/ModalGenerico/ModalGenerico";
import Loading from "../../ui/components/Loading/Loading";
import PopupGenerico from "../../ui/components/PopupGenerico/PopupGenerico";

export default function TatuagemPage() {
    const [tatuagens, setTatuagens] = useState(null);
    const { tokenReact } = useContext(TokenContext)
    const [limiteDeValoresPorRequisicao, setLimiteDeValoresPorRequisicao] = useState(6);
    const [offset, setOffset] = useState(0);
    const [atualizar, setAtualizar] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await requestGet("/tipo-de-tatuagem", { "limite": limiteDeValoresPorRequisicao, "deslocar": offset }, tokenReact);
                const responseData = response.data;
                setTatuagens(responseData);
                setLoading(false);
            } catch (error) {
                if (error.response.status == 401) {
                    navigate("/login")
                }
            }
        }
        fetchData();
    }, [offset, atualizar]);

    return (
        <div className="columns">
            {
                loading &&
                <Loading />
            }
            <Menu />
            <div className="column">
                {
                    tatuagens &&
                    <>
                        <TableTatuagem valores={tatuagens.resultado} countPagination={tatuagens.numero_de_dados_totais} limitPagination={limiteDeValoresPorRequisicao} alterOffsetPagination={setOffset} setAltualizarTabela={setAtualizar} />
                    </>
                }
            </div>
        </div>
    );
}
