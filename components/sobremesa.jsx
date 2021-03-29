import React from "react";
import "../styles/main.less"

const sobremesas = ["mousse", "leite creme", "pudim", "bolo de chocolate", "rabanadas", "tarte de mirtilo", "tiramisu"];

const Sobremesa = (props) => {
    return (
        <div>{sobremesas[props.index]}</div>
    );

};

export default Sobremesa;