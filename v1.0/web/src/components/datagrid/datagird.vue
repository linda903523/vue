<template>
	<div id="datagrid">
		<ul>
			<li v-for="(obj, index) in dataset">
				<img src="img[index]" alt="">
				<p>{{name[index]}}</p>
				<p>{{decorations[index]}}</p>
				<p>{{price[index]}}</p>
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
				name:[],
				price:[],
				img:[],
				decorations:[],
				toolList: null,
                toolbar_id: 'toobar_' + parseInt(Math.random() * 10000)
			}
		},
		props: ['api', 'cols','toolbar','tools'],
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