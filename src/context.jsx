import React, {useState} from "react";
import pokemonList from "./utils/pokemon.json";

const PokemonContext = React.createContext();

export const PokemonConsumer = PokemonContext.Consumer


export const PokemonProvider = (props) => {


    const [selectedType, changeSelectedType] = useState("Water")

    let initialOptionSelected = ""
    for (let i = 0; i < pokemonList.pokemons.length; i++) {
        if (pokemonList.pokemons[i].type === selectedType) {
            initialOptionSelected = pokemonList.pokemons[i].name;
            break;
        }
    }

    const [optionSelected, setOptionSelected] = useState(initialOptionSelected)
    console.log(optionSelected, selectedType)

    const {children} = props
    return (
        <PokemonContext.Provider
            value={{selectedType, changeSelectedType, optionSelected, setOptionSelected}}>
            {children}
        </PokemonContext.Provider>

    )
}


export default PokemonContext