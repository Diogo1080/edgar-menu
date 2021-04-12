import React from "react";
import Styled from "styled-components";
import menuplates from "../utils/menuplates.JSON";

const StyledCarne = Styled.div`
    color: brown;
`;


const Carne = (props) => {
    const { diaSemana } = props
    return (
        <StyledCarne>{menuplates[diaSemana].carne}</StyledCarne>
    );

};

export default Carne;