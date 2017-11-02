<template>
	<div id="user">
		<img src="../../img/timg.jpg" alt="">
		<form role="form">
			<div class="form-group text-left">
				<label>帐号：</label>
				<input type="text" v-model="username" class="form-control required">
			</div>
			<div class="form-group text-left">
				<label>密码：</label>
				<input type="password" v-model="password" class="form-control required">
			</div>
			<div class="form-group text-left">
				<input type="button" class="btn btn-primary pull-center m-t-n-xs" value="登录" @click="login">
			<loading v-show="loadingShow"></loading>
			</div>
		</form>
	</div>
</template>

<script type="text/javascript">
	import loading from '../loading/loading.vue'
	import http from '../../utils/httpClient.js'
	import router from '../../router'
	import $ from 'jquery'
	import './login.js'
	import './login.scss'

	export default {
		data(){
			return {
				username: '',
				password: '',
				loadingShow: false
			}
		},
		methods: {
			login: function(event){
				// if($('form').valid()){
				// 	this.$store.dispatch('login', {username: this.username, password: this.password})
				// }
				// var cc = JSON.stringify({username:this.username,password:this.password});
				var self = this;
                http.post({
                    url: 'login',
                    params:{
                        username:self.username,
                        password:self.password
                    }
                }).then(res => {
                    //console.log(res)
                    router.push({name:'home'})
                })
			}
		},
		components: {
			loading
		}
	}
</script>