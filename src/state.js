import Baobab from 'baobab';
import {monkey} from 'baobab';

const options = {};

const data = {
    level1: {
        level2: {
            type: ''
        },
        level3: {
            text: ''
        },
        level4: []
    }
};

export default new Baobab(data, options);
