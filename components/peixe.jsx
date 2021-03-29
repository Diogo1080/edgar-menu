import React from "react";
import "../styles/main.less"    

//Tipo de peixe

//Rubalo
//Camarão
//Tubarão
//Pescada
//Sardinha
//Salmão

//Peso do peixe

// 200g de Rubalo (a azul, classe azul)

const Peixe = (props) => {
    return (
        <div className="blue"> {props.peso}g de {props.tipo}</div>
    );

};

export default Peixe;