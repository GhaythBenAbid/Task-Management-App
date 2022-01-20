const { createStore, action, thunk, persist } = require("easy-peasy");
const axios = require("axios");

const store = createStore(
    persist({
        message: {},
        user: {},



        //thunk
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
        })





    }));

module.exports = store;