import { createContext } from "react";

export const RotasContext = createContext([
    {
        to: "/",
        nome: "Criminosos"
    },
    {
        to: "/tatuagem",
        nome: "Tatuagens"
    },
    {
        to: "/acusacao",
        nome: "Acusações"
    },
]);