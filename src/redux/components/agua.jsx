import React, { useEffect, useState } from "react";
import "../styles/main.less"

const Agua = (props) => {

   const [haveGas, setHaveGas] = useState("Natural");

   const { gas, tamanho } = props;

   useEffect(() => {
      setHaveGas(gas ? 'das Pedras' : 'Natural')
   }, [gas])

   return <div > Agua {haveGas} de {tamanho}</div>

};

export default Agua;