import React from "react";
import Styled from "styled-components";

/* tipo */
/* integral * /
*/

const StyledMassa = Styled.div`
color: yellow;
`;
/* classe yellow */
const Massa = (props) => {
    const { integral } = props
    return (
        <StyledMassa> Massa {integral ? "integral" : ""} </StyledMassa>
    );

};

export default Massa;