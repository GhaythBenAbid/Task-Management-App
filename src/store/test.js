import { action, createStore, persist } from "easy-peasy";


const store = createStore(
    persist({
        x : 0,


        //action
        setX : action((state, payload) => {
            state.x = payload;
        }),
        aadX : action((state, payload) => {
            state.x += payload;
        }),
        subX : action((state, payload) => {
            state.x -= payload;
        }),
    })
);


export default store;
