import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state={
    hasLogin:0,
    hasCode:1
}

export default new Vuex.Store({
    state
})
