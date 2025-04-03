class Store {
    constructor(){
        if(!Store.instance){
            this.state = new Map();
            Store.instance = this;
        }
        return Store.instance
    }
}