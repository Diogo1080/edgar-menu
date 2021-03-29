import React from "react";
import "../styles/main.less"    

// props.tipo
// Tipo de Carne 
//Novilho
//Vaca
//Porco
//Frango
//Perú

//props.peso


// 200g de carne de Novilho (a castanho, classe brown)

const Carne = (props) => {
    return (
        <div className = "brown">{props.peso}g de carne de {props.tipo}.</div>
    );

};

export default Carne;