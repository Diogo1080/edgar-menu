import React from "react";
import Styled from "styled-components";
import menuplates from "../utils/menuplates.JSON"


const StyledPeixe = Styled.div`
color: blue;
`;

const Peixe = (props) => {
    const { diaSemana } = props
    return (

        <StyledPeixe>{menuplates[diaSemana].peixe} </StyledPeixe>
    );

};

export default Peixe;