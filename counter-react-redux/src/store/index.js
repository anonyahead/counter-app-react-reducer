import {createStore} from 'redux'
const INITIAL_VALUE ={
    counter:0,
    privacy:false
}
const counterReducer=(store=INITIAL_VALUE,action)=>{
  
    if(action.type==='INCREMENT'){
        return {...store,counter: store.counter+1};
    }
    else if(action.type==='DECREMENT'){
        return {...store,counter: store.counter-1};
    }

    else if(action.type==='ADD'){
        return {...store,counter: store.counter+=action.payload.num};
    }
    else if(action.type==='SUBTRACT'){
        return {...store,counter: store.counter-=action.payload.num};
    }
    else if(action.type==='RESET'){
        return {...store,counter: 0};
    }
    else if(action.type==='TOGGLE_PRIVACY'){
        return {...store,privacy: !store.privacy};
    }

    return store;
}
const counterStore = createStore(counterReducer)
export default counterStore;