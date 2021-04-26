import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Salada from "./salada.jsx";
import Massa from "./massa.jsx";
import Arroz from "./arroz.jsx";
import Carne from "./carne.jsx";
import Peixe from "./peixe.jsx";
import Sumo from "./sumo.jsx";
import Agua from "./agua.jsx";
import Vegan from "./vegan.jsx";
import Sobremesa from "./sobremesa.jsx"


const StyledPrato = Styled.div`
  margin-bottom: 60px;
`;


const Prato = (props) => {

    const { diaSemana, tipoPrato, tipoBebida, tipoAcompanhamento } = props

    const [sideDish, setSideDish] = useState(null)
    const [sideDishType, setSideDishType] = useState(null)
    const [isWater, setIsWater] = useState(null)
    const [isPedras, setIsPedras] = useState(null)

    console.log(tipoPrato)

    useEffect(() => {
        setSideDish(tipoAcompanhamento.split(" ")[0])
        setSideDishType(tipoAcompanhamento.split(" ")[1])
    }, [tipoAcompanhamento])

    useEffect(() => {
        tipoBebida.includes("agua") ? setIsWater(true) : setIsWater(false)
        tipoBebida.includes('pedras') ? setIsPedras(true) : setIsPedras(false)
    }), [tipoBebida]

    return (
        <StyledPrato>
            <div> Tipo: {tipoPrato} </div>
            <div> Acompanhamento: {(sideDish === "Salada" && <Salada tipo={sideDishType} ></Salada>) || sideDish === "Arroz" && <Arroz></Arroz> || sideDish === "Massa" && <Massa integral={sideDishType === "Integral"}></Massa>}</div>
            <div> Bebida: {(isWater && <Agua tamanho={'50cl'} gas={isPedras}></Agua>) || <Sumo tipo={tipoBebida}></Sumo>}</div>
            <div> Prato: {(tipoPrato === "Vegan" && <Vegan diaSemana={diaSemana} peso={props.peso}></Vegan>) || (tipoPrato === "Carne" && <Carne diaSemana={diaSemana} peso={props.peso}></Carne>) || (tipoPrato === "Peixe" && <Peixe diaSemana={diaSemana} peso={props.peso}></Peixe>)}</div>
            <div> Sobremesa: <Sobremesa diaSemana={diaSemana} /> </div>
        </StyledPrato>
    );

};





export default Prato;