import React from "react";
import "../styles/main.less"    

//Salada Russa
//Salada Ibérica


const Salada = (props) => {
    return (
        <div>Salada - <span className={props.tipo === "Russa" ? "orange" : "green"}> {props.tipo}</span></div>
    );

};

export default Salada;