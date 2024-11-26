import React, {useContext} from "react"
import PokemonContext from "../context"
import pokemonJson from "../utils/pokemon.json";

const PokemonDescription = (props) => {


    const {optionSelected} = useContext(PokemonContext);

    return (
        <>
            {pokemonJson.pokemons.filter(pokemon => pokemon.name === optionSelected)[0]?.description + " hey you did it!"}
        </>
    )
}

export default PokemonDescription