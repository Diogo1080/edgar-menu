import React, { useState, useReducer } from "react";
import { hot } from "react-hot-loader";
import Prato from "./redux/components/prato.jsx"
import Dropdown from "./components/dropdown.jsx"
import GlobalStyle from "./global-styles";
import { connect } from "react-redux";
import {selectSideDish, selectWeekDay} from "./redux/actions"
import { selectDrinkType } from "./redux/actions"

const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
const tipoPratos = ["Carne", "Peixe", "Vegan"];
const tiposBebidas = ["Agua Natural", "Agua das Pedras", "Kumo kiwi", "Sumo morango", "Sumo ananás", "Sumo laranja"];
const tiposAcompanhamentos = ["Massa", "Massa Integral", "Arroz", "Salada Russa", "Salada Ibérica"];
const initialState = {
    diaSemana: diasDaSemana[0],
    tipoPrato: tipoPratos[0],
    tipoBebida: tiposBebidas[0],
    tipoAcompanhamento: tiposAcompanhamentos[0],
}
const oldReducer = (state) => state
const App = (props) => {
    const {weekDay, selectWeekDay} = props
    const {drinkType, selectDrinkType} = props
    const {sideDish, selectSideDish} = props
    const [state, dispatch] = useReducer(oldReducer, initialState);
    return (
        <>
            <GlobalStyle />
            <Dropdown 
                name="diaSemana"
                className="menu"
                label="Escolha o dia da semana:"
                selected={weekDay}
                options={diasDaSemana}
                handleChange={(item) => { selectWeekDay(item)}}>
            </Dropdown>
            <br></br>
            <Dropdown  // Samuel e o Daniel
                name="tipoPrato"
                className="menu"
                label="Escolha o prato:"
                selected={state.tipoPrato}
                options={tipoPratos}
                handleChange={(item) => { dispatch({ type: 'tipoPrato', value: item }) }}>
            </Dropdown>~
            <br></br>
            <Dropdown  // Luis e o Tojo
                name="bebida"
                className="menu"
                label="Escolha a bebida:"
                selected={drinkType}
                options={tiposBebidas}
                handleChange={(item) => { selectDrinkType(item)}}>
            </Dropdown>
            <br></br>
            <Dropdown // Diogo e Victor
                name="acompanhemto"
                className="menu"
                label="Escolha o acompanhamento:"
                selected={sideDish}
                options={tiposAcompanhamentos}
                handleChange={(item) => { selectSideDish(item) }}>
            </Dropdown>
            <Prato
                tipoPrato={state.tipoPrato}
                peso="1000"
                tipoAcompanhamento={state.tipoAcompanhamento}
                diaSemana={state.diaSemana}
                tipoBebida={state.tipoBebida}>
            </Prato>
        </>
    )
};
const mapStateToProps = (state) => ({
    weekDay: state.weekDay,
    drinkType: state.drinkType,
    sideDish: state.sideDish
})

const mapDispatchToProps =  ({
    selectWeekDay: (item) => selectWeekDay(item),
    selectDrinkType: (item) => selectDrinkType(item),
    selectSideDish: (item) => selectSideDish(item)
})

export default hot(module)(connect(mapStateToProps, mapDispatchToProps)(App));