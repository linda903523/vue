<template>
	<div id="datagrid">
		<ul class="foodlist-c">
			<li v-for="(obj, index) in dataset" >
				<img :src="obj.img"/>
				<div class="span-c">
					<span class="name-c">{{obj.name}}</span>
					<span class="jiage-c">{{obj.jiage}}</span>
				</div>
					<span>{{obj.miaoshu}}</span>
					<span>{{obj.age}}</span>
				<i class="tianjia-c"  @click="jiaru(index)"></i>
			</li>
		</ul>
		<loading v-show="loadingShow"></loading>
	</div>
</template>
<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import loading from '../loading/loading.vue'
	import './datagird.scss'
	import $ from 'jquery'
	export default {
		data(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			return {
				dataset: [],
				loadingShow: false,
				colsArray,
			}
		},
		props: ['api', 'cols','toolbar','tools','aa'],
		methods:{
			tianjia:function(index){
				var bb= this.dataset[index];
				this.$emit('abc',bb)
			},
			jiaru:function(index){
					var cc =JSON.stringify(this.dataset[index]);
					var self = this;
					console.log(self.aa);
					http.post({
						url:self.aa,
						params:{
							cc:cc
						}
					}).then(res=>{
						console.log(res);
					})
			 }
		},
		mounted(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data
			})
		},
		// created(){
		// 	if(this.tools){
  // 		       if(this.toolbar){
  // 		           this.toolList = this.tools
  // 		       } else {
  // 		           this.$parent.$parent.addTool(this.tools)
  // 		       }
  // 		   } 
		// },
		components: {
			loading
		}
	}
</script>
<style>
	ul,li{list-style:none;}
	.name-c{font-size:45px;}
	.foodlist-c li{position:relative;}
	.foodlist-c img{width:100%;}
	.tianjia-c{
	width: 80px;
    height: 80px;
    background-image: url("../../img/1.png");
    background-size:1500px;
    position:absolute;
    background-position:1504px 212px;
    bottom: -15px;
    right: 70px;
	}
	.jiage-c{position:absolute;right:40px;color:#F76D2F;}

</style>
