import Vue from 'vue';
import Vuex from 'vuex';
import {appAxios} from '@/ajax/axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        user: {},
        createdUser: {},
    },
    getters: {
        createdUser(state) {
            return state.createdUser;
        },
        users(state) {
            return state.users;
        },
        user(state) {
            return state.user;
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users.data;
        },
        setUser(state, user) {
            state.user = user.data;
        },
        setCreatedUser(state, user) {
            state.createdUser = user;
        },
        setUpdatedUser(state, user) {
            state.createdUser = user;
        }
    },
    actions: {
        getUsers(context, page = 1) {
            appAxios.get(`/users?per_page=5&page=${page}`)
                .then((response) => {
                    context.commit('setUsers', response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        getUser(context, userId) {
            appAxios.get(`/users/${userId}`)
                .then((response) => {
                    context.commit('setUser', response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        createUser(context, request) {
            appAxios.post('/users', request)
                .then((response) => {
                    context.commit('setCreatedUser', response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        updateUser(context, requestData) {
            appAxios.patch(`/users/${requestData.userId}`, requestData.request)
                .then((response) => {
                    context.commit('setUpdatedUser', response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    },
});
