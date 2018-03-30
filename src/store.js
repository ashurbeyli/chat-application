import { createStore, combineReducers } from 'redux';


// import reducers
import messageReducers from './reducers/messageReducers';

const reducers = combineReducers({
  messages: messageReducers
});

const store = createStore(reducers);

export default store;