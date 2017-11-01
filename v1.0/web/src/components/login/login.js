import Vue from 'vue'
import http from '../../utils/httpClient.js'
import router from '../../router/'

const state = {
}

const mutations = {
	login: (data, formData) => {
		formData.grant_type = 'password'
		http.get('/login', formData).then(response => {
			router.push({name: 'home'})
		})
	}
}

const actions = {
	login: (events, formData) => {
		events.commit('login', formData)
	}
}

export default {
	state,
	mutations,
	actions
}