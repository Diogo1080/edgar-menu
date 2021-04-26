import React, {useEffect, useState, useContext} from "react"
import Dropdown from "./dropdown"
import pokemonList from "../pokemon.json"
import CardsWrapper from "./cardsWrapper"
import PokemonContext from "../context"
import Styled from "styled-components";


const StyledMain = Styled.main`
    background-color: #073642;
    height:100vh;
`;

function handlePokemonOptions(){
    let pokemonsType = [] 
    pokemonList.pokemons.forEach((val) => {
        if(pokemonsType.find((value) => value === val.type)){
            return null 
        }
        pokemonsType.push(val.type)
        
    }) 
    return pokemonsType;
}


const PokemonPage = () => {

    const [pokemonsType, setPokemonsType]  = useState([])

    const {selectedType, changeSelectedType} = useContext(PokemonContext)

    useEffect(() => {
        setPokemonsType(handlePokemonOptions())
    }, [])

    return (

            <StyledMain>
                <Dropdown label="Pokemon List" selected={selectedType} options={pokemonsType} name="Pokemon Selector" handleChange={changeSelectedType}>
                </Dropdown>
                <CardsWrapper>
                </CardsWrapper>
            </StyledMain>

    )
    
}

export default PokemonPage