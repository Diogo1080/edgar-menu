import React from "react";
import "../styles/main.less"    



const Feijao = (props) => {
    return (
        <div>Feijao do tipo <span className={props.marca === "Cigala" ? "green" : "orange"}> {props.tipo} </span></div>
    );

};

export default Feijao;