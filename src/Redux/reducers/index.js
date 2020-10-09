import { combineReducers } from "redux";
import { pokemons } from "./pokemonreducer";

let reducers = combineReducers({
    pokemons,
});

export default reducers;