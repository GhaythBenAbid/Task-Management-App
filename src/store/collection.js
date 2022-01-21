const { action, thunk, persist } = require("easy-peasy");
const axios = require("axios");

var store = {
    collections : [],

    //thunk
    getAllCollections: thunk(async (actions) => {
        const response = await axios.get("http://localhost:5000/api/collection");
        const data = await response.data;
        actions.setCollections(data);
    }),

    getCollectionsByUserId : thunk(async (actions , {id}) => {
        const response = await axios.get("http://localhost:5000/api/collection/" + id);
        const data = await response.data;
        console.log(data);
        actions.setCollections(data);
    }),
    


    //action
    setCollections: action((state, payload) => {
        state.collections = payload;
    })

    




};

export default store;


