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

const meetPlate = ["Novilho", "Vaca", "Porco", "Frango", "Perú"];

const Carne = (props) => {
    return (
        <div className = "brown">{props.peso}g de carne de {meetPlate[props.index]}.</div>
    );

};

export default Carne;