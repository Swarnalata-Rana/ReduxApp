// write a fucrtion to return the intial state and the root reducer
import {createStore} from 'redux';
import rootReducer from '../Reducers';
// expoet the fuction
export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState
    )
}
