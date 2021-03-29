import React, {useState} from "react";
import { hot } from "react-hot-loader";
import Prato  from "../components/prato.jsx"
import Dropdown from "../components/dropdown.jsx"


const daysOfWeek = ["segunda", "terça", "quarta", "quinta", "sexta","sabado", "domingo"] 
const plateTypes = ["carne", "peixe", "vegan"]
const drinkTypes = ["agua natural", "agua das pedras", "sumo kiwi", "sumo morango", "sumo ananás", "sumo laranja"]
const sideDishTypes = ["Massa", "Massa Integral", "Arroz", "Salada Russa", "Salada Ibérica"]

const App = () => {
    const [dayOfWeek, setDaysOfWeek] = useState(daysOfWeek[0])
    const [plateType, setPlateType] = useState(plateTypes[0])
    const [drinkType, setDrinkType] = useState(drinkTypes[0])
    const [sideDishType, setSideDishType] = useState(sideDishTypes[0])
    return(
        <>
            <Dropdown name="dayOfWeek" className="menu" label="Escolha o dia da semana:" selected={dayOfWeek} options={daysOfWeek} handleChange={(item) => setDaysOfWeek(item)}></Dropdown>
            <br></br>
            <Dropdown name="tipo" className="menu" label="Escolha o prato:" selected={plateType} options={plateTypes} handleChange={(item) => setPlateType(item)}></Dropdown>
            <br></br>
            <Dropdown name="drink" className="menu" label="Escolha a bebida:" selected={drinkType} options={drinkTypes} handleChange={(item) => setDrinkType(item)}></Dropdown>
            <br></br>
            <Dropdown name="acompanhemtos" className="menu" label="Escolha o acompanhamento:" selected={sideDishType} options={sideDishTypes} handleChange={(item) => setSideDishType(item)}></Dropdown>
            <Prato tipo={plateType} peso="1000" acompanhamento={sideDishType} bebida={drinkType}></Prato>
        </>
    )
};


export default hot(module)(App);
