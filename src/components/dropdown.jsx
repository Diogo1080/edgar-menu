import React from "react";

const Dropdown = (props) => {
  const { label, selected, options, name, handleChange } = props;

  return (
    <>
      <label><b>{label}:</b></label>
        <div >
          <select name={name} value={selected} onChange={(event) => handleChange(event.target.value)} >
            {options.map((element, key) => <option key={key} value={element}>{element}</option>)}
          </select>
        </div>
    </>
  );
}

export default Dropdown;