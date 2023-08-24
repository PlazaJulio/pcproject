import { useState, useEffect, useContext } from "react";
import requestGet from "../../data/utils/requestGet";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import Menu from "../../ui/components/Menu/Menu";

export default function TatuagemPage() {
    const { tokenReact } = useContext(TokenContext)
    const navigate = useNavigate()
    useEffect(() => async () => {
        try {
            const response = await requestGet("/tipo-de-tatuagem", { "limite": 10 }, tokenReact);
            const responseData = response.data;
        } catch (error) {
            navigate("/login")
        }
    }, []);

    return (
        <div>
            <Menu/>
            <h1>Tatuagem</h1>
        </div>
    );
}
