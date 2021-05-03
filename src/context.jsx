import React, {useState} from "react";

const PokemonContext = React.createContext();

export const PokemonConsumer = PokemonContext.Consumer



export const PokemonProvider = (props) => {

    const [selectedType, changeSelectedType] = useState("Water")
    const [optionSelected, setOptionSelected] = useState(null)
    const {children} = props
    return (
        <PokemonContext.Provider value= {{selectedType, changeSelectedType, optionSelected, setOptionSelected}}>
            {children}
        </PokemonContext.Provider>

    )
}


export default PokemonContext