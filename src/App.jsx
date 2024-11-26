import React, {useState, useReducer} from "react";
import {hot} from "react-hot-loader";
import {PokemonProvider} from './context'
import PokemonPage from "./components/pokemonPage"
import "./styles/card.less"
import GlobalStyle from "./global-styles"
const App = (props) => {
    return (
        <PokemonProvider>
            <PokemonPage>
            </PokemonPage>
            <GlobalStyle/>
        </PokemonProvider>
    )
}


export default hot(module)(App);