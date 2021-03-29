import React from "react";
import "../styles/main.less"    

/* tipo */
/* integral * /
*/

/* classe yellow */ 
const Massa = (props) => {
    const {integral} = props
    return (
        <div className="yellow"> Massa {integral ? "integral" : ""} </div>
    );

};

export default Massa;