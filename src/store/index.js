import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    posts: [],
    users: [],
  },
  mutations: {
    setPost(state, posts) {
      state.posts = posts;
    },

    setUsers(state, user) {
      state.users = user;
    },
  },
  actions: {
    async loadPost({ commit }) {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data)
        .then((posts) => commit("setPost", posts));
    },

    async loadUser({ commit }) {
      await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data)
        .then((user) => commit("setUsers", user))
        .catch((err) => console.log(err));
    },
  },

  getters: {
    posts: (state) => state.posts,

    users: (state) => state.users,
  },
  modules: {},
});
