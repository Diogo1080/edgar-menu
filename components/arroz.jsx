import React from "react";
import "../styles/main.less"    

/* marca cigala green */
/* todas as outras laranja */

const Arroz = (props) => {
    return (
    <div>Arroz <b>{props.marca}</b> do tipo <span className={props.marca === "Cigala" ? "green" : "orange"}> {props.tipo} </span></div>
    );

};

export default Arroz;