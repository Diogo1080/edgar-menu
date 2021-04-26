import React, { useState, useEffect } from "react";
import Styled from "styled-components";


const StyledSumo = Styled.div`
    color: {color};
`;

const Sumo = (props) => {

    const { tipo } = props

    const [color, setColor] = useState(null)

    useEffect(() => {
        switch (tipo) {
            case 'kiwi': setColor('green')
            case 'ananas': setColor('yellow')
            case 'morango': setColor('red')
            case 'laranja': setColor('orange')
            default: setColor('black')
        }
    }, [tipo])


    return <StyledSumo> Sumo de {props.tipo}</StyledSumo>

};

export default Sumo;