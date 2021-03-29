import React from "react";
import "../styles/main.less"    

const Sumo = (props) => {


    if (props.tipo === "kiwi") {
        return (
               <div className="green"> Sumo de {props.tipo}</div>
        );
    }

    if (props.tipo === "ananas") {
        return (
                <div className="yellow"> Sumo de {props.tipo}</div>
        );
    }

    if (props.tipo === "morango") {
        return (
            <div className="red"> Sumo de {props.tipo}</div>
        );
    }

    if (props.tipo === "laranja") {
        return (
            <div className="orange"> Sumo de {props.tipo}</div>
        );
    }

   return  <div > Sumo de {props.tipo}</div>

};

export default Sumo;