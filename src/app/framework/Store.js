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

    loadFromLocalStorage(){
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            this.state.set(key, value);
        }
    }
}

export const store = new Store();