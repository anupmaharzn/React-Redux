//about redux basic execute using node js

//importing redux
const redux = require('redux');

//createstore is function which is declared but dont executed yet
const createStore = redux.createStore;

const intialState = {
    counter: 0,
}

//reducer 
//should be intialized first 
const rootReducer = (state = intialState, action) => {
    if (action.type === 'INC_COUNTER') {
        //MUST not mutate the state 
        return {
            ...state,
            counter: state.counter + 1,
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }
    return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
//subscribe take arugment fucntion that is executed when ever state is updated  
store.subscribe(() => {
    console.log('[subscription]', store.getState());
})

//Dispatching Action
//dispatchin fuction takes argument(object ) and that argument is an action
//need to have type property 
//type is unique identifier of your choice and use uppper case
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());


///implementation garda halka diff hunxa yesma gayeko vanda