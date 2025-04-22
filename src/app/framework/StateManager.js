import { store } from "./Store";

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

    unsubscribe(key, callback){
        const sub = this.observers.get(key) || [];
        this.observers.set(
            key,
            sub.filter(cb => cb !== callback)
        );
    }

    notify(key){
        if(this.observers.has(key)){
            this.observers.get(key).forEach(callback => callback(store.getState(key)));
        }
    }

    setState(key, value){
        store.setState(key, value);
        this.notify(key)
    }

    getState(key){
        return store.getState(key)
    }
}

export const stateManager = new StateManager();