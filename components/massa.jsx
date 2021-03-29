import React from "react";
import "../styles/main.less"    

/* tipo */
/* integral * /
*/

/* classe yellow */ 
const Massa = (props) => {
    return (
        <div className="yellow"> Massa {props.integral=="integral"?"integral" : ""} do tipo {props.tipo} </div>
    );

};

export default Massa;