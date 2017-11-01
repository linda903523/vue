<template>
	<div id="user">
		<img src="../../img/timg.jpg" alt="">
		<form>
			<label>帐号：</label><input type="text" v-model="username"><br>
			<label>密码：</label><input type="password" v-model="password"><br>
			<input type="button" class="btn btn-primary pull-center m-t-n-xs" value="登录" @click="loginHandler">
			<loading v-show="loadingShow"></loading>
		</form>
	</div>
</template>

<script type="text/javascript">
	import loading from '../loading/loading.vue'
	import http from '../../utils/httpClient.js'
	import router from '../../router/'

	export default {
		data(){
			return {
				username: '',
				password: '',
				loadingShow: false
			}
		},
		methods: {
			loginHandler: function(){
				http.post('/login', {username: this.username, password: this.password}).then(res => {
					router.push({name: 'home'});
				})
			}
		},
		components: {
			loading
		}
	}
</script>