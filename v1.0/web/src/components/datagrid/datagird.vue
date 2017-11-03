<template>
	<div id="datagrid">
		<ul class="foodlist-c">
			<li v-for="(obj, index) in dataset" >
				<img :src="obj.img"/>
				<div class="span-c">
					<span class="name-c">{{obj.name}}</span>
					<span class="jiage-c">{{obj.price}}元</span>
				</div>
				<span>{{obj.decorations}}</span>
				<i class="ai"></i>
				<i class="tianjia-c" @click="jiaru(index)"></i>
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
				colsArray
			}
		},
		props: ['api', 'cols','toolbar','tools','aa','my'],
		methods:{
			tianjia:function(index){
				var bb = this.dataset[index];
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
		mounted:function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data
			})
		},
		components: {
			loading
		}
	}
</script>