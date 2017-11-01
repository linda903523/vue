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
				if($('form').valid){
					this.$store.dispatch('login', {username: this.username, password: this.password})
				}
			}
		},
		components: {
			loading
		}
	}
</script>