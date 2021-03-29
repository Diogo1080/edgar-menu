import React from "react";
import "../styles/main.less"    


const fishPlate = ["Rubalo", "Camarão", "Tubarão", "Pescada", "Sardinha", "Salmão",];

const Peixe = (props) => {
    return (
        <div className="blue"> {props.peso}g de {fishPlate[props.index]}</div>
    );

};

export default Peixe;