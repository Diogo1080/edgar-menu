import React from "react";
import Styled from "styled-components";

const StyledFeijao = Styled.span`
    color: ${props => props.marca === "Cigala" ? "green" : "orange"};
`;

const Feijao = (props) => {
    return (
        <div>Feijao do tipo <StyledFeijao> {props.tipo} </StyledFeijao></div>
    );

};

export default Feijao;