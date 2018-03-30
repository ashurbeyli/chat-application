import { createStore, combineReducers } from 'redux';

// import { setMessages } from './actions/messageActions';


// import reducers
import messageReducers from './reducers/messageReducers';

const reducer = combineReducers({
  messageReducers
});

const store = createStore(reducer);

// store.subscribe(() => { console.log('store', store.getState()); });
// store.dispatch(setMessages([{id: 1},{id: 2}]));

export default store;