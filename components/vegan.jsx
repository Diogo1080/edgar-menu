import React from "react";
import "../styles/main.less"

const veganPlate = ["mousse", "leite creme", "pudim", "bolo de chocolate", "rabanadas", "tarte de mirtilo", "tiramisu"];

const Vegan = (props) => {
    return (
        <div className="green"> {props.peso}g de {veganPlate[ind]}</div>
    )
};

export default Vegan;