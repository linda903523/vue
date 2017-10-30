<template>
	<div>
		<ul class="foodlist-c">
			<li v-for="(obj, index) in dataset" >
				<img :src="img[index]">
				<div class="span-c">
				<span>{{name[index]}}</span>
				<span>{{age[index]}}</span>
				</div>
				<span>{{xingbie[index]}}</span>
			</li>
		</ul>
		<loading v-show="loadingShow"></loading>
	</div>
</template>
<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import loading from '../loading/loading.vue'
	export default {
		data: function(){
			var colsArray = this.cols ? this.cols.split(',') : [];
			return {
				dataset: [],
				loadingShow: false,
				colsArray,
				img:[],
				name:[],
				age:[],
				xingbie:[]
			}
		},
		props: ['api', 'cols'],
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data
				for(var i=0;i<res.data.length;i++){
					this.img.push(res.data[i].img);
					this.name.push(res.data[i].name);
					this.age.push(res.data[i].nianling);
					this.xingbie.push(res.data[i].xingbie);
				}
				
			})
		},
		components: {
			loading
		}
	}
</script>
<style>
	ul,li{list-style:none;}
	li{margin:10px;}
	.foodlist-c img{width:100%;}
</style>