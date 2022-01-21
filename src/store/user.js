const { action, thunk, persist, createStore, useStoreState } = require("easy-peasy");
const axios = require("axios");

var store = {
    message: {},
    user: {},
    userState: false,


    //thunk
    getAllUser: thunk(async (actions, { user }) => {
        console.log(user);
        const response = await axios.get("http://localhost:5000/api/auth");
        const data = await response.data;
        console.log(data);
    }),

    login: thunk(async (actions, { email, password }) => {
        const response = await axios.post("http://localhost:5000/api/auth/login", {
            email: email,
            password: password
        });
        const data = await response.data;

        actions.setMessage(data.message);
        actions.setUser(data.user);

    }),

    register: thunk(async (actions, { username, email, password }) => {
        const response = await axios.post("http://localhost:5000/api/auth/register", {
            username: username,
            email: email,
            password: password
        });
        const data = await response.data;

        actions.setMessage(data);

    }),



    //action
    setMessage: action((state, payload) => {
        state.message = payload;
    }),
    setUser: action((state, payload) => {
        state.user = payload;
        if(payload){

            state.userState = true;
        }
    }),
    setCollections: action((state, payload) => {
        state.collections = payload;
    }),
    setUserState: action((state, payload) => {
        state.userState = payload;
    })




};

export default store;