import React from "react";
import menuplates from "../utils/menuplates.JSON"

const Sobremesa = (props) => {
    const { diaSemana } = props
    return (
        <>
            <div>{menuplates[diaSemana]["sobremesa"]}</div>
        </>
    );

};

export default Sobremesa;