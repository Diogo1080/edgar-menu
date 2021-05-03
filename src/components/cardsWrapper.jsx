import React, { useContext } from "react"
import PokemonContext from "../context"
import pokemonList from "../utils/pokemon.json"
import PokemonCard from "./card"


const CardsWrapper = () => {

    const {selectedType} = useContext(PokemonContext)

    return (

        <section>
            {

                pokemonList.pokemons.map((val) => {
                    if (val.type == selectedType) {
                        return <PokemonCard name={val.name}
                        description={val.description}
                        type={selectedType}
                        hp={val.hp}
                        attack={val.attack}
                        defense={val.defense}
                        spAttack={val.spAttack}
                        spDefense={val.spDefense}
                        speed={val.speed}
                        height={val.height}
                        weight={val.weight}
                        imageURL = {val.image}
                    />
                    }
                })

            }


        </section>
    )
}

export default CardsWrapper