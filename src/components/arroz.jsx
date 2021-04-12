import React from "react";
import styled from "styled-components";
/* marca cigala green */
/* todas as outras laranja */

const StyledArroz = styled.span`
color: ${props => props.marca === "Cigala" ? "green" : "orange"};
`;


const Arroz = (props) => {
    return (
        <div>Arroz<b>{props.marca}</b> do tipo <StyledArroz> {props.tipo} </StyledArroz></div>
    );

};

export default Arroz;