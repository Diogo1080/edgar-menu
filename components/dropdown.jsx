import React from "react";

// props ----> selected : "Peixe",  options : ["Peixe", "Carne", "Vegetariano"], label: Selecione o tipo de prato, name: tipo


const Dropdown = (props) => {
  const { label, selected, options, name, handleChange } = props;
  return (
    <>

      <strong>{label}</strong>
      <select name={name} value={selected} onChange={(event) => handleChange(event.target.value)} >
        {options.map((element) => <option value={element}>{element}</option>)}
      </select>
    </>
  );
};

export default Dropdown;