import vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

vue.use(Vuex)




export default new Vuex.Store({
    state: {
        menu:[]
    },
    getters: {
        getMenu(state){
            return state.menu;
        },
    },
    mutations: {
        setMenu(state, menuList) {
            state.menu = menuList


        },
    },
    plugins:[createPersistedState()]

})