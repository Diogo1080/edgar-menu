import React, {useContext} from "react"
import PokemonContext from "../context"

const Description = (props) => {

    const {optionSelected} = useContext(PokemonContext)

    const {description} = props; 



    return (
        <div>
            {optionSelected}
        </div>
    )
}

export default Description