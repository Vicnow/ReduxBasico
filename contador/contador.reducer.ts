import { Action } from "../ngrx-fake/ngrx";

export function contadorReducer( state = 20, action:Action){
    
    switch(action.type){
        case 'INCREMENTAR':
            return state +=1;
        case 'DECREMENTAR':
            return state -=1;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        case 'RESET':
            return state = state * 0;
        default:
            return state;
    }
}
