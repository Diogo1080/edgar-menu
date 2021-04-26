import React, {useState} from "react";

const PokemonContext = React.createContext();

export const PokemonConsumer = PokemonContext.Consumer



export const PokemonProvider = (props) => {

    const [selectedType, changeSelectedType] = useState("Water")
    const {children} = props
    return (
        <PokemonContext.Provider value= {{selectedType, changeSelectedType}}>
            {children}
        </PokemonContext.Provider>

    )
}


export default PokemonContext