import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/login'
import backstage from '../components/backstage/backstage.vue'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        backstage
    }
})