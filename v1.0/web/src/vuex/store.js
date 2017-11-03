import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/login'
import backstage from '../components/backstage/backstage.vue'
import list from '../components/list/list.vue'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        backstage,
        list
    }
})