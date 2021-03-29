import React from "react";
import { hot } from "react-hot-loader";
import Prato  from "../components/prato.jsx"

const App = () => {
    return(
        <>
            <Prato  tipo="Salada" acompanhamento="salada" prato="ibérica" sumo="kiwi"></Prato>
            <Prato  tipo="Carne" peso="150" prato="Novilho" acompanhamento="arroz" sumo="morango"></Prato>
            <Prato  tipo="Peixe" peso="1000" prato="Camarão" acompanhamento="massa" sumo="ananas"></Prato>
        </>
    )
};


export default hot(module)(App);
