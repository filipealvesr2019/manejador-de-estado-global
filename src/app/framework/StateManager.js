class StateManager {
    constructor(){
        this.observers = new Map();
    }

    subscribe(key, callback){
        if(!this.observers.has(key)){
            this.observers.set(key, []);
        }
        this.observers.get(key).push(callback);
    }

    notify(key){
        if(this.observers.has(key)){
            this.observers.get(key).forEach(callback => callback(store.getState(key)));
        }
    }
}