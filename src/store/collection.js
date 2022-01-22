const { action, thunk, persist } = require("easy-peasy");
const axios = require("axios");

var store = {
    collections: [],
    collection: {},

    //thunk
    getAllCollections: thunk(async (actions) => {
        const response = await axios.get("http://localhost:5000/api/collection");
        const data = await response.data;
        actions.setCollections(data);
    }),

    getCollectionsByUserId: thunk(async (actions, { id }) => {
        const response = await axios.get("http://localhost:5000/api/collection/" + id);
        const data = await response.data;
        console.log(data);
        actions.setCollections(data);
    }),

    createCollection: thunk(async (actions, { collectionname, option, userId }) => {
        const response = await axios.post("http://localhost:5000/api/collection", {
            collection_name: collectionname,
            icon: option,
            client_id: userId
        });
        const data = await response.data;
        console.log(data);
        actions.setCollection(data);
    }),




    //action
    setCollections: action((state, payload) => {
        state.collections = payload;
    }),
    setCollection: action((state, payload) => {
        state.collection = payload;
    }),






};

export default store;


