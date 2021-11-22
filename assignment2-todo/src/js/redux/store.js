let store = null;

const createStore = function(data=[]){
    if(store === null){
        store = [... data];
    }
};

const getStore  = function (){
    return store;
}

const updateStore = function(newStore){
    store = [...newStore];
}
 
export {createStore, getStore, updateStore}