import React, {useState, useEffect} from "react";
import "../styles/main.less"    
import Salada from "./salada.jsx";
import Massa from "./massa.jsx";
import Arroz from "./arroz.jsx";
import Carne from "./carne.jsx";
import Peixe from "./peixe.jsx";
import Sumo from "./sumo.jsx";
import Agua from "./agua.jsx";
import Vegan from "./vegan.jsx";
import Sobremesa from "./sobremesa.jsx";


const functionWithRegex = () => {
    /agua/g
}


const Prato = (props) => {
    const {tipo, peso ,acompanhamento , bebida} = props 

    const [sideDish, setSideDish] = useState (null)
    const [sideDishType, setSideDishType] = useState (null)

    useEffect(() => {
        setSideDish(acompanhamento.split(" ")[0])
        setSideDishType(acompanhamento.split(" ")[1])
    }, [acompanhamento])

    return (
        <div className="prato">
            <p> Tipo: {tipo} </p>
            <p> Acompanhamento: {(sideDish === "Salada" && <Salada tipo={sideDishType} ></Salada>) || sideDish === "Arroz" && <Arroz></Arroz> || sideDish === "Massa" && <Massa integral = {sideDishType === "Integral"}></Massa>}</p>
            <p> Bebida: {(props.bebida === "agua" && <Agua tamanho={'50cl'} gas></Agua>) || <Sumo tipo={props.sumo}></Sumo>}</p>
            <p> Prato: {(props.tipo === "Vegan" && <Vegan index={4} peso={props.peso} tipo={props.prato}></Vegan>) || (props.tipo === "Carne" && <Carne index={4} tipo={props.prato} peso={props.peso}></Carne>) || (props.tipo === "Peixe" && <Peixe index={4} tipo={props.prato} peso={props.peso}></Peixe>)}</p> 
            <p> Sobremesa: <Sobremesa index={4}></Sobremesa></p>
        </div>
    );

};

export default Prato;