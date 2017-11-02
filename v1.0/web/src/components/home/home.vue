<template>
	<div class="container">
		<!-- <div class="fl-toolbar" style="background: #fff;">
			<a href="javascript:" class="btn btn-primary btn-sm" :class="value.class" v-if="toolList" v-for="(value,key) in toolList" @click="click(value)">{{value.text ? value.text : key}}</a>
		</div> -->
		<header>
			<div class="home-div">
				<i class="ci-1"></i>
				<span class="ctime" >{{time}}</span>
			</div>
			<div>
				<ul>
					<li>
						<i class="ci-2"></i>
						<span>{{zhuohao}}</span>
					</li>
					<li><span>{{diancai}}</span></li>
					<input type="text" v-model="message" />
					<li><i class="ci-3" @click="serach"></i></li>
				</ul> 
			</div>
		</header>
		<div  id="box" class="body"  v-private>
			<img src="../../img/timg.jpg" class="ctimg-1"/>
			<ul class="c-ul1">
				<li @click="foodslist">推荐</li>
				<li @click="recai">热菜</li>
				<li @click="liangcai">冷菜</li>
				<li @click="tiandian">甜品</li>
				<li @click="yingping">饮料</li>
			</ul>
			<foodslist v-if="showw"></foodslist>
			<router-view v-if = "show"></router-view>
		</div>
		<footer>
			<dibu></dibu>
		</footer>
	</div>
</template>
<script type="text/javascript">
	//$children
	import Vue from 'vue'
	import './home.scss'
	import router from '../../router'
	import foodslist from '../foodslist/foodslist.vue'
	import footer from '../footer/footer.vue'
	import http from '../../utils/httpClient.js'
	export default {
		data(){
			return {
			time:'',
			zhuohao:'A区36号',
			diancai:'点菜',
			canshu:'',
			toolList: null,
			message:'',
			showw:true,
			show:false,
			 serachnumber:[]
			}
		},
		created: function () {
			var now = new Date();
			var hour = now.getHours();
			var min = now.getMinutes();
			hour = hour<10 ? '0'+hour : hour;
			min = min<10 ? '0'+min : min;
			this.time = hour + ':' + min;
		 },
		methods: {
			liangcai:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'liangcai'})
			},recai:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'recai'})
			},
			foodslist:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'foodslist'})
			},
			tiandian:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'tiandian'})
			},
			yingping:function(){
				this.showw=false;
				this.show=true;
				router.push({name:'yingping'})
			},
			gundong:function(){
			},
			tongxing:function(a){

				this.$emit('liang',a);
				this.canshu=JSON.stringify(a);
			},
			serach:function(){
				this.showw=false;
				this.show=false;
				router.push({name:'serach'})
				var self = this
				http.post({
	            url:'serach',
	            params:{
	                name:self.message
	            }
	        }).then(res=>{
	            this.serachnumber=res.data;
	            this.showw=false;
	            this.show=true;
	        })
			}
			
		},
		components:{
			foodslist,
			dibu:footer
		},
		directives: {
			//注册一个局布指令 v-private
			private: function(element){
			}
		}
	}
		

	
</script>