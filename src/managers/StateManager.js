import Baobab from 'baobab';
import { browserHistory } from 'react-router';

class StateManager {
    constructor(){
        const data = {
            lists: ['Hello I am 1','Hello I am 5']
        };
        this._tree = new Baobab(data);
    }

    getStore() {
        return this._tree;
    }

    getHistory() {
        return this._history;
    }
}

let instance = new StateManager();

export default instance;