import React from "react";
import "../styles/main.less"    
import Salada from "./salada.jsx";
import Massa from "./massa.jsx";
import Arroz from "./arroz.jsx";
import Carne from "./carne.jsx";
import Peixe from "./peixe.jsx";
import Sumo from "./sumo.jsx";
/* tipo : */
/* tipo_arroz */
/* marca_arroz */ 
/* tipo_massa */
/* marca_massa */ 
/* tipo_sumo */


const Prato = (props) => {
    return (
        <div className="prato">
            <p> Tipo: {props.tipo} </p>
            <p> Acompanhamento: {(props.tipo === "Salada" && <Salada tipo={props.prato}></Salada>) || props.tipo === "Arroz" && <Arroz></Arroz> || props.tipo === "Massa" && <Massa></Massa>}</p>
            <p> Sumo: <Sumo tipo={props.sumo}></Sumo></p>
            <p> Prato: {(props.tipo === "Vegan" && <Salada tipo={props.prato}></Salada>) || (props.tipo === "Carne" && <Carne tipo={props.prato} peso={props.peso}></Carne>) || (props.tipo === "Peixe" && <Peixe tipo={props.prato} peso={props.peso}></Peixe>)}</p> 
        </div>
    );

};

export default Prato;