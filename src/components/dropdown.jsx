import React, {useContext} from "react";
import Styled from "styled-components"
import PokemonContext from "../context"
import pokemonList from "../utils/pokemon.json";

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

    function setFirstPokemon(value) {
        for (let i = 0; i < pokemonList.pokemons.length; i++) {
            if (pokemonList.pokemons[i].type === value) {
                setOptionSelected(pokemonList.pokemons[i].name);
                break;
            }
        }
    }

    return (
    <>
      <label><b>{label}:</b></label>
        <DropdownStyled >
          <select name={name} value={selected} onChange={(event) => {handleChange(event.target.value); setFirstPokemon(event.target.value)}} >
            {options.map((element, key) => <option key={key} value={element}>{element}</option>)}
          </select>
        </DropdownStyled>
    </>
  );
}

export default Dropdown;