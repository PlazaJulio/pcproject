import { useState, useEffect, useContext } from "react";
import requestGet from "../../data/utils/requestGet";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";

export default function AcusacaoPage() {
    const { tokenReact } = useContext(TokenContext)
    const navigate = useNavigate()
    useEffect(() => async () => {
        try {
            const response = await requestGet("/acusacao", { "limite": 10 }, tokenReact);
            const responseData = response.data;
        } catch (error) {
            navigate("/login")
        }
    }, []);

    return (
        <div>
            <h1>Acusacao</h1>
        </div>
    );
}
