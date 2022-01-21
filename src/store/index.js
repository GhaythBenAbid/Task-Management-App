import { createStore, persist } from 'easy-peasy';

import user from './user';
import collection from './collection';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore({
    user : persist(user , { storage : 'localStorage' }),  
    collection : persist(collection , { storage : 'localStorage' }), 

    
});

export default store;