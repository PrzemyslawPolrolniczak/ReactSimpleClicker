import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';

const initialState = {
    rotating: true,
    points: 0
}

const configureStore = (state = initialState) => {
    return createStore(rootReducer, state)
}

export default configureStore;