import { useState, useEffect } from "react";
import requestPost from "../../data/utils/requestPost";
import { useSelector } from "react-redux";


export default function CriminosoPage() {
    const [criminosos, setCriminosos] = useState([]);
    const [pagina, setPagina] = useState(0);
    const token = useSelector((state) => state.auth.jwtToken);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await requestPost("/criminoso/filtro", null, {"limite": 8}, "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXV0b3JpemFjYW8vbG9naW4iLCJpYXQiOjE2OTI0NTE3MjIsImV4cCI6MTY5MjQ1NTMyMiwibmJmIjoxNjkyNDUxNzIyLCJqdGkiOiJpQ1A4SDVyT2xZZjJOZERQIiwic3ViIjoiMSIsInBydiI6IjU4NzA4NjNkNGE2MmQ3OTE0NDNmYWY5MzZmYzM2ODAzMWQxMTBjNGYifQ.7K8olq80tjCz6C_98XuzoXyxP-LfmG7GTz2roOH-niM");
                const responseData = response.data; 
                setCriminosos(responseData);
                console.log(token)
            } catch (error) {
                setCriminosos({});
                console.log(token)
            }
        }
        fetchData();
    }, [pagina]);
      
    return (
        <div>
            <h1>Criminoso</h1>
        </div>
    );
}
