import React, {useEffect, useState, useContext} from "react"
import Dropdown from "./dropdown"
import PokemonDescription from "./pokemonDescription"
import pokemonList from "../utils/pokemon.json"
import CardsWrapper from "./cardsWrapper"
import PokemonContext from "../context"
import Styled from "styled-components";


const Cards = Styled.main`
    display: flex;
    flex-flow: column wrap;

`;
const CardsChildren = Styled.div`
    display: flex;
    flex-flow: row wrap;
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

            <Cards>
                <Dropdown label="Pokemon List" selected={selectedType} options={pokemonsType} name="Pokemon Selector" handleChange={changeSelectedType}>
                </Dropdown>
                
                <CardsWrapper>
                </CardsWrapper>
               
                <PokemonDescription>
                </PokemonDescription>
               
            </Cards>

    )
    
}

export default PokemonPage