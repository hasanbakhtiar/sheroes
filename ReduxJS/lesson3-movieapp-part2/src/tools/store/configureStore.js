import { combineReducers, createStore } from 'redux';
import { movieReducer } from '../reducers/movieReducer';

const configureStore = () => {

    const store = createStore(combineReducers({
        movie:movieReducer
    }));
    return store;
}

export default configureStore