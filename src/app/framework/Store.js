class Store {
    constructor(){
        if(!Store.instance){
            this.state = new Map();
            Store.instance = this;
        }
        return Store.instance
    }

    setState(key, value){
        this.state.set(key, value)
    }
    
    getState(key){
        this.state.get(key)
    }
}

export const store = new Store();