import {getStore, updateStore} from './store';

const reducer  = function( action){
  console.log(action.payload, action.type)
    switch(action.type){
        case "edit":
          console.log(payload)
          action.cb()
          
        ;
        case "delete": 
          const store = getStore();
          const index = action.payload.index;
          const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
          updateStore(newStore);
          action.cb();
          return "remove an employee";
        case "add": 
          return "add a new employee";
        default: return getStore()
    }

};

export default reducer;