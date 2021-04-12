import React from "react";
import Styled from "styled-components";
import menuplates from "../utils/menuplates.JSON"

const StyledVegan = Styled.div`
    color: green;
`;


const Vegan = (props) => {
    const { diaSemana } = props
    return (
        <StyledVegan> {menuplates[diaSemana].vegan}</StyledVegan>
    )
};

export default Vegan;