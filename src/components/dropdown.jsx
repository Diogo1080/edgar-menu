import React, {useContext} from "react";
import Styled from "styled-components"
import PokemonContext from "../context"

const DropdownStyled = Styled.div`
    position: relative;
    display:block;
    margin-top:0.5em;
    padding:0;

`;


const Dropdown = (props) => {
  const { label, selected, options, name, handleChange } = props;

  // Segunda feira TPC ao mudar no dropdown seleccionar o primeiro pokemon do tipo ! 
  const {setOptionSelected} = useContext(PokemonContext);
  

  return (
    <>
      <label><b>{label}:</b></label>
        <DropdownStyled >
          <select name={name} value={selected} onChange={(event) => {handleChange(event.target.value); setOptionSelected(null) }} >
            {options.map((element, key) => <option key={key} value={element}>{element}</option>)}
          </select>
        </DropdownStyled>
    </>
  );
}

export default Dropdown;