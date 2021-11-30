import { createStore, Store } from "redux";
import {contadorReducer} from "./contador/contador.reducer";
import { incrementadorAction, multiplicarAction } from "./contador/contador.actions";


const store:Store = createStore(contadorReducer);
store.subscribe(()=>{
    console.log('Subs:',store.getState());
})

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);