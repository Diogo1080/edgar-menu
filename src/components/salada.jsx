import React from "react";
import Styled from "styled-components";


//Salada Russa
//Salada Ibérica

const StyledSalada = Styled.span`
color: ${props => props.tipo === "Russa" ? "orange" : "green"};
`;


const Salada = (props) => {
    return (
        <div>
            <div>Salada - <StyledSalada> {props.tipo}</StyledSalada></div>
        </div>
    );

};

export default Salada;